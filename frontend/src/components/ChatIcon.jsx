import React from "react";
import "./Chatbot.css";

const ChatIcon = ({ onClick }) => (
  <div className="chatbot-icon" onClick={onClick} title="Chat with us!">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#1976d2" />
      <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="20" fontFamily="Arial" dy=".3em">💬</text>
    </svg>
  </div>
);

export default ChatIcon;
