import React, { useState } from "react";
import ChatIcon from "./components/ChatIcon";
import Chatbot from "./components/Chatbot";
import "./components/Chatbot.css";

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {showChat && <Chatbot onClose={() => setShowChat(false)} />}
      {!showChat && <ChatIcon onClick={() => setShowChat(true)} />}
    </>
  );
}

export default App;