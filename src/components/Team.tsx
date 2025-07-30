import { Github, Linkedin, Mail, ExternalLink, Code, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Team = () => {
  const teamMembers = [
    {
      name: 'Deepansu',
      role: 'Founder',
      image: 'https://protoinfrastack.ivondy.com/media/mD04kvKDT6cPxePlQgackjPis435Vay1N9NB',
      bio: 'Visionary leader with 5+ years in full-stack development. Specializes in React, Node.js, and AI integration. Founded DNA Forge Hub to bridge the gap between academia and industry.',
      github: 'https://github.com/DeepanshuS1',
      linkedin: 'https://www.linkedin.com/in/deepansu-214a7b269',
      email: 'Deepanshu1484s@gmail.com',
      skills: ['HTML', 'CSS', 'JS', 'AI/ML', 'C'],
      achievements: ['Founder of DNA Society', 'Web Developer', 'Event Lead', 'Developer of DNA Forge Hub']
    },
    {
      name: 'Ayush Yadav',
      role: 'Co-Founder & Design Lead',
      image: 'https://protoinfrastack.ivondy.com/media/KIGUxx3DWzQvMumBjDRufbfrye58TtMs4aZf',
      bio: 'Creative mastermind behind intuitive user experiences. Skilled in accessibility-first design systems and modern frontend development. Committed to crafting digital products that empower and include every user.',
      github: 'https://github.com/ayushrewd',
      linkedin: 'https://www.linkedin.com/in/ayush-yadav-171161328',
      email: 'raoayush496@gmail.com',
      skills: ['UI/UX Design', 'Prompt Engineer', 'Design Expert', 'Content Creator'],
      achievements: ['Award-winning designer', 'Led design for 5+ projects', 'Co-Founder of DNA Society']
    },
    {
      name: 'Akshit Tiwari',
      role: 'Technical Lead & Community Manager',
      image: 'https://protoinfrastack.ivondy.com/media/p2Hh0x5oB8j1tofNGA6TydU4lsVJOZuuvWF3',
      bio: 'Cloud infrastructure specialist with expertise in scalable deployments. Passionate about automation, security, and performance optimization. Leads our technical architecture decisions.',
      github: 'https://github.com/AkshitTiwarii',
      linkedin: 'https://www.linkedin.com/in/akshit-tiwarii/',
      email: 'akshittiwari29@gmail.com',
      skills: ['Android', 'AI/ML', 'Kotlin', 'Java','C','Python'],
      achievements: ['Mentor & Contributor GSSoC 25', 'Contributor to OSconnect', 'Lead Developer for DNA Forge Hub']
    },
    {
      name: 'Rajan Jha',
      role: 'Mobile Development Specialist',
      image: 'https://protoinfrastack.ivondy.com/media/rbrduTcOIEatoaXF26WUFdTeSpr8CascZV9v',
      bio: 'Cross-platform mobile expert specializing in React Native and Flutter. Creates seamless mobile experiences with focus on performance and user engagement.',
      github: 'https://github.com/rajanjha',
      linkedin: 'https://linkedin.com/in/rajanjha',
      email: 'rajan@dnaforgehub.dev',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      achievements: ['10+ apps in production', '1M+ downloads', 'Google Play featured developer']
    },
  ];

  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The brilliant minds behind DNA Forge Hub. Each member brings unique expertise 
            and passion to our collective mission of innovation and community building.
          </p>
          
          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-card p-4 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-2xl font-bold text-green-400">6</span>
              </div>
              <p className="text-sm text-muted-foreground">Core Team Members</p>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Code className="h-6 w-6 text-cyan-400 mr-2" />
                <span className="text-2xl font-bold text-cyan-400">5+</span>
              </div>
              <p className="text-sm text-muted-foreground">Years Combined Experience</p>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-purple-400 mr-2" />
                <span className="text-2xl font-bold text-purple-400">10+</span>
              </div>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover-glow group cursor-pointer"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-full transition-opacity"></div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.skills?.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 border border-green-400/30 text-green-400 px-2 py-1 rounded-full text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Key Achievements</h4>
                  <div className="space-y-1">
                    {member.achievements?.slice(0, 2).map((achievement, idx) => (
                      <p key={idx} className="text-xs text-muted-foreground">• {achievement}</p>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-green-400 hover:text-black transition-colors"
                    asChild
                  >
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-blue-400 hover:text-black transition-colors"
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-purple-400 hover:text-black transition-colors"
                    asChild
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals who share our passion 
              for innovation and community building.
            </p>
            <Button className="btn-primary" asChild>
              <a href="https://chat.whatsapp.com/K2juuB2pTby8nXiCRXXRjQ" target="_blank" rel="noopener noreferrer">
                Get In Touch
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;