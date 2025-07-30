import { Plus, Code, Zap, Rocket, Star, Github, ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'DNA Forge Hub',
      description: 'Modern developer community platform built with React, TypeScript, and Tailwind CSS. Features event management, certificate downloads, and team profiles.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop&crop=center',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/AkshitTiwarii/dna-forge-hub',
      demo: 'https://dnaforgehub.dev',
      status: 'Production',
      stars: 47
    },
    {
      title: 'DevTools Dashboard',
      description: 'Comprehensive developer productivity dashboard with code analytics, project management, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/dnaforgehub/devtools-dashboard',
      demo: 'https://devtools.dnaforgehub.dev',
      status: 'Beta',
      stars: 23
    },
    {
      title: 'Code Mentor AI',
      description: 'AI-powered code review and mentoring tool that provides intelligent suggestions and best practices for developers.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center',
      tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
      github: 'https://github.com/dnaforgehub/code-mentor-ai',
      demo: 'https://codementor.dnaforgehub.dev',
      status: 'Development',
      stars: 89
    },
    {
      title: 'Event Manager Pro',
      description: 'Complete event management solution with registration, certificate generation, and analytics for tech events and workshops.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop&crop=center',
      tech: ['Vue.js', 'Express.js', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/dnaforgehub/event-manager-pro',
      demo: 'https://events.dnaforgehub.dev',
      status: 'Production',
      stars: 156
    },
    {
      title: 'Open Source Starter Kit',
      description: 'Comprehensive template for starting open source projects with CI/CD, documentation, and community guidelines.',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&h=400&fit=crop&crop=center',
      tech: ['GitHub Actions', 'Documentation', 'Templates'],
      github: 'https://github.com/dnaforgehub/oss-starter-kit',
      demo: 'https://oss.dnaforgehub.dev',
      status: 'Production',
      stars: 203
    },
    {
      title: 'Mobile Learning App',
      description: 'Cross-platform mobile app for coding tutorials and interactive programming challenges with offline support.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center',
      tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
      github: 'https://github.com/dnaforgehub/mobile-learning-app',
      demo: 'https://play.google.com/store/apps/details?id=dev.dnaforgehub.learn',
      status: 'Production',
      stars: 67
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Innovative solutions and open-source contributions that drive 
            the future of technology. Explore our work and contribute to the community.
          </p>
          
          {/* GitHub Stats */}
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4 text-green-400" />
              <span>50+ Repositories</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>500+ Stars</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-cyan-400" />
              <span>100+ Contributors</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover-glow group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase ${
                    project.status === 'Production' ? 'bg-green-400 text-black' :
                    project.status === 'Beta' ? 'bg-yellow-400 text-black' :
                    'bg-purple-400 text-black'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Stars */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                    <Star className="h-3 w-3 text-yellow-400 mr-1" />
                    {project.stars}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 border border-cyan-400/30 text-cyan-400 px-2 py-1 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto border border-dashed border-green-400/50">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">More Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're constantly working on new innovative solutions. Follow us on GitHub to stay updated with our latest projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-green-400 text-black hover:bg-green-500"
                  asChild
                >
                  <a href="https://github.com/dnaforgehub" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Follow on GitHub
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                  asChild
                >
                  <a href="#contact">
                    Suggest a Project
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
