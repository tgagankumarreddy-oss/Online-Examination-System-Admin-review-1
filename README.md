# Module 1 – Admin Module

## Purpose
Administrator-facing management of the question bank and examination setup.

## Features implemented in this source project
- Admin dashboard with examination, question and result summary counts.
- Question bank listing and management.
- Add, edit and delete questions through the existing question-bank view.
- Question search/filter controls provided by the existing view.
- Create and edit examinations, configure examination details and select/map questions.
- Activate or deactivate examinations through the existing exam-management view.

## Implementation flow
Admin dashboard → Question Bank / Exam Management → save changes to browser LocalStorage. The student examination module reads the same stored exam and question collections when the modules are integrated under the same browser origin.

## Source files in this module
- `src/admin/AdminDashboardView.jsx`
- `src/admin/AdminQuestionBankView.jsx`
- `src/admin/AdminExamManagementView.jsx`

## Shared files included so this module can run
- `src/components/common/` – reusable buttons, cards, form controls, modal and table.
- `src/components/layout/` – application layout, sidebar and top navigation.
- `src/data/seedData.js` and `src/data/questions.json` – initial browser data.
- `src/utils/storage.js` – shared LocalStorage functions.
- `src/App.css` and `src/index.css` – original project styling.
- `src/main.jsx`, `index.html`, `package.json`, `package-lock.json`, `vite.config.js` – Vite application setup.

## Run the module
Open this extracted folder in VS Code or a terminal and run:

```bash
{info['run']}
```

## Manual verification
{info['manual']}

## Important implementation notes and limitations
{info['limitations']}

## Technology used in the uploaded project
- React 18
- JavaScript / JSX
- HTML
- CSS
- Vite
- Browser LocalStorage
- JSON seed data

There is no backend server, database or external API in this frontend project.

## Integration notes
The three modules share the same browser storage keys and data structures from `src/utils/storage.js`. For a combined application, keep one copy of the shared `src/components`, `src/data`, `src/utils`, `src/App.css` and `src/index.css` folders/files, then combine the module views and navigation in one `src/App.jsx`.

Do not run the separate module apps on different ports and expect them to share browser LocalStorage. Browser storage is isolated by origin (including port).
"# Online-Examination-System-Admin" 
