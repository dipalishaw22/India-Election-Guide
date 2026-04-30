import React, { useState } from 'react';
import { Award, RefreshCcw } from 'lucide-react';

const quizData = [
  {
    question: "What is the minimum voting age in India?",
    options: ["16 years", "18 years", "21 years", "25 years"],
    answerIndex: 1
  },
  {
    question: "Which body conducts the elections for the Lok Sabha and State Legislative Assemblies?",
    options: ["Supreme Court of India", "Parliament of India", "Election Commission of India", "President of India"],
    answerIndex: 2
  },
  {
    question: "What does VVPAT stand for?",
    options: ["Voter Verified Paper Audit Trail", "Voting Verification Panel and Tracking", "Voter Verifiable Paper Audit Trail", "Verified Voter Paper Accuracy Test"],
    answerIndex: 2
  },
  {
    question: "How long before polling day does election campaigning officially end?",
    options: ["24 hours", "48 hours", "72 hours", "1 week"],
    answerIndex: 1
  },
  {
    question: "Which option allows a voter to reject all candidates?",
    options: ["REJECT", "NULL", "VOID", "NOTA"],
    answerIndex: 3
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerOptionClick = (index) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === quizData[currentQuestion].answerIndex) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        setShowScore(true);
      }
    }, 1500); // Wait 1.5 seconds to show if correct or incorrect
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const progressPercentage = ((currentQuestion) / quizData.length) * 100;

  return (
    <div className="quiz-container animation-fade-in">
      {showScore ? (
        <div className="glass-card result-card">
          <Award size={64} color="var(--primary-color)" style={{ margin: '0 auto' }} />
          <h2 style={{ fontSize: '2rem', marginTop: '1rem' }}>Quiz Completed!</h2>
          <div className="result-score">
            {score} / {quizData.length}
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            {score === quizData.length ? "Perfect score! You know your democracy well." : 
             score >= quizData.length / 2 ? "Good job! You have a solid understanding." : 
             "Keep learning! Review the Flashcards and Process steps."}
          </p>
          <button className="btn" onClick={restartQuiz} style={{ margin: '0 auto' }}>
            <RefreshCcw size={20} /> Retry Quiz
          </button>
        </div>
      ) : (
        <div className="glass-card">
          <div className="quiz-progress">
            <span>Question {currentQuestion + 1} of {quizData.length}</span>
            <span>Score: {score}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          
          <h2 style={{ fontSize: '1.5rem', margin: '2rem 0', lineHeight: '1.4' }}>
            {quizData[currentQuestion].question}
          </h2>

          <div className="options-grid">
            {quizData[currentQuestion].options.map((option, index) => {
              let buttonClass = 'option-btn';
              if (isAnswered) {
                if (index === quizData[currentQuestion].answerIndex) {
                  buttonClass += ' correct';
                } else if (index === selectedOption) {
                  buttonClass += ' incorrect';
                }
              }

              return (
                <button
                  key={index}
                  className={buttonClass}
                  onClick={() => handleAnswerOptionClick(index)}
                  disabled={isAnswered}
                >
                  <span style={{ fontWeight: '500' }}>{option}</span>
                  {isAnswered && index === quizData[currentQuestion].answerIndex && (
                    <span style={{ color: 'var(--green)' }}>✓</span>
                  )}
                  {isAnswered && index === selectedOption && index !== quizData[currentQuestion].answerIndex && (
                    <span style={{ color: '#ff3333' }}>✗</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
