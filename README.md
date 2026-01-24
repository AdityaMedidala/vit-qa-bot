# VIT Q&A Bot — Frontend

A modern, responsive chat interface for a domain-specific AI assistant focused on VIT-related queries (academics, hostels, placements, policies, etc.).

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **React**. Powered by a **FastAPI backend** with RAG pipeline.

---

## 🚀 Features

- 💬 Clean chat-based UI
- 📱 Fully responsive design
- ⚡ Real-time AI responses via FastAPI
- 🎨 Modern UI with Tailwind CSS
- 🔄 Conversation-aware messaging
- ⌨️ Input validation & error handling
- 🤖 RAG pipeline integration

---

## 🛠 Tech Stack

### Frontend
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Inter, Geist

### Backend
- **Framework:** FastAPI
- **Pipeline:** RAG (Retrieval-Augmented Generation)

---

## 📁 Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── chatpage.tsx        # Chat interface
│   └── Inputbar.tsx        # Message input component
└── public/
    └── vit.png             # Logo
```

---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

> **Note:** Update the URL to match your FastAPI backend endpoint.

### 4. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Build for Production
```bash
npm run build
npm start
```

---

## 🔌 Backend Setup

This frontend connects to a **FastAPI backend** with a RAG pipeline.

Make sure your backend is running at the URL specified in `.env.local`.

Example backend structure:
```
POST /chat
{
  "message": "What are the hostel timings?",
  "conversation_id": "optional-uuid"
}
```

---

## 🔒 Environment Variables

| Variable                   | Description                    |
|---------------------------|--------------------------------|
| `NEXT_PUBLIC_API_BASE_URL` | FastAPI backend base URL       |

---


## 📄 License

MIT License

---

## 👨‍💻 Author

**Aditya**  
Computer Science Engineer | Full-Stack Developer

---

⭐ **If you find this project useful, give it a star!**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---
