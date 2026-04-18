# Unit Testing for Frontend & Backend Modules

## Aim

To perform automated unit testing on a full-stack application using **pytest** for backend API validation and **vitest** for frontend form testing, and to automate test execution via a **GitHub Actions CI workflow**.

---

## Tech Stack

| Layer | Framework | Test Tool |
|---|---|---|
| Backend | Flask (Python) | pytest |
| Frontend | React + Vite | vitest + Testing Library |
| CI/CD | GitHub Actions | ubuntu-latest runner |

---

## Steps

### 1. Clone & Structure the Project
```bash
git clone <your-repo-url>
cd my-app
```
Ensure the project follows this layout:
```
my-app/
├── backend/        # Flask API + pytest tests
├── frontend/       # React app + vitest tests
└── .github/workflows/test.yml
```

### 2. Run Backend Tests (pytest)
```bash
cd backend
pip install -r requirements.txt
pytest -v
```
Tests cover:
- `GET /api/health` → expects `200 OK`
- `POST /api/login` with valid credentials → expects token
- `POST /api/login` with invalid credentials → expects `401`

### 3. Run Frontend Tests (vitest)
```bash
cd frontend
npm install
npm test
```
Tests cover:
- Form renders correctly in the DOM
- Validation error shown when fields are empty on submit
- `onSubmit` callback fires with correct credential payload

### 4. Push to GitHub to Trigger CI
```bash
git add .
git commit -m "Add unit tests for frontend and backend"
git push origin main
```

### 5. View Workflow Results
- Navigate to your repository on GitHub
- Go to **Actions** → select the latest workflow run
- Verify both `Backend (pytest)` and `Frontend (vitest)` jobs pass ✅
- Capture screenshots of the terminal output inside each job

---

## Learning Outcomes

- Understand the role of unit testing in validating isolated components of a full-stack application.
- Write and execute API tests using **pytest** and Flask's test client.
- Write and execute UI/form tests using **vitest** and **React Testing Library**.
- Configure a **GitHub Actions** workflow to run tests automatically on every push or pull request.
- Interpret CI test output and identify failures from terminal logs.
- Appreciate the value of test automation in maintaining code reliability across changes.