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
                  Only answer questions related to our courses and lessons and these is our courses and five him the link like this http://localhost:3000/course-details/:id  "courses": [
    {
        "_id": "6812e8d5160543bc52495fb1",
        "title": "Introduction to Science for Grade 4",
        "description": "Learn the basics of natural science with fun activities.",
        "createdBy": "67e199c34e2ad0983e204a0e",
        "enrolledStudents": [
            "681384b7ab6c1f2d379295b7",
            "68138559ab6c1f2d379295e4",
            "68138db2ab6c1f2d3792961a",
            "6812a1b8420a112b045ddcbe",
            "68152f7160fa21780c2ae85a",
            "68153a8360fa21780c2ae8f1",
            "6817ae7b881d4999d24f509d",
            "6817bdd2881d4999d24f5128",
            "6817c799881d4999d24f5236",
            "6817c98d881d4999d24f52e0",
            "6817cd50881d4999d24f5348",
            "6817f353c3175bec5cffb4fc",
            "6818f7acc986df5f3b3faebf",
            "681948d2c986df5f3b3fb671",
            "67e2b2750e5405781a9668dd",
            "681a264c9a0ac2d33e3b2351",
            "681a4e453275866a8ec4a6fd",
            "681b66128b6cb66c1579ad0f",
            "681bdb95bee5b05a86b183a7"
        ],
        "quizzes": [],
        "materials": [],
        "lessons": [
            {
                "_id": "681385e4ab6c1f2d37929600",
                "title": "Lesson 1",
                "content": "Introduction",
                "path": "https://res.cloudinary.com/dksy9zof4/video/upload/v1745369509/cxlffkcrvo1ebq70lq6h.mp4",
                "summary": "1.  React Fundamentals: Understand React concepts for building complex user interfaces. 2.  Modern Web Applications: Build modern and powerful web applications using React. 3.  Industry-Standard Libraries: Leverage libraries like Redux Toolkit, React Router, React Query, Tailwind CSS, and styled-components. 4.  Project-Based Learning: Focus on real-world projects, practice exercises, and challenges. 5.  Deep Dive into React Internals: Gain a thorough understanding of React's inner workings. 6.  Code Comprehension:  Comprehend what your code does to gain confidence in react. 7.  Modern Best Practices: Explore and implement modern best practices in React development. 8.  Advanced Patterns: Learn and utilize advanced patterns used by senior React engineers.",
                "course": "6812e8d5160543bc52495fb1",
                "__v": 0
            }
        ],
        "price": 50,
        "rate": 4,
        "category": "Science",
        "thumbnail": "https://rat-intent-hideously.ngrok-free.app/uploads/src/assets/courses%20images/course1.png",
        "__v": 20
    },
    {
        "_id": "6812edff160543bc52495fc9",
        "title": "Physics Basics for Grade 10",
        "description": "Fundamentals of forces, motion, and energy.",
        "createdBy": "67e199c34e2ad0983e204a0e",
        "enrolledStudents": [
            "6812a1b8420a112b045ddcbe",
            "681bd4da8b6cb66c1579aea0"
        ],
        "quizzes": [],
        "materials": [],
        "lessons": [
            {
                "_id": "6817678ebd9c105d496849ba",
                "title": "Lesson 1",
                "content": "Introduction",
                "path": "https://res.cloudinary.com/dksy9zof4/video/upload/v1745369509/cxlffkcrvo1ebq70lq6h.mp4",
                "summary": "1.  React Fundamentals: Understand React concepts for building complex user interfaces. 2.  Modern Web Applications: Build modern and powerful web applications using React. 3.  Industry-Standard Libraries: Leverage libraries like Redux Toolkit, React Router, React Query, Tailwind CSS, and styled-components. 4.  Project-Based Learning: Focus on real-world projects, practice exercises, and challenges. 5.  Deep Dive into React Internals: Gain a thorough understanding of React's inner workings. 6.  Code Comprehension:  Comprehend what your code does to gain confidence in react. 7.  Modern Best Practices: Explore and implement modern best practices in React development. 8.  Advanced Patterns: Learn and utilize advanced patterns used by senior React engineers.",
                "course": "6812edff160543bc52495fc9",
                "__v": 0
            }
        ],
        "price": 60,
        "rate": 5,
        "category": "Physics",
        "thumbnail": "https://rat-intent-hideously.ngrok-free.app/uploads/src/assets/courses%20images/course5.png",
        "__v": 3
    },
    {
        "_id": "6812ebdc160543bc52495fba",
        "title": "Mathematics Basics for Grade 2",
        "description": "Simple addition, subtraction, and shapes",
        "createdBy": "67e199c34e2ad0983e204a0e",
        "enrolledStudents": [
            "68153a8360fa21780c2ae8f1",
            "6817ae7b881d4999d24f509d",
            "6818f7acc986df5f3b3faebf",
            "68194766c986df5f3b3fb584",
            "681a12109a0ac2d33e3b2267",
            "681a4e453275866a8ec4a6fd"
        ],
        "quizzes": [],
        "materials": [],
        "lessons": [],
        "price": 25,
        "rate": 4,
        "category": "Mathematics",
        "thumbnail": "https://rat-intent-hideously.ngrok-free.app/uploads/src/assets/courses%20images/course2.png",
        "__v": 6
    },
    {
        "_id": "6812ec3d160543bc52495fbf",
        "title": "English Skills for Grade 5",
        "description": "Boost your English reading and writing.",
        "createdBy": "67e199c34e2ad0983e204a0e",
        "enrolledStudents": [
            "6812a1b8420a112b045ddcbe",
            "6817f353c3175bec5cffb4fc",
            "6818f7acc986df5f3b3faebf",
            "68190492c986df5f3b3fb02a",
            "68190897c986df5f3b3fb0a0",
            "68194766c986df5f3b3fb584",
            "681948d2c986df5f3b3fb671",
            "681a12109a0ac2d33e3b2267",
            "681a4cdb3275866a8ec4a691",
            "681a501a3275866a8ec4a804",
            "681b66128b6cb66c1579ad0f"
        ],
        "quizzes": [],
        "materials": [
            "https://rat-intent-hideously.ngrok-free.app/uploads/1746545808523-law2003.pdf",
            "https://rat-intent-hideously.ngrok-free.app/uploads/1746549587865-law2003.pdf",
            "https://rat-intent-hideously.ngrok-free.app/uploads/1746549828480-law2003.pdf",
            "https://rat-intent-hideously.ngrok-free.app/uploads/1746549839744-law2003.pdf"
        ],
        "lessons": [
            {
                "_id": "68177aadbd9c105d49684a54",
                "title": "Lesson 1",
                "content": "Introduction",
                "path": "https://res.cloudinary.com/dksy9zof4/video/upload/v1745369509/cxlffkcrvo1ebq70lq6h.mp4",
                "summary": "1.  React Fundamentals: Understand React concepts for building complex user interfaces. 2.  Modern Web Applications: Build modern and powerful web applications using React. 3.  Industry-Standard Libraries: Leverage libraries like Redux Toolkit, React Router, React Query, Tailwind CSS, and styled-components. 4.  Project-Based Learning: Focus on real-world projects, practice exercises, and challenges. 5.  Deep Dive into React Internals: Gain a thorough understanding of React's inner workings. 6.  Code Comprehension:  Comprehend what your code does to gain confidence in react. 7.  Modern Best Practices: Explore and implement modern best practices in React development. 8.  Advanced Patterns: Learn and utilize advanced patterns used by senior React engineers.",
                "course": "6812ec3d160543bc52495fbf",
                "__v": 0
            },
            {
                "_id": "68177ab5bd9c105d49684a5b",
                "title": "Lesson 1",
                "content": "Introduction",
                "path": "https://res.cloudinary.com/dksy9zof4/video/upload/v1745369509/cxlffkcrvo1ebq70lq6h.mp4",
                "summary": "1.  React Fundamentals: Understand React concepts for building complex user interfaces. 2.  Modern Web Applications: Build modern and powerful web applications using React. 3.  Industry-Standard Libraries: Leverage libraries like Redux Toolkit, React Router, React Query, Tailwind CSS, and styled-components. 4.  Project-Based Learning: Focus on real-world projects, practice exercises, and challenges. 5.  Deep Dive into React Internals: Gain a thorough understanding of React's inner workings. 6.  Code Comprehension:  Comprehend what your code does to gain confidence in react. 7.  Modern Best Practices: Explore and implement modern best practices in React development. 8.  Advanced Patterns: Learn and utilize advanced patterns used by senior React engineers.",
                "course": "6812ec3d160543bc52495fbf",
                "__v": 0
            }
        ],
        "price": 35,
        "rate": 3,
        "category": "English",
        "thumbnail": "https://rat-intent-hideously.ngrok-free.app/uploads/src/assets/courses%20images/course3.png",
        "__v": 17
    },
    {
        "_id": "6812ecbf160543bc52495fc4",
        "title": "Geography for Grade 8",
        "description": "Explore continents, oceans, and climates.",
        "createdBy": "67e199c34e2ad0983e204a0e",
        "enrolledStudents": [
            "68152f7160fa21780c2ae85a"
        ],
        "quizzes": [],
        "materials": [],
        "lessons": [],
        "price": 40,
        "rate": 4,
        "category": "Psychology and Sociology",
        "thumbnail": "https://rat-intent-hideously.ngrok-free.app/uploads/src/assets/courses%20images/course4.png",
        "__v": 1
    }
]  . `
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
