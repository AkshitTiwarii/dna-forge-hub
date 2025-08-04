import { useState } from 'react';
import { Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "DNA Forge Hub Team",
        reply_to: formData.email,
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "TRANSMISSION SENT",
          description: "Message received. Preparing response protocol...",
        });

        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/DNA-DEVELOPERS-DEV', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/dna-devs/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/dnasociety', label: 'Twitter' },
    { icon: MessageCircle, href: 'https://discord.gg/dnasociety', label: 'Discord' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join our community or have a project idea? 
            We'd love to hear from you. Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="glass-card"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="glass-card"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="glass-card"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project, idea, or how you'd like to get involved..."
                  className="glass-card resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="glass-card hover-glow justify-start"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5 mr-3" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest updates on events, 
              projects, and community news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="glass-card flex-1"
              />
              <Button className="btn-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;