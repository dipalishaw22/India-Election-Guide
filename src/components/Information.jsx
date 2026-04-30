import React from 'react';
import { Calendar, UserCheck, ShieldCheck, Map, Clock } from 'lucide-react';

const Information = () => {
  return (
    <div className="animation-fade-in">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--saffron)' }}>
        Indian Election Process
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
        India is the world's largest democracy. The Election Commission of India (ECI) 
        is an autonomous constitutional authority responsible for administering election processes in India.
      </p>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
        Key Stages of an Election
      </h2>

      <div className="info-grid">
        <div className="glass-card step-card">
          <div className="step-number">1</div>
          <Calendar size={32} color="var(--primary-color)" style={{ marginBottom: '1rem' }}/>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Delimitation & Electoral Rolls</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Boundaries of constituencies are drawn based on population. The ECI then updates the 
            electoral rolls to include eligible voters (citizens above 18 years).
          </p>
        </div>

        <div className="glass-card step-card">
          <div className="step-number">2</div>
          <Clock size={32} color="var(--saffron)" style={{ marginBottom: '1rem' }}/>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Election Schedule & MCC</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            The ECI announces the dates for nomination, polling, and counting. 
            The Model Code of Conduct (MCC) comes into effect immediately to ensure a level playing field.
          </p>
        </div>

        <div className="glass-card step-card">
          <div className="step-number">3</div>
          <UserCheck size={32} color="var(--primary-hover)" style={{ marginBottom: '1rem' }}/>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Nomination & Scrutiny</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Candidates file their nomination papers, which are scrutinized by Returning Officers. 
            Candidates have a window to withdraw their nominations.
          </p>
        </div>

        <div className="glass-card step-card">
          <div className="step-number">4</div>
          <Map size={32} color="var(--text-primary)" style={{ marginBottom: '1rem' }}/>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Campaigning</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Political parties and candidates campaign to win voter support. Campaigning 
            officially ends 48 hours before the end of polling.
          </p>
        </div>

        <div className="glass-card step-card">
          <div className="step-number">5</div>
          <ShieldCheck size={32} color="var(--green)" style={{ marginBottom: '1rem' }}/>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Polling & Counting</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Voters cast their votes using EVMs (Electronic Voting Machines) and VVPATs. 
            On a designated day, votes are counted under strict supervision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
