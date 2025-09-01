import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaHome,
  FaComments,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "../assets/Logo.png";

// Mock data for profiles
const mockProfiles = [
  {
    id: 1,
    name: "Sarah Johnson",
    profession: "Software Engineer at Google",
    email: "sarah.j@email.com",
    type: "alumni",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    domain: "Full Stack Developer",
    college: "MIT",
    connections: 500,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    profession: "Computer Science Professor",
    email: "m.chen@university.edu",
    type: "faculty",
    skills: ["Machine Learning", "Python", "TensorFlow", "Research", "AI"],
    domain: "AI/ML Researcher",
    college: "Stanford University",
    connections: 300,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    profession: "Final Year CS Student",
    email: "emma.r@student.edu",
    type: "student",
    skills: ["JavaScript", "React", "CSS", "Figma", "UI/UX"],
    domain: "Frontend Developer",
    college: "UC Berkeley",
    connections: 150,
  },
  // ... add the rest of your mock profiles here
  ...Array.from({ length: 30 }, (_, i) => ({
    id: i + 4,
    name: `User ${i + 4}`,
    profession: i % 2 === 0 ? "Engineer at Tech Corp" : "Designer at Tech Corp",
    email: `user${i + 4}@email.com`,
    type: i % 3 === 0 ? "student" : i % 3 === 1 ? "alumni" : "faculty",
    skills: ["JavaScript", "Python", "React", "Node.js"],
    domain:
      i % 2 === 0 ? "Web Developer" : "App Developer",
    college: i % 2 === 0 ? "IIT Delhi" : "Stanford",
    connections: Math.floor(Math.random() * 1000),
  })),
];

const Connections = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Custom scrollbar styles for profile cards
  const customScrollStyle = `
    .custom-scroll::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    .custom-scroll {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .custom-scroll::-webkit-scrollbar-thumb {
      background: transparent;
    }
  `;
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [visibleProfiles, setVisibleProfiles] = useState(9);
  const [connectedProfiles, setConnectedProfiles] = useState(new Set());

  // Filter profiles based on search
  const filteredProfiles = mockProfiles.filter((profile) => {
    const search = searchQuery.toLowerCase();
    // Filter by type
    const typeMatch = filterType === "all" || profile.type === filterType;
    // Filter by search
    const searchMatch = (
      profile.name.toLowerCase().includes(search) ||
      profile.profession.toLowerCase().includes(search) ||
      profile.domain.toLowerCase().includes(search) ||
      profile.college.toLowerCase().includes(search) ||
      profile.skills.some((skill) => skill.toLowerCase().includes(search))
    );
    return typeMatch && searchMatch;
  });

  const visible = filteredProfiles.slice(0, visibleProfiles);

  const loadMore = () => {
    setVisibleProfiles((prev) =>
      Math.min(prev + 9, filteredProfiles.length)
    );
  };

  const handleConnect = (id) => {
    setConnectedProfiles((prev) => new Set([...prev, id]));
  };

  return (
    <>
      <style>{customScrollStyle}</style>
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white shadow-md px-6 h-20">
        {/* Left: Logo + Name */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          {/* Logo Image */}
          <img
            src={Logo}
            alt="Career Catalyst Logo"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          {/* Career Catalyst Text */}
          <span className="text-lg sm:text-xl font-bold text-gray-800">
            Career Catalyst
          </span>
        </div>

        {/* Middle: Search Bar (always visible, adjusts size) */}
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-1/2 sm:w-1/3">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-gray-700 text-sm"
          />
        </div>

        {/* Right: Nav Links (Desktop only) */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link to="/HomePage" className="flex items-center hover:text-blue-600">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link to="/communication" className="flex items-center hover:text-blue-600">
            <FaComments className="mr-1" /> Communication
          </Link>
          <Link to="/Connections" className="flex items-center hover:text-blue-600">
            <FaUsers className="mr-1" /> Connections
          </Link>
          {/* Profile Image */}
          <Link to="/profile" className="flex items-center">
            <div className="w-12 h-12 rounded-full border-4 bg-black border-[#282828] shadow-lg flex items-center justify-center">
              <span className="text-sm font-semibold text-white">Pr.</span>
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col space-y-4 p-6 text-gray-700 font-medium">
          <Link
            to="/HomePage"
            className="flex items-center hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            <FaHome className="mr-2" /> Home
          </Link>
          <Link
            to="/communication"
            className="flex items-center hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            <FaComments className="mr-2" /> Communication
          </Link>
          <Link
            to="/Connections"
            className="flex items-center hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            <FaUsers className="mr-2" /> Connections
          </Link>
          {/* Profile */}
          <Link
            to="/profile"
            className="flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-10 h-10 rounded-full border-4 bg-black border-[#282828] shadow-lg flex items-center justify-center">
              <span className="text-xs font-semibold text-white">Pr.</span>
            </div>
            <span className="ml-2">Profile</span>
          </Link>
        </div>
      )}
      {/* ...existing code... */}
      <main className="container mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Find Your Connections</h2>
            <p className="text-gray-600">Connect with students, alumni, and faculty to build your professional network</p>
          </div>
          {/* Search and Filter Bar */}
          <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="relative w-full md:w-1/2 flex items-center">
              <span className="absolute left-3 text-gray-400">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M10 2a8 8 0 105.293 14.293l4.707 4.707a1 1 0 001.414-1.414l-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"/></svg>
              </span>
              <input
                type="text"
                placeholder="Search by name, technology, skills, domain, college..."
                className="pl-10 pr-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring focus:ring-blue-300 w-full transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative flex items-center">
              <div className="relative w-full">
                <select
                  className="pl-8 pr-10 py-2 border rounded-full shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-300 bg-white cursor-pointer w-full appearance-none"
                  style={{ borderRadius: '999px' }}
                  value={filterType}
                  onChange={e => setFilterType(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="student">Student</option>
                  <option value="alumni">Alumni</option>
                  <option value="faculty">Faculty</option>
                </select>
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
                </span>
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                </span>
              </div>
            </div>
          </div>
          {/* Profiles Grid */}
          {visible.length === 0 ? (
            <div className="text-center text-gray-500">No profiles found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((profile) => (
                <div
                  key={profile.id}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition-all flex flex-col justify-between h-[370px] border border-gray-200 overflow-hidden custom-scroll group"
                  style={{ minHeight: '370px', maxHeight: '400px', overflowY: 'auto', transform: 'translateY(0)', willChange: 'transform' }}
                >
                  <div>
                    {/* Avatar and Type */}
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
                        {profile.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${profile.type === 'student' ? 'bg-green-100 text-green-700' : profile.type === 'alumni' ? 'bg-purple-100 text-purple-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {profile.type === 'student' && (
                          <span className="inline-flex items-center gap-1">
                            <svg width="14" height="14" fill="currentColor" className="text-green-700" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg> Student
                          </span>
                        )}
                        {profile.type === 'alumni' && (
                          <span className="inline-flex items-center gap-1">
                            <svg width="14" height="14" fill="currentColor" className="text-purple-700" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg> Alumni
                          </span>
                        )}
                        {profile.type === 'faculty' && (
                          <span className="inline-flex items-center gap-1">
                            <svg width="14" height="14" fill="currentColor" className="text-yellow-700" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg> Faculty
                          </span>
                        )}
                      </span>
                    </div>
                    {/* Info */}
                    <div className="mb-2">
                      <h3 className="font-semibold text-lg text-gray-800">{profile.name}</h3>
                      <p className="text-sm text-gray-600">{profile.profession}</p>
                      <p className="text-sm text-blue-600 font-medium">{profile.domain}</p>
                      <p className="text-xs text-gray-500">🎓 {profile.college}</p>
                      <p className="text-xs text-gray-500">{profile.email}</p>
                    </div>
                    {/* Technologies/Skills */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {profile.skills.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{tech}</span>
                      ))}
                    </div>
                    {/* Social Icons */}
                    {/* Social icons will be placed beside View Profile below */}
                  </div>
                  {/* Actions */}
                  <div className="mt-auto flex gap-2 items-center justify-between">
                    <div className="flex flex-col gap-2 w-full">
                      <button
                        onClick={() => handleConnect(profile.id)}
                        disabled={connectedProfiles.has(profile.id)}
                        className={`w-full py-2 rounded-full text-sm font-semibold transition ${connectedProfiles.has(profile.id) ? "bg-gray-200 text-gray-700 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                      >
                        {connectedProfiles.has(profile.id) ? "Request Sent" : "Connect"}
                      </button>
                      <div className="flex items-center gap-2 w-full">
                        <button className="w-full py-2 px-3 border rounded-full text-sm hover:bg-gray-50 flex items-center gap-2 justify-center">
                          View Profile
                          <span className="flex items-center gap-1">
                            <a href={`https://linkedin.com/in/${profile.name.replace(/\s+/g, '').toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                              <svg width="18" height="18" fill="currentColor" className="text-blue-700 hover:text-blue-900" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                            </a>
                            <a href={`https://twitter.com/${profile.name.replace(/\s+/g, '').toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                              <svg width="18" height="18" fill="currentColor" className="text-blue-400 hover:text-blue-600" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.206-4.924 4.924 0 .386.044.762.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.483 0 1.713.872 3.229 2.197 4.117-.809-.026-1.57-.248-2.236-.616v.062c0 2.393 1.703 4.389 3.965 4.841-.415.113-.853.174-1.304.174-.319 0-.627-.031-.929-.089.627 1.956 2.444 3.377 4.6 3.417-1.685 1.32-3.808 2.107-6.102 2.107-.396 0-.787-.023-1.175-.069 2.179 1.397 4.768 2.215 7.557 2.215 9.054 0 14.009-7.504 14.009-14.009 0-.213-.005-.425-.014-.636.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                            </a>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
      <style>{`
        .group:hover {
          transform: translateY(-8px);
        }
      `}</style>
                </div>
              ))}
            </div>
          )}
          {/* Load More */}
          {visibleProfiles < filteredProfiles.length && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                className="px-6 py-2 border rounded-md hover:bg-gray-100"
              >
                Load More Profiles
              </button>
            </div>
          )}
        </div>
        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Your Network</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span>Total Connections</span><span className="font-semibold">247</span></li>
              <li className="flex justify-between"><span>Groups Joined</span><span className="font-semibold">12</span></li>
              <li className="flex justify-between"><span>Profile Views</span><span className="font-semibold">89</span></li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Actions</h3>
            <div className="flex flex-col gap-3">
              <button className="w-full py-2 border border-black rounded-full bg-transparent text-black font-semibold hover:bg-gray-100 transition">Find Alumni</button>
              <button className="w-full py-2 border border-black rounded-full bg-transparent text-black font-semibold hover:bg-gray-100 transition">Join Groups</button>
              <button className="w-full py-2 border border-black rounded-full bg-transparent text-black font-semibold hover:bg-gray-100 transition">Browse Mentors</button>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Trending Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Python', 'AWS', 'Web Development', 'Node.js', 'Data Science', 'Cybersecurity'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Connections;
