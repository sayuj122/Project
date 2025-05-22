import React, { useState } from "react";
import ChatIcon from "./components/ChatIcon";
import Chatbot from "./components/Chatbot";
import "./components/Chatbot.css";

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div
      style={{
        backgroundImage: "url('https://media.gettyimages.com/id/1437544489/photo/tropical-green-forest-nature-with-clouds.jpg?s=612x612&w=0&k=20&c=XjPf5mvlDL2SbQawaz3xZlg9BO2Kuv0HVWElSUcQh6U=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {showChat && <Chatbot onClose={() => setShowChat(false)} />}
      {!showChat && <ChatIcon onClick={() => setShowChat(true)} />}
    </div>
  );
}

export default App;
