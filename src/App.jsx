import React, { useState } from 'react';
import { BookOpen, Layers, HelpCircle, CheckCircle } from 'lucide-react';
import Information from './components/Information';
import Flashcards from './components/Flashcards';
import Quiz from './components/Quiz';
import Chat from './components/Chat';

function App() {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="app-container">
      <header>
        <div className="logo">
          <CheckCircle className="text-blue-500" />
          <span>India Election Guide</span>
        </div>
        <nav>
          <button 
            className={activeTab === 'info' ? 'active' : ''} 
            onClick={() => setActiveTab('info')}
          >
            <BookOpen size={18} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'text-bottom' }}/>
            Process
          </button>
          <button 
            className={activeTab === 'cards' ? 'active' : ''} 
            onClick={() => setActiveTab('cards')}
          >
            <Layers size={18} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'text-bottom' }}/>
            Flashcards
          </button>
          <button 
            className={activeTab === 'quiz' ? 'active' : ''} 
            onClick={() => setActiveTab('quiz')}
          >
            <HelpCircle size={18} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'text-bottom' }}/>
            Quiz
          </button>
          <button 
            className={activeTab === 'chat' ? 'active' : ''} 
            onClick={() => setActiveTab('chat')}
          >
            <HelpCircle size={18} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'text-bottom' }}/>
            Chat
          </button>
        </nav>
      </header>

      <main>
        {activeTab === 'info' && <Information />}
        {activeTab === 'cards' && <Flashcards />}
        {activeTab === 'quiz' && <Quiz />}
        {activeTab === 'chat' && <Chat />}
      </main>
    </div>
  );
}

export default App;
