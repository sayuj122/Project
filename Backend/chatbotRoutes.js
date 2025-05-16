import express from "express";
import fetch from "node-fetch";

const router = express.Router();

// POST /api/chatbot
router.post("/", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ reply: "No message provided." });  try {
    // Check if message is too long
    const wordCount = message.trim().split(/\s+/).length;
    if (wordCount > 25) {
      return res.status(400).json({ 
        reply: "Please keep your message under 25 words for better responses." 
      });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY;
    
    const payload = {
      contents: [{ 
        parts: [{ 
          text: message + " (Please keep the response concise, under 25 words)" 
        }] 
      }]
    };
    
    const geminiRes = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    
    if (!geminiRes.ok) {
      throw new Error("Failed to get response");
    }
    
    const data = await geminiRes.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ reply: "Error connecting to Gemini API." });
  }
});

export default router;
