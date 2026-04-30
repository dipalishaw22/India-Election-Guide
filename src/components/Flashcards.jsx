import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';

const flashcardsData = [
  {
    id: 1,
    term: "EVM",
    definition: "Electronic Voting Machine. Used in India since 1999 to record votes electronically instead of ballot papers, ensuring faster counting and reducing invalid votes."
  },
  {
    id: 2,
    term: "VVPAT",
    definition: "Voter Verifiable Paper Audit Trail. A machine attached to the EVM that prints a slip showing the candidate voted for, allowing voters to verify their vote before it drops into a sealed box."
  },
  {
    id: 3,
    term: "NOTA",
    definition: "None Of The Above. A ballot option that allows voters to officially register their rejection of all candidates contesting in the election."
  },
  {
    id: 4,
    term: "Model Code of Conduct (MCC)",
    definition: "A set of guidelines issued by the ECI for conduct of political parties and candidates during elections mainly with respect to speeches, polling day, polling booths, and portfolios."
  },
  {
    id: 5,
    term: "Lok Sabha",
    definition: "The lower house of India's bicameral Parliament. Members are elected by universal adult suffrage. It has a maximum of 552 members."
  },
  {
    id: 6,
    term: "Rajya Sabha",
    definition: "The upper house of the Parliament. Members are elected by the elected members of State Legislative Assemblies. It represents the states of India."
  }
];

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcardsData.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? flashcardsData.length - 1 : prev - 1));
    }, 150);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard-container animation-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>Key Election Terms</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Card {currentIndex + 1} of {flashcardsData.length}
        </p>
      </div>

      <div 
        className={`flashcard glass-card ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flashcard-face flashcard-front">
          <h3 style={{ fontSize: '2.5rem', fontWeight: '800', letterSpacing: '2px', color: 'var(--text-primary)' }}>
            {flashcardsData[currentIndex].term}
          </h3>
          <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RotateCw size={16} /> Click to reveal
          </p>
        </div>
        <div className="flashcard-face flashcard-back">
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
            {flashcardsData[currentIndex].definition}
          </p>
        </div>
      </div>

      <div className="flashcard-controls">
        <button className="btn btn-secondary" onClick={handlePrev}>
          <ArrowLeft size={20} /> Previous
        </button>
        <button className="btn" onClick={handleNext}>
          Next <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Flashcards;
