import { Github, Linkedin, Twitter, MessageSquare, Heart, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/dnasociety', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/dnasociety', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/dnasociety', label: 'Twitter' },
    { icon: MessageSquare, href: 'https://discord.gg/dnasociety', label: 'Discord' }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#team', label: 'Team' },
    { href: '#events', label: 'Events' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const resources = [
    { href: 'https://github.com/dnasociety', label: 'GitHub Repository' },
    { href: '#events', label: 'Upcoming Events' },
    { href: '#projects', label: 'Open Source Projects' },
    { href: '#contact', label: 'Join Community' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold gradient-text">DNA</span>
              <span className="ml-2 text-muted-foreground">Society</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Developers of Next Gen Application. Building the future through code, 
              collaboration, and community innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target={resource.href.startsWith('http') ? '_blank' : undefined}
                    rel={resource.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center text-muted-foreground">
            <span>© {new Date().getFullYear()} DNA Society. </span>
            <span className="ml-1 flex items-center">
              Built with <Heart className="h-4 w-4 mx-1 text-red-500" /> and 
              <Code className="h-4 w-4 ml-1" />
            </span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="https://github.com/dnasociety" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              Open Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;