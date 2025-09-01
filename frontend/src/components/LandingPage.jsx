import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const CareerCatalystLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-[-10] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80')",
          filter: 'blur(8px) brightness(0.7)'
        }}
      />

      {/* Header */}
      <header className="bg-black h-24 flex justify-center items-center shadow-md py-0">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img 
              src={Logo} 
              alt="Career Catalyst Logo" 
              className="h-[95px]  w-auto object-contain mr-4"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
            />
          </div>

          {/* Center: Heading */}
          <div className="flex-grow flex justify-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white">Career Catalyst</h1>
          </div>

          {/* Right: Navbar */}
          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-white font-semibold hover:text-blue-400 transition-colors duration-300">Home</a>
              <a href="#about" className="text-white font-semibold hover:text-blue-400 transition-colors duration-300">About</a>
              <a href="#features" className="text-white font-semibold hover:text-blue-400 transition-colors duration-300">Services</a>
              <a href="#contact" className="text-white font-semibold hover:text-blue-400 transition-colors duration-300">Contact</a>
               {/* ********************Login button likt to profile*************************** */}
               <Link to="/Login">
                 <button className="bg-white text-black font-bold py-2 px-5 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md">
                        Login
                </button>
               </Link>
             
            </nav>
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-white font-semibold hover:text-blue-400 transition-colors duration-300">Home</a>
            <a href="#about" className="text-white font-semibold hover:text-blue-400 transition-colors duration-300">About</a>
            <a href="#features" className="text-white font-semibold hover:text-blue-400 transition-colors duration-300">Services</a>
            <a href="#contact" className="text-white font-semibold hover:text-blue-400 transition-colors duration-300">Contact</a>
           {/* ********************Login button likt to profile*************************** */}
            <Link to="/Login">
                 <button className="bg-white text-black font-bold py-2 px-5 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 w-fit">
                     Login
            </button>
            </Link>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto flex flex-col">
          {/* Stylish headline */}
          <div className="w-full text-center mb-12 animate-fade-in">
            <p 
              className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 mb-2 tracking-tight leading-tight"
              style={{ 
                fontFamily: "'Poppins', 'Inter', sans-serif",
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))'
              }}
            >
              Building Bridges Between Alumni & Students
            </p>
            <span className="block text-lg md:text-2xl text-white font-semibold opacity-80 mb-2">
              For mentorship, networking, and growth.
            </span>
          </div>

          {/* Image and Connect/Mentor/Succeed side by side */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10 animate-slide-up">
            {/* Left: Image */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
                alt="Alumni Connect"
                className="rounded-2xl shadow-xl w-full max-w-md transform transition duration-500 hover:scale-105"
              />
            </div>

            {/* Right: Connect. Mentor. Succeed. and features */}
            <div className="w-full md:w-1/2 text-left md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Connect. Mentor. Succeed.</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                  <span className="text-lg text-white">Verified alumni and student profiles</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                  <span className="text-lg text-white">Domain-based matchmaking for mentorship</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                  <span className="text-lg text-white">Direct messaging and networking</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                  <span className="text-lg text-white">Events, webinars, and job opportunities</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                  <span className="text-lg text-white">Easy onboarding and secure authentication</span>
                </li>
              </ul>
              <a 
                href="#join" 
                className="inline-block bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md animate-bounce"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-center mb-4">
              <i className="fas fa-user-check text-4xl text-blue-600 mb-3"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Verified Profiles</h3>
              <p className="text-gray-700">All users are verified for authenticity, ensuring a safe and trusted community.</p>
            </div>
          </div>
          
          <div className="bg-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-center mb-4">
              <i className="fas fa-handshake text-4xl text-blue-600 mb-3"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mentorship Matching</h3>
              <p className="text-gray-700">Smart algorithms match students with alumni based on interests and domains.</p>
            </div>
          </div>
          
          <div className="bg-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-center mb-4">
              <i className="fas fa-calendar-check text-4xl text-blue-600 mb-3"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Events & Opportunities</h3>
              <p className="text-gray-700">Stay updated with alumni events, webinars, and exclusive job postings.</p>
            </div>
          </div>
          
          <div className="bg-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-center mb-4">
              <i className="fas fa-comment-dots text-4xl text-blue-600 mb-3"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Secure Messaging</h3>
              <p className="text-gray-700">Connect directly with mentors and peers through our secure chat system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-16 px-4">
        <div className="container mx-auto bg-transparent border-2 border-white rounded-3xl text-center p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to join the Career Catalyst community?</h2>
          <Link to="/Login" 
          className="inline-block bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md">
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
          <p className="text-lg text-white mb-4">
            Have questions or feedback? Email us at{' '}
            <a 
              href="mailto:info@careercatalyst.com" 
              className="text-blue-400 hover:text-blue-300 underline transition-colors duration-300"
            >
              info@careercatalyst.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 border-t border-gray-700">
        <p>&copy; 2025 CAREER CATALYST. All rights reserved. Made by Shela gang 🧣</p>
      </footer>

      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slideUp {
          0% { 
            transform: translateY(20px); 
            opacity: 0; 
          }
          100% { 
            transform: translateY(0); 
            opacity: 1; 
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CareerCatalystLanding;