import React, { useState } from 'react';

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // for showing "thinking..." maybe

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBVvCLezslVKXrDty4gHdhXx7xdsBxkvv4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are an AI assistant for an e-learning platform called "EDU Nexus". 
            Only answer questions related to oyr courses, ad be helpful about it this is the  . `
                },
                { text: input }
              ]
            }
          ]
        })
      });

      const data = await response.json();
      console.log('Gemini response:', data);

      const botText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that. 😔";

      const botMessage = { sender: 'assistant', text: botText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error talking to Gemini:', error);
      setMessages(prev => [...prev, { sender: 'assistant', text: "Something went wrong bro 💀" }]);
    } finally {
      setLoading(false);
    }
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
              <div
                key={idx}
                className={`p-2 rounded-xl text-sm max-w-[80%] ${msg.sender === 'user' ? 'bg-primary text-white self-end ml-auto' : 'bg-gray-100 text-gray-800'}`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="p-2 rounded-xl bg-gray-100 text-gray-800 text-sm max-w-[80%]">
                Typing...
              </div>
            )}
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
