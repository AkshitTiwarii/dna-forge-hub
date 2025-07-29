import { Github, ExternalLink, Star, GitFork, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      name: 'DevFlow',
      description: 'A modern project management tool built with React, Node.js, and PostgreSQL. Features real-time collaboration and AI-powered insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'TypeScript'],
      githubUrl: 'https://github.com/dnasociety/devflow',
      liveUrl: 'https://devflow.dnasociety.dev',
      stars: 234,
      forks: 45,
      status: 'Active'
    },
    {
      name: 'CodeMentor AI',
      description: 'An intelligent code review and mentoring platform that helps developers improve their coding skills through personalized feedback.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['Python', 'FastAPI', 'TensorFlow', 'React', 'Docker'],
      githubUrl: 'https://github.com/dnasociety/codementor-ai',
      liveUrl: 'https://codementor.dnasociety.dev',
      stars: 189,
      forks: 32,
      status: 'Beta'
    },
    {
      name: 'OpenSource Hub',
      description: 'A comprehensive platform for discovering, contributing to, and managing open-source projects. Built for the developer community.',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Supabase', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/dnasociety/opensource-hub',
      liveUrl: 'https://opensource.dnasociety.dev',
      stars: 156,
      forks: 28,
      status: 'Active'
    },
    {
      name: 'DevTools Extension',
      description: 'A browser extension that enhances developer productivity with custom shortcuts, code snippets, and debugging utilities.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop',
      technologies: ['JavaScript', 'Chrome APIs', 'Webpack', 'CSS3'],
      githubUrl: 'https://github.com/dnasociety/devtools-extension',
      liveUrl: 'https://chrome.google.com/webstore/detail/devtools',
      stars: 92,
      forks: 15,
      status: 'Stable'
    },
    {
      name: 'API Gateway',
      description: 'A lightweight, high-performance API gateway built with Go. Features rate limiting, authentication, and real-time monitoring.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
      technologies: ['Go', 'Redis', 'MongoDB', 'Docker', 'Kubernetes'],
      githubUrl: 'https://github.com/dnasociety/api-gateway',
      liveUrl: 'https://gateway.dnasociety.dev',
      stars: 78,
      forks: 12,
      status: 'Alpha'
    },
    {
      name: 'React Component Library',
      description: 'A modern, accessible component library built with React and TypeScript. Includes design tokens and comprehensive documentation.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup'],
      githubUrl: 'https://github.com/dnasociety/react-components',
      liveUrl: 'https://components.dnasociety.dev',
      stars: 267,
      forks: 58,
      status: 'Active'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-success text-success-foreground';
      case 'Beta': return 'bg-warning text-warning-foreground';
      case 'Alpha': return 'bg-destructive text-destructive-foreground';
      case 'Stable': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open-source projects and tools built by our community. 
            Explore our work and contribute to the future of development.
          </p>
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
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-muted-foreground text-xs py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center">
                    <GitFork className="h-3 w-3 mr-1" />
                    <span>{project.forks}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 btn-primary"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass-card p-8 rounded-2xl mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">25+</div>
              <div className="text-muted-foreground">Open Source Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">1.2k+</div>
              <div className="text-muted-foreground">GitHub Stars</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">200+</div>
              <div className="text-muted-foreground">Contributors</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">50k+</div>
              <div className="text-muted-foreground">Downloads</div>
            </div>
          </div>
        </div>

        {/* Contribution CTA */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to Contribute?</h3>
            <p className="text-muted-foreground mb-6">
              Join our open-source community! Whether you're a beginner or expert, 
              there's always room for your contributions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary" asChild>
                <a href="https://github.com/dnasociety" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">
                  <Eye className="mr-2 h-4 w-4" />
                  Propose a Project
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;