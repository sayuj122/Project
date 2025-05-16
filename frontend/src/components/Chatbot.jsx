import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    try {      const res = await fetch("http://localhost:5000/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { from: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Sorry, something went wrong." },
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <span>Chatbot</span>
        <button onClick={onClose}>&times;</button>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chatbot-message chatbot-message-${msg.from}`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="chatbot-message chatbot-message-bot">...</div>}
      </div>
      <form className="chatbot-input" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button type="submit" disabled={loading || !input.trim()}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
