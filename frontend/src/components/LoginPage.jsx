import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const CareerCatalystAuth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginMethod, setLoginMethod] = useState('password');
  const [registerMethod, setRegisterMethod] = useState('password');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showRegisterOtp, setShowRegisterOtp] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', isError: true });
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
    loginPhone: '',
    loginOtp: '',
    registerFirstName: '',
    registerLastName: '',
    registerEmail: '',
    registerPassword: '',
    registerConfirmPassword: '',
    userType: 'student',
    registerPhone: '',
    registerOtp: '',
    otpRegisterFirstName: '',
    otpRegisterLastName: '',
    otpUserType: 'student'
  });
  const navigate = useNavigate();


  const showToast = (message, isError = true) => {
    setToast({ show: true, message, isError });
    setTimeout(() => {
      setToast({ show: false, message: '', isError: true });
    }, 3000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\D/g, ''));
  };

  const handlePasswordLogin = () => {
    if (!formData.loginEmail || !formData.loginPassword) {
      showToast('Please fill in all fields');
      return;
    }
    
    if (!isValidEmail(formData.loginEmail)) {
      showToast('Please enter a valid email address');
      return;
    }
    
    // Simulate login success and nivigate to profile page
    showToast('Login successful! Redirecting...', false);
    setTimeout(() => {
     navigate('/Homepage');
    }, 1500);
  };

  const handlePasswordRegister = () => {
    if (!formData.registerFirstName || !formData.registerLastName || 
        !formData.registerEmail || !formData.registerPassword || 
        !formData.registerConfirmPassword) {
      showToast('Please fill in all fields');
      return;
    }
    
    if (!isValidEmail(formData.registerEmail)) {
      showToast('Please enter a valid email address');
      return;
    }
    
    if (formData.registerPassword !== formData.registerConfirmPassword) {
      showToast('Passwords do not match');
      return;
    }
    
    if (formData.registerPassword.length < 6) {
      showToast('Password should be at least 6 characters');
      return;
    }
    
    // Simulate registration success
    showToast('Registration successful! Redirecting...', false);
    setTimeout(() => {
      navigate('/Homepage');
    }, 1500);
  };

  const handleSendOtp = (isRegister = false) => {
    const phoneNumber = isRegister ? formData.registerPhone : formData.loginPhone;
    
    if (!phoneNumber) {
      showToast('Please enter your phone number');
      return;
    }
    
    if (!isValidPhoneNumber(phoneNumber)) {
      showToast('Please enter a valid phone number with country code');
      return;
    }
    
    // Simulate OTP sent
    showToast('OTP sent successfully!', false);
    if (isRegister) {
      setShowRegisterOtp(true);
    } else {
      setShowOtpInput(true);
    }
  };

  const handleVerifyOtp = (isRegister = false) => {
    const otpCode = isRegister ? formData.registerOtp : formData.loginOtp;
    
    if (!otpCode) {
      showToast('Please enter the OTP code');
      return;
    }
    
    if (isRegister) {
      if (!formData.otpRegisterFirstName || !formData.otpRegisterLastName) {
        showToast('Please fill in all fields');
        return;
      }
    }
    
    // Simulate OTP verification
    if (otpCode === '123456') {
      const message = isRegister ? 'Registration successful! Redirecting...' : 'Login successful! Redirecting...';
      showToast(message, false);
      setTimeout(() => {
        navigate('/Homepage');
      }, 1500);
    } else {
      showToast('Invalid OTP code');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center p-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row shadow-2xl border border-white/30">
        {/* Left Side - Branding */}
        <div className="bg-gradient-to-br from-blue-900 to-purple-800 text-white p-8 md:p-12 md:w-2/5 flex flex-col justify-center items-center text-center relative">
          <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-4 transition duration-300 hover:scale-110" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}>
            <i className="fas fa-graduation-cap text-blue-600 text-2xl"></i>
          </div>
          <h1 className="text-3xl font-extrabold mb-4 tracking-wide">Career Catalyst</h1>
          <p className="text-white/80 mb-8 text-lg">Building bridges between alumni and students for mentorship, networking, and growth.</p>
          <div className="mt-8 space-y-4 w-full">
            <div className="flex items-center justify-center space-x-2 group">
              <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/40 transition">
                <i className="fas fa-user-friends text-lg"></i>
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Verified Profiles</h3>
                <p className="text-sm text-white/60">Authentic alumni network</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 group">
              <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/40 transition">
                <i className="fas fa-handshake text-lg"></i>
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Smart Matching</h3>
                <p className="text-sm text-white/60">Find the right mentors</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 group">
              <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/40 transition">
                <i className="fas fa-briefcase text-lg"></i>
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Opportunities</h3>
                <p className="text-sm text-white/60">Exclusive job postings</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Authentication Forms */}
        <div className="p-8 md:p-12 md:w-3/5">
          <div className="flex justify-center mb-8 border-b border-gray-200">
            <button 
              className={`py-2 px-4 font-medium transition border-b-2 ${
                activeTab === 'login' 
                  ? 'text-blue-600 border-blue-600' 
                  : 'text-gray-500 border-transparent hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button 
              className={`py-2 px-4 font-medium transition border-b-2 ${
                activeTab === 'register' 
                  ? 'text-blue-600 border-blue-600' 
                  : 'text-gray-500 border-transparent hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </button>
          </div>
          
          {/* Login Form */}
          {activeTab === 'login' && (
            <div className="auth-form">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
                <p className="text-gray-600">Sign in to continue your journey</p>
              </div>
              <div className="flex space-x-4 mb-6">
                <button 
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${
                    loginMethod === 'password' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                  onClick={() => setLoginMethod('password')}
                >
                  Password Login
                </button>
                <button 
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${
                    loginMethod === 'otp' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                  onClick={() => setLoginMethod('otp')}
                >
                  OTP Login
                </button>
              </div>
              
              {/* Password Login */}
              {loginMethod === 'password' && (
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" 
                      placeholder="Enter your email"
                      value={formData.loginEmail}
                      onChange={(e) => handleInputChange('loginEmail', e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input 
                      type="password" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" 
                      placeholder="Enter your password"
                      value={formData.loginPassword}
                      onChange={(e) => handleInputChange('loginPassword', e.target.value)}
                    />
                    <div className="text-right mt-2">
                      <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
                    </div>
                  </div>
                  <button 
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mb-6 transition hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg"
                    onClick={handlePasswordLogin}
                  >
                    Sign In
                  </button>
                </div>
              )}
              
              {/* OTP Login */}
              {loginMethod === 'otp' && (
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" 
                      placeholder="+1 234 567 8900"
                      value={formData.loginPhone}
                      onChange={(e) => handleInputChange('loginPhone', e.target.value)}
                    />
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4 text-center text-sm text-gray-600">
                    reCAPTCHA would appear here in production
                  </div>
                  {showOtpInput && (
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">OTP Code</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" 
                        placeholder="Enter 6-digit OTP"
                        value={formData.loginOtp}
                        onChange={(e) => handleInputChange('loginOtp', e.target.value)}
                      />
                    </div>
                  )}
                  {!showOtpInput ? (
                    <button 
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mb-6 transition hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg"
                      onClick={() => handleSendOtp(false)}
                    >
                      Send OTP
                    </button>
                  ) : (
                    <button 
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mb-6 transition hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg"
                      onClick={() => handleVerifyOtp(false)}
                    >
                      Verify OTP
                    </button>
                  )}
                </div>
              )}
              
              <div className="text-center">
                <p className="text-gray-600">Don't have an account? <button className="text-blue-600 font-medium hover:underline" onClick={() => setActiveTab('register')}>Register now</button></p>
              </div>
            </div>
          )}
          
          {/* Register Form */}
          {activeTab === 'register' && (
            <div className="auth-form">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
                <p className="text-gray-600">Join our community today</p>
              </div>
              <div className="flex space-x-4 mb-6">
                <button 
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${
                    registerMethod === 'password' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                  onClick={() => setRegisterMethod('password')}
                >
                  Password Register
                </button>
                <button 
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${
                    registerMethod === 'otp' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                  onClick={() => setRegisterMethod('otp')}
                >
                  OTP Register
                </button>
              </div>
              
              {/* Password Register */}
              {registerMethod === 'password' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" 
                        placeholder="First name"
                        value={formData.registerFirstName}
                        onChange={(e) => handleInputChange('registerFirstName', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" 
                        placeholder="Last name"
                        value={formData.registerLastName}
                        onChange={(e) => handleInputChange('registerLastName', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" 
                      placeholder="Enter your email"
                      value={formData.registerEmail}
                      onChange={(e) => handleInputChange('registerEmail', e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input 
                      type="password" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" 
                      placeholder="Create a password"
                      value={formData.registerPassword}
                      onChange={(e) => handleInputChange('registerPassword', e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Confirm Password</label>
                    <input 
                      type="password" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" 
                      placeholder="Confirm your password"
                      value={formData.registerConfirmPassword}
                      onChange={(e) => handleInputChange('registerConfirmPassword', e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">I am a:</label>
                    <select 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]"
                      value={formData.userType}
                      onChange={(e) => handleInputChange('userType', e.target.value)}
                    >
                      <option value="student">Student</option>
                      <option value="alumni">Alumni</option>
                    </select>
                  </div>
                  <button 
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mb-6 transition hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg"
                    onClick={handlePasswordRegister}
                  >
                    Create Account
                  </button>
                </div>
              )}
              
              {/* OTP Register */}
              {registerMethod === 'otp' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" 
                        placeholder="First name"
                        value={formData.otpRegisterFirstName}
                        onChange={(e) => handleInputChange('otpRegisterFirstName', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" 
                        placeholder="Last name"
                        value={formData.otpRegisterLastName}
                        onChange={(e) => handleInputChange('otpRegisterLastName', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" 
                      placeholder="+1 234 567 8900"
                      value={formData.registerPhone}
                      onChange={(e) => handleInputChange('registerPhone', e.target.value)}
                    />
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4 text-center text-sm text-gray-600">
                    reCAPTCHA would appear here in production
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">I am a:</label>
                    <select 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]"
                      value={formData.otpUserType}
                      onChange={(e) => handleInputChange('otpUserType', e.target.value)}
                    >
                      <option value="student">Student</option>
                      <option value="alumni">Alumni</option>
                    </select>
                  </div>
                  {showRegisterOtp && (
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">OTP Code</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" 
                        placeholder="Enter 6-digit OTP"
                        value={formData.registerOtp}
                        onChange={(e) => handleInputChange('registerOtp', e.target.value)}
                      />
                    </div>
                  )}
                  {!showRegisterOtp ? (
                    <button 
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mb-6 transition hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg"
                      onClick={() => handleSendOtp(true)}
                    >
                      Send OTP
                    </button>
                  ) : (
                    <button 
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mb-6 transition hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg"
                      onClick={() => handleVerifyOtp(true)}
                    >
                      Verify OTP & Create Account
                    </button>
                  )}
                </div>
              )}
              
              <div className="text-center">
                <p className="text-gray-600">Already have an account? <button className="text-blue-600 font-medium hover:underline" onClick={() => setActiveTab('login')}>Sign in</button></p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Toast Notification */}
      <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 z-50 ${
        toast.show ? 'translate-y-0' : '-translate-y-20'
      } ${toast.isError ? 'bg-red-500' : 'bg-green-500'} text-white`}>
        <div className="flex items-center">
          <i className="fas fa-exclamation-circle mr-2"></i>
          <span>{toast.message}</span>
        </div>
      </div>
      
      {/* Font Awesome Icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </div>
  );
};

export default CareerCatalystAuth;      