import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePhoneAuth } from '../hooks/usePhoneAuth';
import Input from '../components/Input'; // Reusable Input component
import Button from '../components/Button'; // Reusable Button component

function LoginPage({ text }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState(''); // Added for simulated onboarding
  const navigate = useNavigate();
  const { sendOtp, verifyOtp, confirmationReady, sending, verifying, error, message } = usePhoneAuth(text.language); // Assuming text object has language

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter your name.'); // Simple validation
      return;
    }
    // Simulate successful login if Firebase is not fully configured for OTP
    if (import.meta.env.VITE_FIREBASE_API_KEY === 'your-api-key') {
      console.warn("Firebase not configured. Simulating login for prototype.");
      // In a real app, you'd send OTP. For this prototype, we'll just "login"
      // and redirect.
      // You can add a local storage item to simulate user session
      localStorage.setItem('niveshSaralUser', JSON.stringify({
        uid: 'mock-uid-' + Math.random().toString(36).substring(7),
        displayName: name,
        phoneNumber: phoneNumber
      }));
      alert("Simulated login successful! Redirecting to Dashboard.");
      navigate('/dashboard');
      return;
    }

    // Real OTP flow if Firebase is configured
    await sendOtp(phoneNumber);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    await verifyOtp(otp);
    if (!error) {
      // Simulate setting user display name on Firebase for consistency
      // In a real app, you might update user profile
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, { displayName: name });
      }
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-4">
      <div className="glass-card p-8 sm:p-10 w-full max-w-md text-center flex flex-col items-center gap-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-ink font-display leading-tight">{text.welcome}</h1>
        <p className="text-lg text-primary/80 max-w-xs">{text.sub}</p>

        {!confirmationReady ? (
          <form onSubmit={handleSendOtp} className="w-full flex flex-col gap-4">
            <Input
              id="name"
              label={language === 'en' ? 'Your Name' : 'आपका नाम'}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={language === 'en' ? 'Enter your name' : 'अपना नाम दर्ज करें'}
              required
            />
            <Input
              id="phone"
              label={text.phoneLabel}
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+91 XXXXX XXXXX"
              required
            />
            <Button type="submit" disabled={sending || !phoneNumber.trim()} className="bg-primary text-white">
              {sending ? (language === 'en' ? 'Sending OTP...' : 'ओटीपी भेज रहा है...') : text.sendOtp}
            </Button>
            {error && <p className="text-error text-sm mt-2">{error}</p>}
            {message && <p className="text-success text-sm mt-2">{message}</p>}
            <p className="text-xs text-primary/70 mt-2">
              {language === 'en' ? 'We never share your number. OTP powered by Firebase, protected with invisible reCAPTCHA.' : 'हम आपका नंबर कभी साझा नहीं करते। Firebase द्वारा संचालित ओटीपी, अदृश्य reCAPTCHA से सुरक्षित।'}
            </p>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="w-full flex flex-col gap-4">
            <Input
              id="otp"
              label={text.otpLabel}
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder={language === 'en' ? 'Enter 6-digit OTP' : '6 अंकों का ओटीपी दर्ज करें'}
              required
            />
            <Button type="submit" disabled={verifying || !otp.trim()} className="bg-primary text-white">
              {verifying ? (language === 'en' ? 'Verifying...' : 'सत्यापित कर रहा है...') : text.verify}
            </Button>
            {error && <p className="text-error text-sm mt-2">{error}</p>}
            {message && <p className="text-success text-sm mt-2">{message}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginPage;