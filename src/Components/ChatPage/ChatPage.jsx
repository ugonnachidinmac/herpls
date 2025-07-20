import React, { useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: "Agent", text: "Hello, how can I assist you?" },
    { sender: "User", text: "I need help with a property." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    setMessages((prev) => [
      ...prev,
      { sender: "User", text: newMessage },
    ]);
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <div className="bg-white w-full max-w-2xl rounded-md shadow-lg p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-primary">Chat with Agent</h2>
        <div className="h-[300px] overflow-y-auto border rounded-md p-4 space-y-2 bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "User" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg.sender === "User"
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded-md px-3 py-2 focus:outline-none"
            placeholder="Type a message..."
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
    </div>
  );
};

export default ChatPage;
