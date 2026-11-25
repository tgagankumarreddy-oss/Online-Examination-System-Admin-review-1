/**
 * Storage Utility for Online Examination System
 * Manages all browser LocalStorage interactions with error handling and JSON validation.
 * Strictly client-side persistence without external backend servers.
 */

import { INITIAL_EXAMS, INITIAL_RESULTS, INITIAL_USERS } from '../data/seedData.js';

export const STORAGE_KEYS = {
  QUESTIONS: 'oes_questions',
  EXAMS: 'oes_exams',
  CURRENT_USER: 'oes_current_user',
  EXAM_RESULTS: 'oes_exam_results',
  ACTIVE_SESSION: 'oes_active_session',
  SYSTEM_STATUS: 'oes_system_initialized'
};

/**
 * Checks if browser LocalStorage is supported and functional.
 * @returns {boolean}
 */
export function isStorageAvailable() {
  try {
    const testKey = '__oes_storage_test__';
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    console.error('LocalStorage is not available:', error);
    return false;
  }
}

/**
 * Safely retrieve and parse data from LocalStorage.
 * @param {string} key
 * @param {any} defaultValue
 * @returns {any}
 */
export function getItem(key, defaultValue = null) {
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null || raw === undefined) {
      return defaultValue;
    }
    return JSON.parse(raw);
  } catch (error) {
    console.warn(`Error reading key "${key}" from LocalStorage. Returning default.`, error);
    return defaultValue;
  }
}

/**
 * Safely serialize and store data in LocalStorage.
 * @param {string} key
 * @param {any} value
 * @returns {boolean} Success status
 */
export function setItem(key, value) {
  try {
    const serialized = JSON.stringify(value);
    window.localStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    console.error(`Error saving key "${key}" to LocalStorage:`, error);
    return false;
  }
}

/**
 * Remove an item from LocalStorage.
 * @param {string} key
 */
export function removeItem(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.warn(`Error removing key "${key}" from LocalStorage:`, error);
  }
}

/**
 * Initialize storage with default questions, exams, and demo results if not present.
 * @param {Array} initialQuestions - Default question bank from questions.json
 * @returns {Object} Initialization summary report
 */
export function initializeStorage(initialQuestions = []) {
  if (!isStorageAvailable()) {
    return {
      success: false,
      message: 'Browser LocalStorage is unavailable.'
    };
  }

  // 1. Initialize Questions
  let questionsInitialized = false;
  const existingQuestions = getItem(STORAGE_KEYS.QUESTIONS, null);
  if (!existingQuestions || !Array.isArray(existingQuestions) || existingQuestions.length === 0) {
    setItem(STORAGE_KEYS.QUESTIONS, initialQuestions);
    questionsInitialized = true;
  }

  // 2. Initialize Exams
  const existingExams = getItem(STORAGE_KEYS.EXAMS, null);
  if (!existingExams || !Array.isArray(existingExams) || existingExams.length === 0) {
    setItem(STORAGE_KEYS.EXAMS, INITIAL_EXAMS);
  }

  // 3. Initialize Demo Results
  const existingResults = getItem(STORAGE_KEYS.EXAM_RESULTS, null);
  if (!existingResults || !Array.isArray(existingResults) || existingResults.length === 0) {
    setItem(STORAGE_KEYS.EXAM_RESULTS, INITIAL_RESULTS);
  }

  // 4. Initialize Active User Session (Default Admin)
  const existingUser = getItem(STORAGE_KEYS.CURRENT_USER, null);
  if (!existingUser) {
    setItem(STORAGE_KEYS.CURRENT_USER, INITIAL_USERS[0]);
  }

  // Set system health flag
  setItem(STORAGE_KEYS.SYSTEM_STATUS, {
    version: '1.0.0',
    initializedAt: new Date().toISOString(),
    status: 'Ready'
  });

  const storedQuestions = getItem(STORAGE_KEYS.QUESTIONS, []);
  const storedExams = getItem(STORAGE_KEYS.EXAMS, []);
  const storedResults = getItem(STORAGE_KEYS.EXAM_RESULTS, []);

  return {
    success: true,
    questionsCount: storedQuestions.length,
    examsCount: storedExams.length,
    resultsCount: storedResults.length,
    newlySeeded: questionsInitialized,
    storageStatus: 'Active'
  };
}

/**
 * Reset entire application storage back to initial seed defaults
 * @param {Array} defaultQuestions
 */
export function resetStorageToDefaults(defaultQuestions = []) {
  setItem(STORAGE_KEYS.QUESTIONS, defaultQuestions);
  setItem(STORAGE_KEYS.EXAMS, INITIAL_EXAMS);
  setItem(STORAGE_KEYS.EXAM_RESULTS, INITIAL_RESULTS);
  setItem(STORAGE_KEYS.CURRENT_USER, INITIAL_USERS[0]);
  return {
    success: true,
    message: 'System storage restored to default factory seed data.'
  };
}

/* =========================================================================
 * EXAM CRUD HELPERS
 * ========================================================================= */

export function getStoredExams() {
  return getItem(STORAGE_KEYS.EXAMS, []);
}

export function saveStoredExams(exams) {
  return setItem(STORAGE_KEYS.EXAMS, exams);
}

export function saveExam(examData) {
  const exams = getStoredExams();
  const existingIndex = exams.findIndex((e) => e.id === examData.id);

  let updated;
  if (existingIndex >= 0) {
    // Update existing exam
    updated = [...exams];
    updated[existingIndex] = { ...updated[existingIndex], ...examData, updatedAt: new Date().toISOString() };
  } else {
    // Insert new exam
    const newExam = {
      ...examData,
      id: examData.id || `exam_${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: examData.status || 'Active'
    };
    updated = [newExam, ...exams];
  }

  saveStoredExams(updated);
  return updated;
}

export function deleteExam(examId) {
  const exams = getStoredExams();
  const filtered = exams.filter((e) => e.id !== examId);
  saveStoredExams(filtered);
  return filtered;
}

export function toggleExamStatus(examId) {
  const exams = getStoredExams();
  const updated = exams.map((exam) => {
    if (exam.id === examId) {
      return {
        ...exam,
        status: exam.status === 'Active' ? 'Inactive' : 'Active'
      };
    }
    return exam;
  });
  saveStoredExams(updated);
  return updated;
}

/* =========================================================================
 * QUESTION BANK CRUD HELPERS
 * ========================================================================= */

export function getStoredQuestions() {
  return getItem(STORAGE_KEYS.QUESTIONS, []);
}

export function saveStoredQuestions(questions) {
  return setItem(STORAGE_KEYS.QUESTIONS, questions);
}

export function saveQuestion(questionData) {
  const questions = getStoredQuestions();
  const existingIndex = questions.findIndex((q) => q.id === questionData.id);

  let updated;
  if (existingIndex >= 0) {
    updated = [...questions];
    updated[existingIndex] = { ...updated[existingIndex], ...questionData, updatedAt: new Date().toISOString() };
  } else {
    const newQuestion = {
      ...questionData,
      id: questionData.id || `q_${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    updated = [newQuestion, ...questions];
  }

  saveStoredQuestions(updated);
  return updated;
}

export function deleteQuestion(questionId) {
  const questions = getStoredQuestions();
  const filtered = questions.filter((q) => q.id !== questionId);
  saveStoredQuestions(filtered);
  return filtered;
}

/* =========================================================================
 * RESULTS & SUBMISSIONS HELPERS
 * ========================================================================= */

export function getStoredResults() {
  return getItem(STORAGE_KEYS.EXAM_RESULTS, []);
}

export function saveExamResult(result) {
  const currentResults = getStoredResults();
  const updated = [result, ...currentResults];
  setItem(STORAGE_KEYS.EXAM_RESULTS, updated);
  return updated;
}

export function deleteExamResult(resultId) {
  const results = getStoredResults();
  const filtered = results.filter((r) => r.id !== resultId);
  setItem(STORAGE_KEYS.EXAM_RESULTS, filtered);
  return filtered;
}

export function clearAllResults() {
  setItem(STORAGE_KEYS.EXAM_RESULTS, []);
  return [];
}

/* =========================================================================
 * USER SESSION HELPERS
 * ========================================================================= */

export function getCurrentUser() {
  return getItem(STORAGE_KEYS.CURRENT_USER, INITIAL_USERS[0]);
}

export function setCurrentUser(user) {
  return setItem(STORAGE_KEYS.CURRENT_USER, user);
}

export function clearCurrentUser() {
  removeItem(STORAGE_KEYS.CURRENT_USER);
}

/* =========================================================================
 * STUDENT SESSION HELPERS
 * ========================================================================= */

export function getStudentSession() {
  return getItem(STORAGE_KEYS.ACTIVE_SESSION, null);
}

export function setStudentSession(sessionData) {
  return setItem(STORAGE_KEYS.ACTIVE_SESSION, sessionData);
}

export function clearStudentSession() {
  removeItem(STORAGE_KEYS.ACTIVE_SESSION);
}

