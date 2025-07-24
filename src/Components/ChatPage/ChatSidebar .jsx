import React, { useState } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ChatPage from "./ChatPage";

const dummyAgents = ["Agent001", "Agent002", "Agent003", "AlventRep", "Support001"];

const ChatSidebar = ({ onClose }) => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // stores committed search input
  const navigate = useNavigate();

  const filteredAgents = dummyAgents.filter((agent) =>
    agent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault(); // prevent form reload
    setSearchTerm(searchQuery);
  };

  const handleBackToAgents = () => {
    setSelectedAgent(null);
  };

  return (
    <div className="fixed top-0 right-0 h-full w-[300px] sm:w-[400px] bg-white shadow-xl z-50 transition-transform duration-300 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b bg-primary text-white">
        <h2 className="text-lg font-bold">
          {selectedAgent ? `Chat with ${selectedAgent}` : "Live Chat"}
        </h2>
        <button onClick={onClose} className="text-white text-xl">
          <FaTimes />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {!selectedAgent ? (
          <div className="space-y-4">
            {/* Search Input with Icon */}
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search agents..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="p-2 bg-primary text-white rounded hover:bg-primary-dark"
              >
                <FaSearch />
              </button>
            </form>

            {/* Filtered agent list */}
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedAgent(agent)}
                  className="p-3 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                >
                  {agent}
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No agents found.</p>
            )}
          </div>
        ) : (
          <ChatPage agentName={selectedAgent} onBack={handleBackToAgents} />
        )}
      </div>
    </div>
  );
};

export default ChatSidebar;
