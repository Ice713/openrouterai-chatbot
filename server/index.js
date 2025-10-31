import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-small-3.2-24b-instruct:free', // ✅ Free and available
        // model: 'openai/gpt-oss-20b:free', // ✅ Free and available
        messages: [{ role: 'user', content: userMessage }]
      })
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0]?.message?.content) {
      console.error('Invalid response:', data); // ✅ Log for debugging
      return res.status(500).json({ error: 'Invalid response from model' });
    }

    const botReply = data.choices[0].message.content;
    res.json({ reply: botReply });

  } catch (err) {
    console.error('Error from OpenRouter:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
