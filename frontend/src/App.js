import React, { useState } from 'react';
import ChatIcon from './components/ChatIcon';
import Chatbot from './components/Chatbot';
import './App.css';
import './components/Chatbot.css';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <div style={{
        backgroundImage: 'url("./image/bgim.png")',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>
      <header className="hero">
        <h1 style={{ color: 'black' }}>Welcome to EcoSprout!</h1>

      
        <input
          type="text"
          className="search-box"
          placeholder="Search something..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src="https://t3.ftcdn.net/jpg/12/60/99/28/360_F_1260992845_byPUhwHfLHy4qrgCxXnHR35is8ozNl4A.jpg"
          alt="Chatbot Illustration"
          className="chatbot-image"
          style={{ width: '100px', height: 'auto' }}
        />
      </header>

      {showChat && <Chatbot onClose={() => setShowChat(false)} />}
      {!showChat && <ChatIcon onClick={() => setShowChat(true)} />}
    </div>
  );
}

export default App;

