import { useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

const App = () => {

  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = (history) => {
    console.log(history);
  }


  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chatbot-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded"> keyboard_arrow_down </button>
        </div>

        {/* Chatbot Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text"> Hey there, <br /> How can I help you today? </p>
          </div>

          {/* Render chat history dynamically */}
          {
            chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))
          }
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>
      </div>
    </div>
  )
}

export default App;