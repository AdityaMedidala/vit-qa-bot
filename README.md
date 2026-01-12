# VIT Q&A Bot — Frontend

A modern chat-based frontend for a domain-specific AI assistant built for VIT-related queries (academics, hostels, placements, policies, etc.).

This repository contains the **Next.js + React + TypeScript** frontend responsible for user interaction, chat UI, and communication with the backend API.

---

## 🚀 Features

- Clean chat-based UI
- Real-time message exchange with backend
- Conversation-aware chat (via conversation IDs)
- Loading indicator while the assistant is responding
- Graceful error handling inside the chat
- Input validation and disabled states to prevent duplicate sends
- Responsive design (mobile + desktop)

---

## 🧠 Architecture Overview

- Frontend is **stateless**
- All conversation context is handled by the backend
- Each message is sent with a `conversation_id`
- Backend replies with:
  - assistant response
  - updated `conversation_id`

This design allows:
- easy scaling
- backend replacement (LLM upgrades)
- future auth and persistence support

---

## 🛠 Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Fetch API for backend communication

---

## 🔧 Environment Setup

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000


