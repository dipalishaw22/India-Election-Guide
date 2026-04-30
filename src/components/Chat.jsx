import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

const QA_DATABASE = [
  {
    keywords: ["age", "voting age", "eligible", "who can vote"],
    response: "The minimum voting age in India is 18 years. You must also be an Indian citizen and be registered on the electoral roll of your constituency."
  },
  {
    keywords: ["mcc", "model code of conduct", "code of conduct"],
    response: "The Model Code of Conduct (MCC) is a set of guidelines issued by the Election Commission of India. It comes into effect as soon as the election schedule is announced, ensuring a level playing field and free and fair elections."
  },
  {
    keywords: ["evm", "machine", "how to vote"],
    response: "EVM stands for Electronic Voting Machine. It allows citizens to cast their votes electronically. When you press the button next to your chosen candidate's symbol, your vote is recorded."
  },
  {
    keywords: ["vvpat", "paper trail", "verify"],
    response: "VVPAT stands for Voter Verifiable Paper Audit Trail. It's a machine attached to the EVM that prints a paper slip allowing you to visually verify that your vote was cast for the correct candidate before the slip drops into a sealed box."
  },
  {
    keywords: ["process", "steps", "stages", "how does it work"],
    response: "The general election process includes: 1) Updating Electoral Rolls, 2) Announcement of dates & MCC implementation, 3) Candidate Nominations & Scrutiny, 4) Campaigning period, and 5) Polling day followed by Counting of votes."
  },
  {
    keywords: ["ec", "eci", "election commission", "who conducts"],
    response: "The Election Commission of India (ECI) is the autonomous constitutional authority responsible for administering all election processes in India, including the Lok Sabha and State Legislative Assemblies."
  },
  {
    keywords: ["nota", "none of the above", "reject"],
    response: "NOTA stands for 'None of the Above'. It is an option on the EVM that allows you to officially register your rejection of all candidates contesting in your constituency."
  },
  {
    keywords: ["hello", "hi", "hey", "help"],
    response: "Hello! I am your Election Assistant. You can ask me questions about the voting process, eligibility, EVMs, MCC, or anything else related to Indian elections."
  }
];

const getBotResponse = (userInput) => {
  const lowerInput = userInput.toLowerCase();
  
  for (const item of QA_DATABASE) {
    if (item.keywords.some(kw => lowerInput.includes(kw))) {
      return item.response;
    }
  }
  
  return "I'm not quite sure about that. Try asking about the 'election process', 'voting age', 'EVMs', 'VVPAT', or 'MCC'.";
};

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Namaste! I'm your interactive Election Assistant. What would you like to know about the Indian Election process?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    
    const botReplyText = getBotResponse(inputValue);
    setInputValue('');

    // Simulate typing delay
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: botReplyText }]);
    }, 600);
  };

  return (
    <div className="chat-wrapper animation-fade-in">
      <div className="glass-card chat-container">
        <div className="chat-header">
          <Bot size={24} color="var(--primary-color)" />
          <h2>Election Assistant Chat</h2>
        </div>
        
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message-row ${msg.sender}`}>
              <div className="message-avatar">
                {msg.sender === 'bot' ? <Bot size={18} /> : <User size={18} />}
              </div>
              <div className={`message-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about EVMs, voting age, process..."
            className="chat-input"
          />
          <button type="submit" className="chat-send-btn" disabled={!inputValue.trim()}>
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
