# Module 1 – Admin Module – Module Source Folder

## Purpose
Administrator-facing management of the question bank and examination setup.

## Implemented responsibilities
- Admin dashboard with examination, question and result summary counts.
- Question bank listing and management.
- Add, edit and delete questions through the existing question-bank view.
- Question search/filter controls provided by the existing view.
- Create and edit examinations, configure examination details and select/map questions.
- Activate or deactivate examinations through the existing exam-management view.

## Module implementation files
- `src/admin/AdminDashboardView.jsx`
- `src/admin/AdminQuestionBankView.jsx`
- `src/admin/AdminExamManagementView.jsx`

## Data flow
Admin dashboard → Question Bank / Exam Management → save changes to browser LocalStorage. The student examination module reads the same stored exam and question collections when the modules are integrated under the same browser origin.

## Important limitations
This is a frontend demonstration. The uploaded source uses LocalStorage and seeded demo data. It does not provide server-side authentication, authorization or shared multi-device data.

## How to run this module
This folder contains the module-specific source files. The ZIP archive root contains the Vite application shell, shared components, styling, seed data, storage utility and package files needed to run this module.

1. Extract the complete ZIP archive.
2. Open the extracted archive's root folder (not this nested module folder) in VS Code.
3. Run:

```bash
npm install
npm run dev
```

See the `README.md` at the archive root for full setup, manual verification and integration notes.
