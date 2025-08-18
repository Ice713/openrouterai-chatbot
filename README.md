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
my-openai-chatbot/<br>
├── client/ # Vue.js frontend<br>
│ ├── src/<br>
│ └── tailwind.config.js<br>
├── server/ # Node.js backend<br>
│ └── index.js<br>
├── .env # Stores the OpenRouter API key<br>
├── package.json # Root package.json (optional)<br>

---

## 🚀 Getting Started

### 1. Clone the repo

<code>git clone https://github.com/your-username/my-openai-chatbot.git
cd my-openai-chatbot
</code>

### 2. Setup the backend
<code>cd server
npm install
</code>

Create a <code>.env</code> file inside <code>/server</code> and add your API key:
<code>OPENROUTER_API_KEY=your-api-key-here
</code>

Then run:
<code>node index.js
</code>

### 3. Setup the frontend
<code>cd ../client
npm install
</code>

If Tailwind is not yet set up:
<code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code>

Make sure <code>tailwind.config.js</code> has the proper content path (for Vue):
<code>content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
]</code>

Update your <code>style.css</code>:
<code>@tailwind base;
@tailwind components;
@tailwind utilities;</code>

Then run:
<code>npm run dev</code>

---
## 🔑 Environment Variables
Only one required (backend side):
<code>OPENROUTER_API_KEY=your-api-key</code>
<u>Do not expose this key in frontend.</u>

---

## 🌗 Dark Mode Support
Tailwind’s dark mode is used (<code>class</code> strategy). The layout adapts automatically based on user system preference.

Make sure you wrap your root <code><div></code> in Vue with a dynamic class, for example:
<code><body :class="{ 'dark': isDark }"></code>

---

## 🧩 Dependencies
### Frontend
<ul>
    <li>Vue 3</li>
    <li>Tailwind CSS</li>
    <li>Axios</li>
</ul>

### Backend
<ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>dotenv</li>
    <li>cors</li>
</ul>

---

## 🙋‍♂️ Author
Developed by <a href="github.com/ice713">Ice713</a>

--- 

## 📄 License
This project is open-source and available under the MIT License.