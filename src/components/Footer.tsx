import { Github, Terminal, Activity, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const systemLinks = [
    { icon: Github, href: 'https://github.com', label: 'REPOSITORY', desc: 'Source code access' },
    { icon: Terminal, href: '#', label: 'TERMINAL', desc: 'Direct CLI access' },
    { icon: Activity, href: '#', label: 'STATUS', desc: 'System monitoring' },
    { icon: Cpu, href: '#', label: 'RESOURCES', desc: 'Performance metrics' }
  ];

  return (
    <footer className="border-t border-white/10 bg-black/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Terminal className="h-8 w-8 text-green-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-mono font-bold text-white tracking-wider">
                    DNA FORGE
                  </span>
                  <span className="text-xs text-mono text-green-400 tracking-widest -mt-1">
                    HUB
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-sm">
                Minimalist development collective building efficient, scalable, 
                and aesthetically clean digital solutions.
              </p>
            </div>

            {/* System Links */}
            <div className="space-y-4">
              <h3 className="text-mono text-sm font-bold text-white tracking-wider">
                SYSTEM.LINKS
              </h3>
              <div className="space-y-3">
                {systemLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-green-400 transition-colors group"
                  >
                    <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-mono font-medium">{link.label}</div>
                      <div className="text-xs opacity-60">{link.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="space-y-4">
              <h3 className="text-mono text-sm font-bold text-white tracking-wider">
                SYSTEM.STATUS
              </h3>
              <div className="glass-card p-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-mono text-muted-foreground">UPTIME</span>
                  <span className="text-mono text-green-400">99.9%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-mono text-muted-foreground">LOAD</span>
                  <span className="text-mono text-cyan-400">0.12</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-mono text-muted-foreground">MEMORY</span>
                  <span className="text-mono text-blue-400">2.1GB</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-mono text-muted-foreground">STATUS</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-mono text-green-400">ONLINE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-mono text-xs text-muted-foreground">
                © 2025 DNA FORGE HUB. ALL RIGHTS RESERVED.
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-mono text-xs text-muted-foreground">
                  BUILD: v2.1.0
                </div>
                <div className="text-mono text-xs text-muted-foreground">
                  COMMIT: a7f3c8e
                </div>
                <div className="flex items-center space-x-1">
                  <Activity className="h-3 w-3 text-green-400" />
                  <span className="text-mono text-xs text-green-400">LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;