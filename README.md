# 💬 OpenAI Chatbot (Vue.js + Node.js + Tailwind)

This is a simple chatbot application powered by OpenAI via the [OpenRouter API](https://openrouter.ai/), built with **Vue.js** on the frontend and **Node.js (Express)** on the backend. Styled using **Tailwind CSS** for flexibility and responsiveness.

## 🛠️ Features

- Chat with an OpenAI-powered assistant
- Supports light/dark mode with Tailwind
- Real-time communication via Axios
- Backend proxy to OpenRouter API (using server-side `.env` API key)
- Easily deployable and customizable

---

## 📁 Project Structure
my-openai-chatbot/
├── client/ # Vue.js frontend
│ ├── src/
│ └── tailwind.config.js
├── server/ # Node.js backend
│ └── index.js
├── .env # Stores the OpenRouter API key
├── package.json # Root package.json (optional)

---

## 🚀 Getting Started

### 1. Clone the repo

<code>
git clone https://github.com/your-username/my-openai-chatbot.git
cd my-openai-chatbot
</code>

### 2. Setup the backend
<code>
cd server
npm install
</code>

Create a .env file inside /server and add your API key:
<code>
OPENROUTER_API_KEY=your-api-key-here
</code>

Then run:
<bash>
node index.js
</bash>