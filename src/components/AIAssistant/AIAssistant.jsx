import React, { useState } from 'react';

function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() === '') return;
        const userMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setTimeout(() => {
          const botMessage = { sender: 'assistant', text: `You asked: "${input}". Here's a helpful tip! 🚀` };
          setMessages(prev => [...prev, botMessage]);
        }, 500);
    
        setInput('');
      };

  return (
    <>
      <div 
        className="fixed bottom-5 right-5 bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        🤖
      </div>
      {isOpen && (
        <div className="fixed bottom-24 right-5 bg-white p-4 w-80 rounded-2xl shadow-2xl flex flex-col justify-between h-96 z-50">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold text-primary text-lg">Ask Assistant</h4>
            <button className="text-gray-400" onClick={() => setIsOpen(false)}>✖️</button>
          </div>

          <div className="flex-1 overflow-y-auto mb-2 space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`p-2 rounded-xl text-sm max-w-[80%] ${msg.sender === 'user' ? 'bg-primary text-white self-end ml-auto' : 'bg-gray-100 text-gray-800'}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
            />
            <button onClick={handleSend} className="bg-primary text-white rounded-lg px-4 text-sm">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AIAssistant;
