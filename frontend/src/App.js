import React, { useState } from 'react';
import { Wrench, Star } from 'lucide-react';
import Login from './components/Login';
import SignupRole from './components/SignupRole';
import './index.css'; 

export default function App() {
  const [view, setView] = useState('LOGIN');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ width: '50%', backgroundColor: '#4f46e5', color: 'white', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }} className="desktop-only">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '2rem', fontWeight: 'bold', zIndex: 10 }}>
          <Wrench color="#fbbf24" size={32} />
          <span>AyosNow</span>
        </div>
        <div style={{ zIndex: 10 }}>
          <h1 style={{ fontSize: '3rem', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Fix your problems, <br />
            <span style={{ color: '#bfdbfe' }}>one click away.</span>
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '1rem', borderRadius: '1rem', display: 'inline-flex', alignItems: 'center', gap: '1rem' }}>
            <Star fill="currentColor" color="#1e1b4b" />
            <div>
              <div style={{ fontWeight: 'bold' }}>4.9/5 Rating</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Trusted by 10k+ users</div>
            </div>
          </div>
        </div>
        <div style={{ zIndex: 10, opacity: 0.7 }}>&copy; 2024 AyosNow Inc.</div>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ width: '100%', maxWidth: '450px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827' }}>
              {view === 'LOGIN' ? 'Welcome Back' : 'Create Account'}
            </h2>
          </div>

          {view === 'LOGIN' ? (
            <Login onRegisterClick={() => setView('REGISTER')} />
          ) : (
            <SignupRole onLoginClick={() => setView('LOGIN')} />
          )}
        </div>
      </div>
    </div>
  );
}
