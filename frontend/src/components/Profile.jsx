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

import {
  MapPin,
  Calendar,
  Users,
  Eye,
  Edit3,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Linkedin,
  Globe,
  X,
  Plus,
  Trash2,
  Camera,
  Save,
} from "lucide-react";

const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  onClick,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    ghost: "hover:bg-gray-100 text-gray-700",
  };
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 text-sm",
    xs: "h-8 px-2 text-xs",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border bg-white shadow-sm ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "bg-gray-900 text-gray-50",
    secondary: "bg-gray-100 text-gray-900",
  };

  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

const Input = ({ className = "", ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

const Label = ({ children, className = "", ...props }) => (
  <label
    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    {...props}
  >
    {children}
  </label>
);

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between bg-white shadow-md px-6 h-20">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <img
            src={Logo}
            alt="Career Catalyst Logo"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <span className="text-lg sm:text-xl font-bold text-gray-800">
            Career Catalyst
          </span>
        </div>
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-1/2 sm:w-1/3">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-gray-700 text-sm"
          />
        </div>
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link
            to="/HomePage"
            className="flex items-center hover:text-blue-600"
          >
            <FaHome className="mr-1" /> Home
          </Link>
          <Link
            to="/communication"
            className="flex items-center hover:text-blue-600"
          >
            <FaComments className="mr-1" /> Communication
          </Link>
          <Link
            to="/Connections"
            className="flex items-center hover:text-blue-600"
          >
            <FaUsers className="mr-1" /> Connections
          </Link>
          <Link to="/profile" className="flex items-center">
            <div className="w-12 h-12 rounded-full border-4 bg-black border-[#282828] shadow-lg flex items-center justify-center">
              <span className="text-sm font-semibold text-white">Pr.</span>
            </div>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>
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
    </>
  );
}

export default function AlumniProfile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "Dr. Amit Sharma ",
    title: "Assistant Professor & Research Scientist",
    company: "Pote College of Engineering",
    location: "Amravati, Maharashtra, India",
    graduationYear: "2015",
    major: "Electronics & Information Technology",
    profileImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    connections: 847,
    profileViews: 289,
    userType: ["Alumni", "Faculty", "Researcher"],
    about:
      "Passionate educator and researcher with over 10 years of experience in Electronics and Information Technology. Dedicated to fostering innovation in engineering education and contributing to cutting-edge research in embedded systems and IoT applications. Committed to mentoring the next generation of engineers and promoting technological advancement in academia.",
    experience: [
      {
        id: 1,
        title: "Assistant Professor",
        company: "Pote College of Engineering",
        duration: "2018 - Present",
        description:
          "Leading undergraduate and postgraduate courses in Electronics Engineering. Supervising research projects in IoT and embedded systems. Published 15+ research papers in international journals.",
      },
      {
        id: 2,
        title: "Research Associate",
        company: "Government College of Engineering, Amravati",
        duration: "2015 - 2018",
        description:
          "Conducted research in wireless communication systems. Collaborated on industry-sponsored projects. Mentored undergraduate students in final year projects.",
      },
    ],
    education: [
      {
        id: 1,
        degree: "Ph.D. in Electronics Engineering",
        institution: "Government College of Engineering, Amravati",
        year: "2018",
        gpa: "9.2/10",
        activities: "Research in Wireless Sensor Networks, IEEE Student Member",
      },
      {
        id: 2,
        degree: "M.Tech in Electronics & Telecommunication",
        institution: "Government College of Engineering, Amravati",
        year: "2015",
        gpa: "8.8/10",
        activities: "Department Topper, Technical Society President",
      },
    ],
    skills: [
      "Research & Development",
      "Academic Leadership",
      "Electronics Design",
      "IoT Systems",
      "Embedded Programming",
      "MATLAB/Simulink",
      "Python",
      "Circuit Design",
    ],
    achievements: [
      "Best Faculty Award 2023 - Pote College of Engineering",
      "Published 18 research papers in SCI indexed journals",
      "Principal Investigator for 3 funded research projects worth ₹25 Lakhs",
      "IEEE Senior Member since 2020",
    ],
    contact: {
      email: "pooja.umekar@pote.edu.in",
      phone: "+91-9876543210",
      linkedin: "linkedin.com/in/pooja-umekar",
      website: "www.poojaumekar-research.com",
    },
  });

  const [activeTab, setActiveTab] = useState("about");
  const [isEditing, setIsEditing] = useState(false);
  const [editSection, setEditSection] = useState("basic");
  const [editForm, setEditForm] = useState(profile);
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    duration: "",
    description: "",
  });
  const [newEducation, setNewEducation] = useState({
    degree: "",
    institution: "",
    year: "",
    gpa: "",
    activities: "",
  });
  const [newSkill, setNewSkill] = useState("");
  const [newAchievement, setNewAchievement] = useState("");

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
    setEditSection("basic");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditForm({ ...editForm, profileImage: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const addExperience = () => {
    if (newExperience.title && newExperience.company) {
      setEditForm({
        ...editForm,
        experience: [...editForm.experience, { ...newExperience, id: Date.now() }],
      });
      setNewExperience({ title: "", company: "", duration: "", description: "" });
    }
  };

  const removeExperience = (id) => {
    setEditForm({
      ...editForm,
      experience: editForm.experience.filter((exp) => exp.id !== id),
    });
  };

  const addEducation = () => {
    if (newEducation.degree && newEducation.institution) {
      setEditForm({
        ...editForm,
        education: [...editForm.education, { ...newEducation, id: Date.now() }],
      });
      setNewEducation({ degree: "", institution: "", year: "", gpa: "", activities: "" });
    }
  };

  const removeEducation = (id) => {
    setEditForm({
      ...editForm,
      education: editForm.education.filter((edu) => edu.id !== id),
    });
  };

  const addSkill = () => {
    if (newSkill.trim() && !editForm.skills.includes(newSkill.trim())) {
      setEditForm({
        ...editForm,
        skills: [...editForm.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setEditForm({
      ...editForm,
      skills: editForm.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const addAchievement = () => {
    if (newAchievement.trim()) {
      setEditForm({
        ...editForm,
        achievements: [...editForm.achievements, newAchievement.trim()],
      });
      setNewAchievement("");
    }
  };

  const removeAchievement = (achievementToRemove) => {
    setEditForm({
      ...editForm,
      achievements: editForm.achievements.filter(
        (achievement) => achievement !== achievementToRemove
      ),
    });
  };

  const toggleUserType = (type) => {
    const currentTypes = editForm.userType || [];
    if (currentTypes.includes(type)) {
      setEditForm({
        ...editForm,
        userType: currentTypes.filter((t) => t !== type),
      });
    } else {
      setEditForm({
        ...editForm,
        userType: [...currentTypes, type],
      });
    }
  };

  return (
    <>
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
          <Link
            to="/HomePage"
            className="flex items-center hover:text-blue-600"
          >
            <FaHome className="mr-1" /> Home
          </Link>
          <Link
            to="/communication"
            className="flex items-center hover:text-blue-600"
          >
            <FaComments className="mr-1" /> Communication
          </Link>
          <Link
            to="/Connections"
            className="flex items-center hover:text-blue-600"
          >
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

      {/* Profile Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {profile.name}
                </h1>
                <p className="text-xl text-gray-700 font-medium">
                  {profile.title}
                </p>
                <p className="text-lg text-blue-600 font-medium">
                  {profile.company}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>Class of {profile.graduationYear}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  <span>{profile.major}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span className="font-medium text-blue-600 cursor-pointer hover:underline">
                    {profile.connections} connections
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{profile.profileViews} profile views</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {(profile.userType || []).map((type, index) => {
                  const colors = {
                    Alumni: "bg-blue-100 text-blue-800",
                    Faculty: "bg-green-100 text-green-800",
                    Researcher: "bg-purple-100 text-purple-800",
                    Student: "bg-orange-100 text-orange-800",
                  };
                  return (
                    <Badge
                      key={index}
                      className={
                        colors[type] || "bg-gray-100 text-gray-800"
                      }
                    >
                      {type}
                    </Badge>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50"
                onClick={() => setIsEditing(true)}
              >
                <Edit3 className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="bg-white">
                  <Mail className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="bg-white">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="bg-white">
                  <Globe className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Right Side Edit Dialog */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black bg-opacity-30" />
          <div className="ml-auto w-full max-w-md bg-white h-full shadow-xl overflow-y-auto relative z-10">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Edit Profile</h2>
                <button
                  onClick={() => setIsEditing(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Edit Navigation */}
              <div className="space-y-2 mb-6">
                {[
                  { key: "basic", label: "Basic Info", icon: Edit3 },
                  { key: "about", label: "About", icon: Users },
                  { key: "experience", label: "Experience", icon: Briefcase },
                  { key: "education", label: "Education", icon: GraduationCap },
                  { key: "skills", label: "Skills", icon: Award },
                  { key: "achievements", label: "Achievements", icon: Award },
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setEditSection(key)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      editSection === key
                        ? "bg-blue-100 text-blue-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Edit Content */}
              <div className="space-y-4">
                {editSection === "basic" && (
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">Basic Information</h3>

                    {/* Profile Image */}
                    <div>
                      <Label>Profile Image</Label>
                      <div className="mt-2 flex items-center gap-4">
                        <img
                          src={editForm.profileImage}
                          alt="Profile"
                          className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                        />
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            id="image-upload"
                          />
                          <label htmlFor="image-upload">
                            <Button
                              variant="outline"
                              size="sm"
                              className="cursor-pointer"
                            >
                              <Camera className="w-4 h-4 mr-2" />
                              Change Photo
                            </Button>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label>Full Name</Label>
                      <Input
                        value={editForm.name}
                        onChange={(e) =>
                          setEditForm({ ...editForm, name: e.target.value })
                        }
                        placeholder="Enter full name"
                      />
                    </div>

                    <div>
                      <Label>Professional Title</Label>
                      <Input
                        value={editForm.title}
                        onChange={(e) =>
                          setEditForm({ ...editForm, title: e.target.value })
                        }
                        placeholder="Enter professional title"
                      />
                    </div>

                    <div>
                      <Label>Company/Institution</Label>
                      <Input
                        value={editForm.company}
                        onChange={(e) =>
                          setEditForm({ ...editForm, company: e.target.value })
                        }
                        placeholder="Enter company or institution"
                      />
                    </div>

                    <div>
                      <Label>Location</Label>
                      <Input
                        value={editForm.location}
                        onChange={(e) =>
                          setEditForm({ ...editForm, location: e.target.value })
                        }
                        placeholder="Enter location"
                      />
                    </div>

                    <div>
                      <Label>Graduation Year</Label>
                      <Input
                        value={editForm.graduationYear}
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            graduationYear: e.target.value,
                          })
                        }
                        placeholder="Enter graduation year"
                      />
                    </div>

                    <div>
                      <Label>Major/Field of Study</Label>
                      <Input
                        value={editForm.major}
                        onChange={(e) =>
                          setEditForm({ ...editForm, major: e.target.value })
                        }
                        placeholder="Enter major or field of study"
                      />
                    </div>

                    <div>
                      <Label>User Types</Label>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {["Alumni", "Faculty", "Student", "Researcher"].map((type) => (
                          <button
                            key={type}
                            onClick={() => toggleUserType(type)}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                              (editForm.userType || []).includes(type)
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {editSection === "about" && (
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">About Section</h3>
                    <div>
                      <Label>About Description</Label>
                      <Textarea
                        value={editForm.about}
                        onChange={(e) =>
                          setEditForm({ ...editForm, about: e.target.value })
                        }
                        rows={6}
                        placeholder="Write about yourself..."
                      />
                    </div>
                  </div>
                )}

                {editSection === "experience" && (
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">Experience</h3>

                    {/* Existing Experience */}
                    {editForm.experience.map((exp, index) => (
                      <div key={exp.id} className="p-4 border rounded-lg space-y-3">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-sm">Experience {index + 1}</h4>
                          <Button
                            size="xs"
                            variant="destructive"
                            onClick={() => removeExperience(exp.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                        <Input
                          placeholder="Job Title"
                          value={exp.title}
                          onChange={(e) => {
                            const updated = editForm.experience.map((item) =>
                              item.id === exp.id ? { ...item, title: e.target.value } : item
                            );
                            setEditForm({ ...editForm, experience: updated });
                          }}
                        />
                        <Input
                          placeholder="Company"
                          value={exp.company}
                          onChange={(e) => {
                            const updated = editForm.experience.map((item) =>
                              item.id === exp.id ? { ...item, company: e.target.value } : item
                            );
                            setEditForm({ ...editForm, experience: updated });
                          }}
                        />
                        <Input
                          placeholder="Duration (e.g., 2020 - Present)"
                          value={exp.duration}
                          onChange={(e) => {
                            const updated = editForm.experience.map((item) =>
                              item.id === exp.id ? { ...item, duration: e.target.value } : item
                            );
                            setEditForm({ ...editForm, experience: updated });
                          }}
                        />
                        <Textarea
                          placeholder="Description"
                          value={exp.description}
                          onChange={(e) => {
                            const updated = editForm.experience.map((item) =>
                              item.id === exp.id ? { ...item, description: e.target.value } : item
                            );
                            setEditForm({ ...editForm, experience: updated });
                          }}
                          rows={3}
                        />
                      </div>
                    ))}

                    {/* Add New Experience */}
                    <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg space-y-3">
                      <h4 className="font-medium text-sm text-gray-600">
                        Add New Experience
                      </h4>
                      <Input
                        placeholder="Job Title"
                        value={newExperience.title}
                        onChange={(e) =>
                          setNewExperience({ ...newExperience, title: e.target.value })
                        }
                      />
                      <Input
                        placeholder="Company"
                        value={newExperience.company}
                        onChange={(e) =>
                          setNewExperience({ ...newExperience, company: e.target.value })
                        }
                      />
                      <Input
                        placeholder="Duration (e.g., 2020 - Present)"
                        value={newExperience.duration}
                        onChange={(e) =>
                          setNewExperience({ ...newExperience, duration: e.target.value })
                        }
                      />
                      <Textarea
                        placeholder="Description"
                        value={newExperience.description}
                        onChange={(e) =>
                          setNewExperience({ ...newExperience, description: e.target.value })
                        }
                        rows={3}
                      />
                      <Button size="sm" onClick={addExperience} className="w-full">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Experience
                      </Button>
                    </div>
                  </div>
                )}

                {editSection === "education" && (
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">Education</h3>

                    {/* Existing Education */}
                    {editForm.education.map((edu, index) => (
                      <div key={edu.id} className="p-4 border rounded-lg space-y-3">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-sm">Education {index + 1}</h4>
                          <Button
                            size="xs"
                            variant="destructive"
                            onClick={() => removeEducation(edu.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                        <Input
                          placeholder="Degree"
                          value={edu.degree}
                          onChange={(e) => {
                            const updated = editForm.education.map((item) =>
                              item.id === edu.id ? { ...item, degree: e.target.value } : item
                            );
                            setEditForm({ ...editForm, education: updated });
                          }}
                        />
                        <Input
                          placeholder="Institution"
                          value={edu.institution}
                          onChange={(e) => {
                            const updated = editForm.education.map((item) =>
                              item.id === edu.id ? { ...item, institution: e.target.value } : item
                            );
                            setEditForm({ ...editForm, education: updated });
                          }}
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            placeholder="Year"
                            value={edu.year}
                            onChange={(e) => {
                              const updated = editForm.education.map((item) =>
                                item.id === edu.id ? { ...item, year: e.target.value } : item
                              );
                              setEditForm({ ...editForm, education: updated });
                            }}
                          />
                          <Input
                            placeholder="GPA (optional)"
                            value={edu.gpa || ""}
                            onChange={(e) => {
                              const updated = editForm.education.map((item) =>
                                item.id === edu.id ? { ...item, gpa: e.target.value } : item
                              );
                              setEditForm({ ...editForm, education: updated });
                            }}
                          />
                        </div>
                        <Input
                          placeholder="Activities (optional)"
                          value={edu.activities || ""}
                          onChange={(e) => {
                            const updated = editForm.education.map((item) =>
                              item.id === edu.id ? { ...item, activities: e.target.value } : item
                            );
                            setEditForm({ ...editForm, education: updated });
                          }}
                        />
                      </div>
                    ))}

                    {/* Add New Education */}
                    <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg space-y-3">
                      <h4 className="font-medium text-sm text-gray-600">
                        Add New Education
                      </h4>
                      <Input
                        placeholder="Degree"
                        value={newEducation.degree}
                        onChange={(e) =>
                          setNewEducation({ ...newEducation, degree: e.target.value })
                        }
                      />
                      <Input
                        placeholder="Institution"
                        value={newEducation.institution}
                        onChange={(e) =>
                          setNewEducation({ ...newEducation, institution: e.target.value })
                        }
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          placeholder="Year"
                          value={newEducation.year}
                          onChange={(e) =>
                            setNewEducation({ ...newEducation, year: e.target.value })
                          }
                        />
                        <Input
                          placeholder="GPA"
                          value={newEducation.gpa}
                          onChange={(e) =>
                            setNewEducation({ ...newEducation, gpa: e.target.value })
                          }
                        />
                      </div>
                      <Input
                        placeholder="Activities"
                        value={newEducation.activities}
                        onChange={(e) =>
                          setNewEducation({ ...newEducation, activities: e.target.value })
                        }
                      />
                      <Button size="sm" onClick={addEducation} className="w-full">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Education
                      </Button>
                    </div>
                  </div>
                )}

                {editSection === "skills" && (
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">Skills</h3>

                    {/* Existing Skills */}
                    <div className="flex flex-wrap gap-2">
                      {editForm.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                        >
                          <span>{skill}</span>
                          <button
                            onClick={() => removeSkill(skill)}
                            className="hover:bg-blue-200 rounded-full p-0.5"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Add New Skill */}
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add new skill"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && addSkill()}
                      />
                      <Button size="sm" onClick={addSkill}>
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {editSection === "achievements" && (
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">Achievements</h3>

                    {/* Existing Achievements */}
                    {editForm.achievements.map((achievement, index) => (
                      <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex justify-between items-start gap-2">
                          <p className="text-sm text-gray-800 flex-1">{achievement}</p>
                          <button
                            onClick={() => removeAchievement(achievement)}
                            className="hover:bg-yellow-200 rounded-full p-1"
                          >
                            <Trash2 className="w-3 h-3 text-red-600" />
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* Add New Achievement */}
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Add new achievement"
                        value={newAchievement}
                        onChange={(e) => setNewAchievement(e.target.value)}
                        rows={2}
                      />
                      <Button size="sm" onClick={addAchievement} className="w-full">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Achievement
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Save Button */}
              <div className="mt-8 pt-4 border-t">
                <Button onClick={handleSave} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Save All Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs Section */}
      <Card className="bg-white border-gray-200">
        <div className="p-6 pb-0">
          <div className="grid w-full grid-cols-5 bg-gray-50 rounded-md p-1">
            {["about", "experience", "education", "skills", "achievements"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-colors capitalize ${
                  activeTab === tab ? "bg-white shadow-sm" : "hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 pt-6">
          {activeTab === "about" && (
            <div className="space-y-4">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{profile.about}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact Information
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Email:</strong> {profile.contact.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {profile.contact.phone}
                    </p>
                    <p>
                      <strong>LinkedIn:</strong> {profile.contact.linkedin}
                    </p>
                    {profile.contact.website && (
                      <p>
                        <strong>Website:</strong> {profile.contact.website}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    Alumni Details
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Graduation Year:</strong> {profile.graduationYear}
                    </p>
                    <p>
                      <strong>Major:</strong> {profile.major}
                    </p>
                    <p>
                      <strong>Current Role:</strong> {profile.title}
                    </p>
                    <p>
                      <strong>Industry:</strong> Education & Research
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-6">
              {profile.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-200 pl-6 pb-6 relative">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-2 top-0"></div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </p>
                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-6">
              {profile.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-green-200 pl-6 pb-6 relative">
                  <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-2 top-0"></div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-gray-900">{edu.degree}</h3>
                    <p className="text-green-600 font-medium">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </span>
                      {edu.gpa && (
                        <span className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>
                    {edu.activities && (
                      <p className="text-gray-700 text-sm">
                        <strong>Activities:</strong> {edu.activities}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <Badge key={index} className="bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="space-y-4">
              {profile.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200"
                >
                  <Award className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800">{achievement}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
      </>
  );
}