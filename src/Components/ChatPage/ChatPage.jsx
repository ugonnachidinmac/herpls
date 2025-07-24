import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const ChatPage = ({ agentName, onBack }) => {
  const [messages, setMessages] = useState([
    { sender: agentName, text: "Hello, how can I assist you?" },
    { sender: "You", text: "I need help with a property." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    setMessages((prev) => [...prev, { sender: "You", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="p-4 flex flex-col h-[calc(100vh-100px)]">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-4 text-sm text-blue-500 flex items-center gap-1"
      >
        <FaArrowLeft /> Back to agents
      </button>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.sender === "You"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-accent"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
