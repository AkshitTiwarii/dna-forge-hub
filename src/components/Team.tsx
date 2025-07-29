import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Founder & Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Full-stack developer passionate about React, Node.js, and AI integration.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'alex@dnasociety.dev'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Design systems expert creating beautiful and accessible user experiences.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'sarah@dnasociety.dev'
    },
    {
      name: 'Marcus Johnson',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Cloud infrastructure specialist focused on scalable and secure deployments.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'marcus@dnasociety.dev'
    },
    {
      name: 'Emily Zhang',
      role: 'Mobile Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'React Native and Flutter expert building cross-platform mobile solutions.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'emily@dnasociety.dev'
    },
    {
      name: 'David Kumar',
      role: 'Backend Architect',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      bio: 'Microservices and database optimization specialist with 8+ years experience.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'david@dnasociety.dev'
    },
    {
      name: 'Lisa Thompson',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      bio: 'Building connections and fostering growth within our developer community.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'lisa@dnasociety.dev'
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The brilliant minds behind DNA Society. Each member brings unique expertise 
            and passion to our collective mission of innovation.
          </p>
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
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground transition-colors"
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
              <a href="#contact">
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