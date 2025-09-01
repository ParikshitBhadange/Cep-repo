// import { useState } from "react";
// import { Search, Filter, Users, Building, GraduationCap, LinkedinIcon, TwitterIcon, Mail } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// // Mock data for profiles
// const mockProfiles = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     profession: "Software Engineer at Google",
//     email: "sarah.j@email.com",
//     type: "alumni",
//     skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
//     domain: "Full Stack Developer",
//     college: "MIT",
//     avatar: null,
//     connections: 500
//   },
//   {
//     id: 2,
//     name: "Dr. Michael Chen",
//     profession: "Computer Science Professor",
//     email: "m.chen@university.edu",
//     type: "faculty",
//     skills: ["Machine Learning", "Python", "TensorFlow", "Research", "AI"],
//     domain: "AI/ML Researcher",
//     college: "Stanford University",
//     avatar: null,
//     connections: 300
//   },
//   {
//     id: 3,
//     name: "Emma Rodriguez",
//     profession: "Final Year CS Student",
//     email: "emma.r@student.edu",
//     type: "student",
//     skills: ["JavaScript", "React", "CSS", "Figma", "UI/UX"],
//     domain: "Frontend Developer",
//     college: "UC Berkeley",
//     avatar: null,
//     connections: 150
//   },
//   {
//     id: 4,
//     name: "James Wilson",
//     profession: "Product Manager at Microsoft",
//     email: "j.wilson@email.com",
//     type: "alumni",
//     skills: ["Product Strategy", "Agile", "Analytics", "Leadership"],
//     domain: "Product Management",
//     college: "Harvard University",
//     avatar: null,
//     connections: 800
//   },
//   {
//     id: 5,
//     name: "Dr. Lisa Zhang",
//     profession: "Data Science Faculty",
//     email: "l.zhang@university.edu",
//     type: "faculty",
//     skills: ["Python", "R", "Statistics", "Pandas", "SQL"],
//     domain: "Data Scientist",
//     college: "Carnegie Mellon",
//     avatar: null,
//     connections: 450
//   },
//   {
//     id: 6,
//     name: "Alex Kumar",
//     profession: "Mobile App Developer at Uber",
//     email: "alex.k@email.com",
//     type: "alumni",
//     skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
//     domain: "Mobile App Developer",
//     college: "IIT Delhi",
//     avatar: null,
//     connections: 650
//   },
//   {
//     id: 7,
//     name: "Priya Sharma",
//     profession: "MERN Stack Developer",
//     email: "priya.s@email.com",
//     type: "student",
//     skills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
//     domain: "MERN Stack Developer",
//     college: "NIT Trichy",
//     avatar: null,
//     connections: 320
//   },
//   {
//     id: 8,
//     name: "David Kim",
//     profession: "DevOps Engineer at Netflix",
//     email: "david.k@email.com",
//     type: "alumni",
//     skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform"],
//     domain: "DevOps Engineer",
//     college: "Georgia Tech",
//     avatar: null,
//     connections: 540
//   },
//   {
//     id: 9,
//     name: "Maria Garcia",
//     profession: "Cybersecurity Analyst",
//     email: "maria.g@email.com",
//     type: "alumni",
//     skills: ["Ethical Hacking", "Network Security", "Python", "Linux"],
//     domain: "Cybersecurity",
//     college: "UT Austin",
//     avatar: null,
//     connections: 420
//   },
//   // Add more mock profiles to demonstrate load more functionality
//   ...Array.from({ length: 25 }, (_, i) => ({
//     id: i + 10,
//     name: `User ${i + 10}`,
//     profession: `${i % 2 === 0 ? 'Engineer' : 'Designer'} at Tech Corp`,
//     email: `user${i + 10}@email.com`,
//     type: i % 3 === 0 ? 'student' : i % 3 === 1 ? 'alumni' : 'faculty',
//     skills: ["JavaScript", "Python", "Java", "React", "Angular"],
//     domain: i % 4 === 0 ? 'Web Developer' : i % 4 === 1 ? 'App Developer' : i % 4 === 2 ? 'Data Scientist' : 'Software Engineer',
//     college: i % 5 === 0 ? 'IIT Bombay' : i % 5 === 1 ? 'BITS Pilani' : i % 5 === 2 ? 'Delhi University' : i % 5 === 3 ? 'Anna University' : 'VIT Vellore',
//     avatar: null,
//     connections: Math.floor(Math.random() * 1000)
//   }))
// ];

// const Connections = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterType, setFilterType] = useState("all");
//   const [visibleProfiles, setVisibleProfiles] = useState(9);
//   const [connectedProfiles, setConnectedProfiles] = useState(new Set());

//   // Filter profiles based on search and type
//   const filteredProfiles = mockProfiles.filter(profile => {
//     const matchesSearch = 
//       profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       profile.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       profile.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
//       profile.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       profile.domain.toLowerCase().includes(searchQuery.toLowerCase());
    
//     const matchesType = filterType === "all" || profile.type === filterType;
    
//     return matchesSearch && matchesType;
//   }).slice(0, visibleProfiles);

//   const loadMore = () => {
//     setVisibleProfiles(prev => Math.min(prev + 9, mockProfiles.length));
//   };

//   const handleConnect = (profileId) => {
//     setConnectedProfiles(prev => new Set([...prev, profileId]));
//   };

//   const getTypeIcon = (type) => {
//     switch (type) {
//       case 'student': return <GraduationCap className="h-4 w-4 text-blue-500" />;
//       case 'faculty': return <Building className="h-4 w-4 text-green-500" />;
//       case 'alumni': return <Users className="h-4 w-4 text-purple-500" />;
//       default: return <Users className="h-4 w-4" />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="sticky top-0 z-10 bg-background border-b border-border">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="text-2xl font-bold text-primary">Career Catalyst</div>
//             <div className="flex items-center space-x-4">
//               <Avatar className="h-10 w-10">
//                 <AvatarImage src="/placeholder-avatar.jpg" />
//                 <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
//               </Avatar>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="container mx-auto px-4 py-8">
//         <div className="flex gap-8">
//           {/* Main Content */}
//           <div className="flex-1 max-w-4xl">
//             {/* Page Title */}
//             <div className="text-center mb-8">
//               <h1 className="text-4xl font-bold mb-2 text-primary">
//                 Find Your Connections
//               </h1>
//               <p className="text-muted-foreground text-lg">
//                 Connect with students, alumni, and faculty to build your professional network
//               </p>
//             </div>

//             {/* Search Bar */}
//             <Card className="mb-8 shadow-lg">
//               <CardContent className="p-6">
//                 <div className="flex flex-col md:flex-row gap-4">
//                   <div className="relative flex-1">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
//                     <Input
//                       placeholder="Search by name, technology, skills, domain, college..."
//                       className="pl-10"
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                   </div>
//                   <Select value={filterType} onValueChange={setFilterType}>
//                     <SelectTrigger className="w-full md:w-48">
//                       <Filter className="h-4 w-4 mr-2" />
//                       <SelectValue placeholder="Filter by type" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="all">All</SelectItem>
//                       <SelectItem value="student">Students</SelectItem>
//                       <SelectItem value="alumni">Alumni</SelectItem>
//                       <SelectItem value="faculty">Faculty</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Recommendations Section */}
//             <div className="mb-6">
//               <h2 className="text-2xl font-semibold mb-6 text-foreground">
//                 Recommended Connections
//               </h2>

//               {filteredProfiles.length === 0 ? (
//                 <div className="text-center py-16">
//                   <div className="text-6xl mb-4">😕</div>
//                   <h3 className="text-xl font-semibold mb-2">Oops! No one here</h3>
//                   <p className="text-muted-foreground">Try adjusting your search or filters</p>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
//                   {filteredProfiles.map((profile) => (
//                     <Card key={profile.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-card">
//                       <CardContent className="p-4">
//                         <div className="text-center mb-4">
//                           <Avatar className="h-16 w-16 mx-auto mb-3">
//                             <AvatarImage src={profile.avatar || undefined} />
//                             <AvatarFallback className="bg-primary text-primary-foreground text-lg">
//                               {profile.name.split(' ').map(n => n[0]).join('')}
//                             </AvatarFallback>
//                           </Avatar>
//                           <div className="flex items-center justify-center gap-1 mb-2">
//                             {getTypeIcon(profile.type)}
//                             <span className="text-xs text-muted-foreground capitalize">{profile.type}</span>
//                           </div>
//                         </div>

//                         <div className="space-y-2 mb-4">
//                           <h3 className="font-semibold text-sm truncate" title={profile.name}>
//                             {profile.name}
//                           </h3>
//                           <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2" title={profile.profession}>
//                             {profile.profession}
//                           </p>
//                           <p className="text-xs font-medium text-primary truncate" title={profile.domain}>
//                             {profile.domain}
//                           </p>
//                           <p className="text-xs text-muted-foreground truncate" title={profile.college}>
//                             🎓 {profile.college}
//                           </p>
//                           <div className="flex items-center text-xs text-muted-foreground">
//                             <Mail className="h-3 w-3 mr-1" />
//                             <span className="truncate">{profile.email}</span>
//                           </div>
//                           <div className="flex flex-wrap gap-1 mt-2">
//                             {profile.skills.slice(0, 3).map((skill) => (
//                               <span
//                                 key={skill}
//                                 className="px-2 py-1 bg-secondary/20 text-foreground text-xs rounded-full"
//                               >
//                                 {skill}
//                               </span>
//                             ))}
//                             {profile.skills.length > 3 && (
//                               <span className="text-xs text-muted-foreground">+{profile.skills.length - 3}</span>
//                             )}
//                           </div>
//                         </div>

//                         <div className="space-y-2">
//                           <Button 
//                             className={`w-full h-8 text-xs ${connectedProfiles.has(profile.id) ? 'bg-gray-200 text-black hover:bg-gray-200' : ''}`}
//                             size="sm"
//                             onClick={() => handleConnect(profile.id)}
//                             disabled={connectedProfiles.has(profile.id)}
//                           >
//                             {connectedProfiles.has(profile.id) ? 'Request Sent' : 'Connect'}
//                           </Button>
//                           <div className="flex gap-1">
//                             <Button variant="outline" size="sm" className="flex-1 h-7 text-xs">
//                               View Profile
//                             </Button>
//                             <Button variant="outline" size="sm" className="h-7 w-7 p-0">
//                               <LinkedinIcon className="h-3 w-3" />
//                             </Button>
//                             <Button variant="outline" size="sm" className="h-7 w-7 p-0">
//                               <TwitterIcon className="h-3 w-3" />
//                             </Button>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               )}

//               {/* Load More Button */}
//               {filteredProfiles.length > 0 && visibleProfiles < mockProfiles.length && (
//                 <div className="text-center">
//                   <Button onClick={loadMore} variant="outline" className="px-8">
//                     Load More Profiles
//                   </Button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="hidden lg:block w-80 space-y-6">
//             {/* User Stats */}
//             <Card className="shadow-lg">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold mb-4 text-foreground">Your Network</h3>
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <Users className="h-4 w-4 mr-2 text-primary" />
//                       <span className="text-sm">Total Connections</span>
//                     </div>
//                     <span className="font-semibold text-primary">247</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <Building className="h-4 w-4 mr-2 text-primary" />
//                       <span className="text-sm">Groups Joined</span>
//                     </div>
//                     <span className="font-semibold text-primary">12</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <GraduationCap className="h-4 w-4 mr-2 text-primary" />
//                       <span className="text-sm">Profile Views</span>
//                     </div>
//                     <span className="font-semibold text-primary">89</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Quick Actions */}
//             <Card className="shadow-lg">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold mb-4 text-foreground">Quick Actions</h3>
//                 <div className="space-y-3">
//                   <Button variant="outline" className="w-full justify-start">
//                     <Users className="h-4 w-4 mr-2" />
//                     Find Alumni
//                   </Button>
//                   <Button variant="outline" className="w-full justify-start">
//                     <Building className="h-4 w-4 mr-2" />
//                     Join Groups
//                   </Button>
//                   <Button variant="outline" className="w-full justify-start">
//                     <GraduationCap className="h-4 w-4 mr-2" />
//                     Browse Mentors
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Trending Skills */}
//             <Card className="shadow-lg">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold mb-4 text-foreground">Trending Skills</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {["React", "Python", "AI/ML", "MERN Stack", "Mobile Development", "DevOps", "Data Science", "Cybersecurity"].map((skill) => (
//                     <span
//                       key={skill}
//                       className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full cursor-pointer hover:bg-primary/20 transition-colors"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Connections;