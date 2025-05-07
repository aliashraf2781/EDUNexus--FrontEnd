import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react'; 
import { Link } from 'react-router-dom'; // ✅ تصحيح هنا

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [timer, setTimer] = useState(60); // دقيقة
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/questions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (timerRunning && timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setShowResult(true);
      setTimerRunning(false);
    }
  }, [timer, timerRunning]);

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (!isAnswered) return;
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      setTimerRunning(false);
    }
  };

  const handleExit = () => {
    // navigation function here
  };

  const progress = (currentQuestion / questions.length) * 100;

  if (!questions.length) {
    return (
      <div className="text-center p-4">
        <p>Loading questions...</p>
      </div>
    );
  }

  return (
    <div className="bg-secondary w-full min-h-screen fixed top-0 left-0">
      <div className="flex justify-between items-center p-4">
        <h5 className="text-primary font-bold text-xl">QUIZ</h5>
        <Link to="/course-lesson">
          <X size={24} className="cursor-pointer text-dark" onClick={handleExit} />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-8">
        {!showResult ? (
          <>
            <div className="text-center mb-6">
              <div className="bg-white px-6 py-3 rounded shadow text-primary font-bold text-lg">
                Time Remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
              </div>
            </div>

            <div className="bg-white text-primary font-bold text-lg text-center p-4 mb-6 rounded w-full max-w-xl">
              {questions[currentQuestion].question}
            </div>

            <div className="flex flex-col gap-4 w-full max-w-xl">
              {questions[currentQuestion].options.map((option, idx) => {
                const isCorrect = option === questions[currentQuestion].correctAnswer;
                const isSelected = option === selectedOption;

                let bgColor = 'bg-white';
                let textColor = 'text-dark';

                if (isAnswered) {
                  if (isSelected && !isCorrect) {
                    bgColor = 'bg-red-300';
                  }
                  if (isCorrect) {
                    bgColor = 'bg-primary';
                    textColor = 'text-white';
                  }
                } else if (isSelected) {
                  bgColor = 'bg-primary';
                  textColor = 'text-white';
                }

                return (
                  <button
                    key={idx}
                    className={`w-full py-2 px-4 rounded font-bold ${bgColor} ${textColor}`}
                    onClick={() => handleOptionClick(option)}
                    disabled={isAnswered}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between mt-8 w-full max-w-xl">
              <div className="w-3/4 h-2 bg-secondary rounded overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <button
                className="bg-primary text-white px-4 py-2 rounded ml-4"
                onClick={handleNext}
                disabled={!isAnswered}
              >
                Continue
              </button>
            </div>
          </>
        ) : (
          <div className="text-center w-full max-w-md text-dark">
            <img src="./Layer 1.png" alt="result" className="mb-4 w-full" />

            <div className="bg-white border border-gray-300 rounded px-4 py-3 mb-3 flex justify-between font-bold">
              <span>SCORE GAINED</span>
              <span>{score * 4}/20</span>
            </div>

            <div className="bg-white border border-gray-300 rounded px-4 py-3 mb-3 flex justify-between font-bold text-sm">
              <span>Correct Predictions</span>
              <span>{score}</span>
            </div>

            <Link to="/course-lesson">
              <button
                className="w-full bg-primary text-white py-2 rounded mt-4"
              >
                Okey
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
