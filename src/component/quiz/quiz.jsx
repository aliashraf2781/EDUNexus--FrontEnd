import React, { useState } from 'react';
import { X } from 'lucide-react'; 
import questions from './questions';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

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
    }
  };

  const handleExit = () => {
    window.location.reload();
  };

  const progress = (currentQuestion / questions.length) * 100;

  return (
    <div className="bg-[var(--color-secondary)] w-full min-h-screen fixed top-0 left-0">
      <div className="flex justify-between items-center p-4">
        <h5 className="text-[var(--color-primary)] font-bold text-xl">QUIZ</h5>
        <X size={24} className="cursor-pointer text-[var(--color-dark)]" onClick={handleExit} />
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-8">
        {!showResult ? (
          <>
            <div className="bg-white text-[var(--color-primary)] font-bold text-lg text-center p-4 mb-6 rounded w-full max-w-xl">
              {questions[currentQuestion].question}
            </div>

            <div className="flex flex-col gap-4 w-full max-w-xl">
              {questions[currentQuestion].options.map((option, idx) => {
                const isCorrect = option === questions[currentQuestion].correctAnswer;
                const isSelected = option === selectedOption;

                let bgColor = 'bg-white';
                let textColor = 'text-[var(--color-dark)]';
                let border = '';

                if (isAnswered) {
                  if (isSelected && !isCorrect) {
                    bgColor = 'bg-[#E69090]';
                  }
                  if (isCorrect) {
                    bgColor = 'bg-[var(--color-primary)]';
                    textColor = 'text-white';
                  }
                } else if (isSelected) {
                  bgColor = 'bg-[var(--color-primary)]';
                  textColor = 'text-white';
                }

                return (
                  <button
                    key={idx}
                    className={`w-full py-2 px-4 rounded font-bold ${bgColor} ${textColor} ${border}`}
                    onClick={() => handleOptionClick(option)}
                    disabled={isAnswered}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between mt-8 w-full max-w-xl">
              <div className="w-3/4 h-2 bg-[var(--color-secondary)] rounded overflow-hidden">
                <div
                  className="h-full bg-[var(--color-primary)]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <button
                className="bg-[var(--color-primary)] text-white px-4 py-2 rounded ml-4"
                onClick={handleNext}
                disabled={!isAnswered}
              >
                Continue
              </button>
            </div>
          </>
        ) : (
          <div className="text-center w-full max-w-md text-[var(--color-dark)]">
            <img src="./Layer 1.png" alt="result" className="mb-4 w-full" />

            <div className="bg-white border border-gray-300 rounded px-4 py-3 mb-3 flex justify-between font-bold">
              <span>SCORE GAINED</span>
              <span>{score * 4}/20</span>
            </div>

            <div className="bg-white border border-gray-300 rounded px-4 py-3 mb-3 flex justify-between font-bold text-sm">
              <span>Correct Predictions</span>
              <span>{score}</span>
            </div>

            <button
              className="w-full bg-[var(--color-primary)] text-white py-2 rounded mt-4"
              onClick={handleExit}
            >
              Okey
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
