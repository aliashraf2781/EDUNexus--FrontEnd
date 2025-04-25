import { useState } from "react";

export default function InsCreateQuizModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [quizTitle, setQuizTitle] = useState("");
  const [questionCount, setQuestionCount] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [questions, setQuestions] = useState([]);

  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState(["", "", "", ""]);

  if (!isOpen) return null;

  const handleCompleteQuestion = () => {
    const newQuestion = {
      text: questionText,
      choices,
    };
    setQuestions([...questions, newQuestion]);
    setQuestionText("");
    setChoices(["", "", "", ""]);
    if (currentQuestion < questionCount) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep(3); 
    }
  };

  const handleSaveQuiz = () => {
    const newQuiz = {
      title: quizTitle,
      questions,
    };
    console.log("Quiz saved:", newQuiz);
    onClose();
    setStep(1);
    setQuestions([]);
    setCurrentQuestion(1);
    setQuizTitle("");
    setQuestionCount(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/60">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Create New Quiz</h2>
            <input
              type="text"
              placeholder="Quiz Title"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              className="w-full mb-4 border border-gray-300 rounded p-2 outline-none"
            />
            <input
              type="number"
              placeholder="Number of Questions"
              min={1}
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full mb-4 border border-gray-300 rounded p-2 outline-none"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-lg font-semibold mb-2">
              Question {currentQuestion} of {questionCount}
            </h2>
            <input
              type="text"
              placeholder="Question Text"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              className="w-full mb-4 border border-gray-300 rounded p-2 outline-none"
            />
            <p className="text-center text-orange-500 mb-2">Answer Choices</p>
            {choices.map((choice, idx) => (
              <input
                key={idx}
                type="text"
                placeholder={`Choice ${idx + 1}`}
                value={choice}
                onChange={(e) => {
                  const newChoices = [...choices];
                  newChoices[idx] = e.target.value;
                  setChoices(newChoices);
                }}
                className="w-full mb-2 border border-gray-300 rounded p-2 outline-none"
              />
            ))}
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCompleteQuestion}
                className="bg-[#FF6636] text-white px-4 py-2 rounded hover:cursor-pointer"
              >
                Complete Question
              </button>
            </div>
          </>
        )}

  
        {step === 3 && (
          <>
            <h2 className="text-lg font-semibold mb-4">All Questions Added</h2>
            <p className="mb-4">You’ve added {questions.length} questions to the quiz.</p>
            <div className="flex justify-end">
              <button
                onClick={handleSaveQuiz}
                className="bg-green-500 text-white px-4 py-2 rounded hover:cursor-pointer"
              >
                Save Quiz
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
