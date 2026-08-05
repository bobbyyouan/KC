import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Home() {
  const [questionnaire, setQuestionnaire] = useState(!localStorage.getItem('completedQuestionnaire'));
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [stage, setStage] = useState('q1');

  const handleQ1 = (answer) => {
    setQ1(answer);
    setStage('q2');
  };

  const handleQ2 = (answer) => {
    setQ2(answer);
    setStage('q3');
  };

  const handleQ3 = (answer) => {
    setQ3(answer);
    localStorage.setItem('completedQuestionnaire', 'true');
    localStorage.setItem('userRole', q1);
    localStorage.setItem('useCase', answer);
    
    if (answer === 'project') {
      window.location.href = '/calculator';
    } else {
      setQuestionnaire(false);
    }
  };

  if (questionnaire) {
    return (
      <motion.div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: '20px'
      }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div style={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          maxWidth: '500px',
          width: '100%'
        }}>
          {stage === 'q1' && (
            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <h2 style={{ marginBottom: '20px', color: '#1a1a1a' }}>Are you an Engineer?</h2>
              <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                <button onClick={() => handleQ1('yes')} className="btn btn-primary" style={{ width: '100%' }}>Yes</button>
                <button onClick={() => handleQ1('no')} className="btn btn-secondary" style={{ width: '100%' }}>No</button>
                <button onClick={() => handleQ1('sometimes')} className="btn btn-secondary" style={{ width: '100%' }}>Sometimes</button>
              </div>
            </motion.div>
          )}

          {stage === 'q2' && (
            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <div style={{ marginBottom: '30px', backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '8px', fontSize: '14px' }}>
                <strong>About KC Pavement Analysis:</strong>
                <p>KC Pavement Analysis was created by Civil Engineering Intern Bobby Youan and Danny Will for their Summer Project. It compiles pavement specification standards and 30-year lifecycle cost comparisons across Kansas City metro municipalities. It helps city planners, contractors, and developers make informed decisions on asphalt vs. concrete — backed by real engineering data, not guesswork.</p>
              </div>
              <h2 style={{ marginBottom: '20px', color: '#1a1a1a' }}>What are you using this data for?</h2>
              <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                <button onClick={() => handleQ2('project')} className="btn btn-primary" style={{ width: '100%' }}>Project</button>
                <button onClick={() => handleQ2('compiling')} className="btn btn-secondary" style={{ width: '100%' }}>Compiling Data</button>
                <button onClick={() => handleQ2('curious')} className="btn btn-secondary" style={{ width: '100%' }}>Curious</button>
                <button onClick={() => handleQ2('other')} className="btn btn-secondary" style={{ width: '100%' }}>Other</button>
              </div>
            </motion.div>
          )}

          {stage === 'q3' && (
            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <h2 style={{ marginBottom: '20px', color: '#1a1a1a' }}>Do you have LinkedIn?</h2>
              <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                <button onClick={() => {
                  window.open('https://www.linkedin.com/in/bobbyyouan/', '_blank');
                  handleQ3('yes');
                }} className="btn btn-primary" style={{ width: '100%' }}>Yes - Open LinkedIn</button>
                <button onClick={() => handleQ3('no')} className="btn btn-secondary" style={{ width: '100%' }}>No</button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '100px 40px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>The KC road standard database is here</h1>
        <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto 40px' }}>With a variety of cities in the KC Metro having differing road standards and specifications, it was only right to put them all in one place.</p>
        
        <input
          type="text"
          placeholder="Search pavement types, cities, or specifications..."
          style={{
            width: '100%',
            maxWidth: '600px',
            padding: '16px',
            fontSize: '16px',
            borderRadius: '50px',
            border: 'none',
            boxShadow: '0 4px 16px rgba(255, 140, 0, 0.2)'
          }}
        />
      </section>

      {/* About Section */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '40px' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '30px' }}>About the Project</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>The project was created by Bobby Youan and Danny Will with the collaboration from the Overland Park Interns at BHC to make infrastructure data more accessible to engineers, contractors, city planners, and curious residents alike.</p>
        
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>Team & Contributors</h3>
        <ul style={{ lineHeight: '2' }}>
          <li>Bobby Youan - Creator</li>
          <li>Danny Will - Creator</li>
          <li>Teddy Guidry - Helper</li>
          <li>JT Grabowski - Helper</li>
          <li>Dominic Passantino - Helper</li>
          <li>Samuel Herzog - Helper</li>
          <li>Overland Park Interns at BHC - Collaboration</li>
        </ul>

        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>Data Sources Referenced</h3>
        <ul style={{ lineHeight: '2' }}>
          <li><a href="https://www.apwa.net" target="_blank" rel="noopener noreferrer">APWA Standards (American Public Works Association)</a></li>
          <li><a href="https://www.ksdot.org" target="_blank" rel="noopener noreferrer">KDOT - Kansas Department of Transportation</a></li>
          <li><a href="https://www.modot.org" target="_blank" rel="noopener noreferrer">MoDOT - Missouri Department of Transportation</a></li>
          <li>City Engineering Departments</li>
          <li>Municipal Codes & Ordinances</li>
          <li>Historical Bid Data</li>
        </ul>

        <p style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>Note: All numerical values are estimates based off bid tabs</p>
      </section>
    </div>
  );
}

export default Home;
