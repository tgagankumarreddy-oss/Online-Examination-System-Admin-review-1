import React, { useEffect, useState } from 'react';
import './App.css';
import { AppLayout } from './components/layout/AppLayout.jsx';
import { AdminDashboardView } from './admin/AdminDashboardView.jsx';
import { AdminQuestionBankView } from './admin/AdminQuestionBankView.jsx';
import { AdminExamManagementView } from './admin/AdminExamManagementView.jsx';
import initialQuestions from './data/questions.json';
import {
  isStorageAvailable, initializeStorage, getStoredQuestions,
  getStoredExams, getStoredResults
} from './utils/storage.js';

export default function App() {
  const [activeNav, setActiveNav] = useState('admin_dashboard');
  const [stats, setStats] = useState({
    examsCount: 0, questionsCount: 0, activeExams: 0, resultsCount: 0
  });

  const refreshStats = () => {
    const questions = getStoredQuestions();
    const exams = getStoredExams();
    const results = getStoredResults();
    setStats({
      examsCount: exams.length,
      questionsCount: questions.length,
      activeExams: exams.filter((exam) => exam.status === 'Active').length,
      resultsCount: results.length
    });
  };

  useEffect(() => {
    if (isStorageAvailable()) {
      initializeStorage(initialQuestions);
      refreshStats();
    }
  }, []);

  const renderView = () => {
    if (activeNav === 'admin_questions') {
      return <AdminQuestionBankView onNavigate={setActiveNav} />;
    }
    if (activeNav === 'admin_exams') {
      return <AdminExamManagementView onNavigate={setActiveNav} />;
    }
    return <AdminDashboardView onNavigate={setActiveNav} stats={stats} />;
  };

  return (
    <AppLayout
      activeRole="admin"
      onRoleChange={() => {}}
      activeNav={activeNav}
      onNavChange={setActiveNav}
    >
      {renderView()}
    </AppLayout>
  );
}
