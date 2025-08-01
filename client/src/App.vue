<template>
  <div class="chat-container">
    <h1>🧠 OpenRouterAI Chatbot</h1>

    <div class="chat-box">
      <div v-for="(msg, index) in messages" :key="index" :class="msg.sender">
        <strong>{{ msg.sender === 'user' ? 'You': 'Bot' }}:</strong> {{ msg.text }}
      </div>
    </div>

    <div class="chat-input">
      <input 
        type="text"
        v-model="userMessage"
        @keyup.enter="sendMessage"
        placeholder="Type a message..."
      >
      <button @click="sendMessage">Send</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      userMessage: '',
      messages: []
    };
  },
  methods: {
    async sendMessage() {
      if (!this.userMessage.trim()) return;

      // Show user's message
      this.messages.push({ text: this.userMessage, sender: 'user' })
      
      try {
        const res = await fetch('http://localhost:5000/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: this.userMessage })
        });

        if (!res.ok) {
          const errorText = await res.text(); // fallback if it's not valid JSON
          this.messages.push({ text: `Error: ${errorText}`, sender: 'bot' });
          return;
        }

        const data = await res.json();

        this.messages.push({ text: data.reply,sender: 'bot' });
      } catch (error) {
        console.error('Error:', error);
        this.messages.push({ text: 'Error contacting bot.', sender: 'bot' });
      }

      this.userMessage = '';
    }
  }
}
</script>


<style scoped>
.chat-container {
  max-width: 600px;
  margin: auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}
.chat-box {
  border: 1px solid #ccc;
  padding: 1rem;
  height: 300px;
  overflow-y: auto;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
}
.user {
  text-align: right;
  margin-bottom: 0.5rem;
}
.bot {
  text-align: left;
  margin-bottom: 0.5rem;
}
.chat-input {
  display: flex;
  gap: 0.5rem;
}
input {
  flex: 1;
  padding: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
}

/* Default = dark mode (fallback) */
.chat-box {
  border: 1px solid #444;
  background-color: #1e1e1e;
  color: #eee;
}

input {
  background-color: #333;
  color: #fff;
  border: 1px solid #555;
}

button {
  background-color: #444;
  color: #fff;
  border: 1px solid #666;
}

button:hover {
  background-color: #666;
}

/* Light mode override */
@media (prefers-color-scheme: light) {
  .chat-box {
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    color: #000;
  }

  input {
    background-color: #fff;
    color: #000;
    border: 1px solid #ccc;
  }

  button {
    background-color: #f0f0f0;
    color: #000;
    border: 1px solid #aaa;
  }

  button:hover {
    background-color: #ddd;
  }
}
</style>
