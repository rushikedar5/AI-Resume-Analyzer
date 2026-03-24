# 🚀 AI Resume Analyzer (Backend)

A simple backend project that analyzes resumes using AI and provides structured feedback.

---

## 📌 Features

* 📄 Upload resume (PDF)
* 🧠 Extract text from PDF
* 🤖 Analyze resume using AI
* ✅ Validate input & output using Zod
* 🔁 Retry + Timeout + Fallback handling

---

## 🛠️ Tech Stack

* TypeScript
* Node.js
* Express
* Zod
* Multer
* GenAI (OpenRouter / Gemini)

---

## 📁 Project Structure

```
src/
 ├── config/
 ├── controllers/
 ├── services/
 ├── validators/
 ├── utils/
 └── app.ts
```

---

## ⚙️ Setup

### 1. Clone repo

```
git clone https://github.com/YOUR_USERNAME/ai-resume-analyzer.git
cd ai-resume-analyzer
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Add environment variables

Create `.env` file:

```
PORT=3000
OPENROUTER_API_KEY=your_api_key_here
```

---

### 4. Run project

```
npm run dev
```

---

## 🧪 API Endpoints

### 1. Health Check

```
GET /
```

---

### 2. Upload Resume

```
POST /upload
```

* Body → form-data
* Key → `resume` (File)

---

## 📦 Sample Response

```
{
  "message": "AI Analysis Complete ✅",
  "analysis": {
    "strengths": [],
    "weaknesses": [],
    "suggestions": []
  }
}
```

---

## 🧠 Learnings

* Input validation using Zod
* File handling with Multer
* AI integration in backend
* Handling unreliable APIs (retry, timeout, fallback)

---

## 🚀 Future Improvements

* Add frontend (React)
* Deploy project
* Improve AI prompts

---

## 👨‍💻 Author

Hrushikesh Kedar

