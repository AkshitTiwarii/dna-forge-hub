import { useState, useEffect } from 'react';

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    console.log('Index component mounted');
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-foreground">Loading...</div>
    </div>;
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold text-primary">DNA Society</span>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 text-primary">DNA Society</h1>
            <p className="text-xl text-muted-foreground mb-8">Developers of Next Gen Application</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building the future through code, collaboration, and community. 
              Join us in creating innovative solutions that shape tomorrow's digital landscape.
            </p>
          </div>
        </section>
        
        <section id="about" className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-xl text-muted-foreground">
              We are a community of passionate developers building the future.
            </p>
          </div>
        </section>
        
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl text-muted-foreground">Get in touch with our team.</p>
          </div>
        </section>
      </main>
      
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">© 2024 DNA Society. Built with ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
