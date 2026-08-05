import React, { useState, useEffect, useRef } from 'react';
import { FaHardHat, FaTimes, FaMicrophone, FaPaperclip, FaSend, FaMinusSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';

function PavoChat({ bypassMode, onBypassChange, onAdminAuth, adminAuthed }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [messages, setMessages] = useState(localStorage.getItem('chatHistory') ? JSON.parse(localStorage.getItem('chatHistory')) : []);
  const [input, setInput] = useState('');
  const [bypassInput, setBypassInput] = useState('');
  const [showBypassPrompt, setShowBypassPrompt] = useState(false);
  const [adminInput, setAdminInput] = useState('');
  const [showAdminPrompt, setShowAdminPrompt] = useState(false);
  const [listening, setListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (!localStorage.getItem('welcomeShown')) {
      setTimeout(() => {
        const msg = {
          id: Date.now(),
          text: '🎉 Use Pavo for any advanced questions about KC Metro Pavements!',
          sender: 'pavo',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, msg]);
        localStorage.setItem('welcomeShown', 'true');
      }, 45000); // 45 seconds
    }
  }, []);

  const handleBypassPassword = () => {
    if (bypassInput === 'NOPROBLEM') {
      onBypassChange(true);
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: '✅ Bypass mode activated! You now have access to advanced features.',
        sender: 'pavo',
        timestamp: new Date()
      }]);
      setBypassInput('');
      setShowBypassPrompt(false);
    } else {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: '❌ Incorrect password. Bypass mode not activated.',
        sender: 'pavo',
        timestamp: new Date()
      }]);
    }
  };

  const handleAdminPassword = () => {
    if (adminInput === 'THESTANDARD') {
      onAdminAuth(true);
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: '🔓 Admin authentication successful! City Admin interface unlocked.',
        sender: 'pavo',
        timestamp: new Date()
      }]);
      setAdminInput('');
      setShowAdminPrompt(false);
    } else {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: '❌ Incorrect admin password.',
        sender: 'pavo',
        timestamp: new Date()
      }]);
    }
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    if (input === 'NOPROBLEM') {
      setShowBypassPrompt(true);
      setBypassInput('');
      return;
    }

    if (input === '1234' && bypassMode) {
      onBypassChange(false);
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: '⚠️ Bypass mode deactivated.',
        sender: 'pavo',
        timestamp: new Date()
      }]);
      setInput('');
      return;
    }

    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    }]);

    // Simulate Pavo response
    setIsThinking(true);
    setTimeout(() => {
      const responses = [
        'That\'s a great question about KC pavement standards! Based on the data in our system...',
        'I can help you with that. Let me search our database...',
        'KC Pavements has specifications for all major road types in the metro area.',
        'Concrete typically lasts longer than asphalt, though initial costs are higher.',
        'Interested in lifecycle costs? Let me run a calculation for you.'
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: response,
        sender: 'pavo',
        timestamp: new Date()
      }]);
      setIsThinking(false);
    }, 2000);

    setInput('');
  };

  const chatContent = (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: isFullscreen ? '100vh' : '400px',
      backgroundColor: '#fff',
      borderRadius: isFullscreen ? '0' : '12px',
      boxShadow: isFullscreen ? 'none' : '0 4px 12px rgba(0,0,0,0.1)',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaHardHat size={24} color="#ff8c00" />
          <h3 style={{ margin: 0 }}>Pavo</h3>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => setIsFullscreen(!isFullscreen)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
            {isFullscreen ? '✕' : '⛶'}
          </button>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {!messages.length && (
          <p style={{ textAlign: 'center', color: '#999' }}>Hi! I'm Pavo. Ask me anything about KC road pavements.</p>
        )}
        {messages.map(msg => (
          <div key={msg.id} style={{
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            maxWidth: '70%',
            backgroundColor: msg.sender === 'user' ? '#ff8c00' : '#f0f0f0',
            color: msg.sender === 'user' ? '#fff' : '#1a1a1a',
            padding: '12px 16px',
            borderRadius: '8px'
          }}>
            {msg.text}
          </div>
        ))}
        {isThinking && (
          <div style={{ alignSelf: 'flex-start', color: '#999' }}>
            Pavo is thinking...
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div style={{ padding: '15px', borderTop: '1px solid #e0e0e0', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask about pavements..."
          style={{ flex: 1, padding: '10px', borderRadius: '20px', border: '1px solid #e0e0e0' }}
        />
        <button onClick={() => setListening(!listening)} style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '18px',
          color: listening ? '#ff8c00' : '#1a1a1a'
        }}>
          🎤
        </button>
        <button onClick={handleSendMessage} style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '18px',
          color: '#ff8c00'
        }}>
          📤
        </button>
      </div>
    </div>
  );

  if (isFullscreen) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        backgroundColor: '#fff'
      }}>
        {chatContent}
      </motion.div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '350px',
      zIndex: 999
    }}>
      {chatContent}
    </div>
  );
}

export default PavoChat;
