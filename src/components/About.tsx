import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower developers with cutting-edge tools and foster innovation in next-generation applications.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'A world where technology seamlessly bridges human needs with digital solutions.'
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Open collaboration, continuous learning, and inclusive community building.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries through creative problem-solving and emerging technologies.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">DNA Society</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a community of passionate developers, designers, and innovators 
            committed to building the future of digital experiences.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="glass-card p-8 md:p-12 rounded-2xl hover-glow">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Story</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center mb-6">
                Founded by a group of ambitious developers, DNA Society emerged from a shared vision 
                to create meaningful impact through technology. We believe that great applications 
                aren't just about code – they're about understanding human needs and crafting 
                solutions that make a difference.
              </p>
              <p className="text-center">
                From humble beginnings as a study group to becoming a thriving community of creators, 
                we've grown into a collective that champions open-source development, mentorship, 
                and collaborative innovation. Every project we undertake reflects our commitment 
                to excellence and our passion for pushing technological boundaries.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover-glow group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '50+', label: 'Active Members' },
            { number: '25+', label: 'Projects Completed' },
            { number: '100+', label: 'Events Hosted' },
            { number: '3+', label: 'Years Strong' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;