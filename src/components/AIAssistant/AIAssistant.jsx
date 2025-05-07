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
      "id": 1,
      "title": "Introduction to Science for Grade 4",
      "subject_id": 3,
      "grade": 4,
      "instructor_id": 3,
      "price": 30,
      "rating": 4.8,
      "students": 22000,
      "image_url": "src/assets/courses images/course1.jpeg",
      "progress": 50,
      "shortDescription": "Learn the basics of natural science with fun activities.",
      "longDescription": "This course introduces Grade 4 students to the wonders of science through engaging experiments and simple explanations about matter, energy, and ecosystems.",
      "created_at": "2024-08-15T14:23:11Z"
    },
    {
      "id": 2,
      "title": "Mathematics Basics for Grade 2",
      "subject_id": 2,
      "grade": 2,
      "instructor_id": 2,
      "price": 25,
      "rating": 4.6,
      "students": 18000,
      "image_url": "src/assets/courses images/course2.jpeg",
      "progress": 65,
      "shortDescription": "Simple addition, subtraction, and shapes.",
      "longDescription": "A fun-filled course for young learners to understand numbers, addition, subtraction, and basic geometry concepts through games and real-life examples.",
      "created_at": "2024-11-09T09:37:45Z"
    },
    {
      "id": 3,
      "title": "English Skills for Grade 5",
      "subject_id": 4,
      "grade": 5,
      "instructor_id": 4,
      "price": 35,
      "rating": 4.7,
      "students": 25000,
      "image_url": "src/assets/courses images/course3.jpeg",
      "progress": 45,
      "shortDescription": "Boost your English reading and writing.",
      "longDescription": "Designed for Grade 5 students, this course focuses on building vocabulary, grammar, reading comprehension, and writing simple essays through interactive activities.",
      "created_at": "2024-12-25T12:10:03Z"
    },
    {
      "id": 4,
      "title": "Geography for Grade 8",
      "subject_id": 12,
      "grade": 8,
      "instructor_id": 12,
      "price": 40,
      "rating": 4.5,
      "students": 14000,
      "image_url": "src/assets/courses images/course4.jpeg",
      "progress": 30,
      "shortDescription": "Explore continents, oceans, and climates.",
      "longDescription": "This course takes students on a journey around the world to learn about continents, major rivers, oceans, and global climate patterns with fun map activities.",
      "created_at": "2024-06-02T08:44:51Z"
    },
    {
      "id": 5,
      "title": "Physics Basics for Grade 10",
      "subject_id": 6,
      "grade": 10,
      "instructor_id": 6,
      "price": 60,
      "rating": 4.9,
      "students": 19500,
      "image_url": "src/assets/courses images/course5.jpeg",
      "progress": 55,
      "shortDescription": "Fundamentals of forces, motion, and energy.",
      "longDescription": "Learn the basic principles of physics including force, motion, work, and energy with real-world examples and experiments explained in simple terms.",
      "created_at": "2024-09-27T17:30:16Z"
    },
    {
      "id": 6,
      "title": "Computer Skills for Grade 6",
      "subject_id": 13,
      "grade": 6,
      "instructor_id": 13,
      "price": 30,
      "rating": 4.4,
      "students": 12500,
      "image_url": "src/assets/courses images/course6.png",
      "progress": 40,
      "shortDescription": "Basic computer operations and typing skills.",
      "longDescription": "A beginner-friendly course teaching students the basics of using computers, typing skills, file management, and internet safety tips.",
      "created_at": "2025-01-19T11:22:18Z"
    },
    {
      "id": 7,
      "title": "Chemistry Essentials for Grade 11",
      "subject_id": 7,
      "grade": 11,
      "instructor_id": 7,
      "price": 65,
      "rating": 4.7,
      "students": 17500,
      "image_url": "src/assets/courses images/course7.jpeg",
      "progress": 70,
      "shortDescription": "Master chemical equations and bonding.",
      "longDescription": "An intensive course covering chemical equations, molecular bonding, and the periodic table essentials for Grade 11 science students.",
      "created_at": "2024-07-08T19:55:02Z"
    },
    {
      "id": 8,
      "title": "Social Studies for Grade 7",
      "subject_id": 5,
      "grade": 7,
      "instructor_id": 5,
      "price": 45,
      "rating": 4.5,
      "students": 15000,
      "image_url": "src/assets/courses images/course8.jpeg",
      "progress": 60,
      "shortDescription": "Discover ancient civilizations and cultures.",
      "longDescription": "Students will explore major civilizations, ancient societies, and world religions with engaging storytelling, interactive activities, and quizzes.",
      "created_at": "2025-02-14T10:05:31Z"
    },
    {
      "id": 9,
      "title": "Biology: Cells and Systems for Grade 10",
      "subject_id": 8,
      "grade": 10,
      "instructor_id": 8,
      "price": 55,
      "rating": 4.6,
      "students": 16000,
      "image_url": "src/assets/courses images/course9.jpeg",
      "progress": 50,
      "shortDescription": "Study cells, tissues, and human body systems.",
      "longDescription": "An exciting introduction to biology that covers cellular structure, plant and human tissues, and body systems for high school beginners.",
      "created_at": "2024-10-22T15:48:07Z"
    },
    {
      "id": 10,
      "title": "History of Egypt for Grade 9",
      "subject_id": 11,
      "grade": 9,
      "instructor_id": 11,
      "price": 50,
      "rating": 4.5,
      "students": 13000,
      "image_url": "src/assets/courses images/course10.jpeg",
      "progress": 35,
      "shortDescription": "Ancient Egypt to modern times.",
      "longDescription": "This course guides students through the fascinating history of Egypt, from the pharaohs to the present day, with maps, timelines, and visual documentaries.",
      "created_at": "2024-05-03T07:14:39Z"
    },
    {
      "id": 11,
      "title": "Philosophy and Logic for Grade 12",
      "subject_id": 9,
      "grade": 12,
      "instructor_id": 9,
      "price": 70,
      "rating": 4.7,
      "students": 11000,
      "image_url": "src/assets/courses images/course11.jpeg",
      "progress": 65,
      "shortDescription": "Learn critical thinking and logic foundations.",
      "longDescription": "Teaches students how to think logically, reason critically, and analyze arguments systematically, preparing them for university-level thinking.",
      "created_at": "2025-03-04T18:32:55Z"
    },
    {
      "id": 12,
      "title": "Arabic Reading Skills for Grade 3",
      "subject_id": 1,
      "grade": 3,
      "instructor_id": 1,
      "price": 28,
      "rating": 4.6,
      "students": 17000,
      "image_url": "src/assets/courses images/course12.png",
      "progress": 55,
      "shortDescription": "Enhance your Arabic reading and comprehension.",
      "longDescription": "Aimed at Grade 3 students to strengthen their Arabic reading comprehension, vocabulary, and storytelling skills through fun exercises.",
      "created_at": "2024-12-03T13:39:22Z"
    }
  ],  . `
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
