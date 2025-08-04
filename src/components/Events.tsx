import { Calendar, Clock, MapPin, Users, Plus, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const Events = () => {
  const { toast } = useToast();

  const Events = [
    {
      title: 'DNA X OSCI',
      date: '2025-08-03',
      endDate: '',
      time: '24 hour  ',
      location: 'Virtual Event',
      attendees: '',
      registrations: 'Registration Ongoing',
      description: `We are pleased to announce that DNA (Developers of Next-gen Applications) has been selected as an Official Community Partner of OSCI (Open Source Connect India). This partnership offers developers a unique opportunity to:- Contribute to prominent open-source projects,- Gain visibility on GitHub,- Enhance professional portfolios.Click The Join button bellow  to participate in OSCI's initiatives and leverage guidance from experienced contributors and mentors. Let's collectively showcase DNA's capabilities.`,
      tags: ['Open Source', 'Github Profile'],
      status: 'Ongoing',
      highlights: ['Open Source Contribution', '15 Days Intensive Training', 'Virtual Format'],
      link: 'https://docs.google.com/forms/d/1ANU3JcofxzfgIHEoKYxchJVPu8mBunTrf7VGuAQBKaY/viewform'
    },
    {
      title: 'Web Development Workshop',
      date: 'July 25-27, 2025',
      time: '7:00 PM - 8:00 PM',
      location: 'Virtual Event',
      attendees: 100,
      registrations: 200,
      description: 'A comprehensive 3-day workshop covering modern web development technologies, frameworks, and best practices.',
      tags: ['Web Development', 'HTML', 'CSS', 'JavaScript'],
      status: 'completed',
      highlights: ['100+ Participants', '46 Certificates Issued', '3 Days Intensive Training', 'Virtual Format'],
      link: null
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Events</span> & Meetups
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join our community events, workshops, and hackathons. Learn, network,
            and collaborate with fellow developers.
          </p>
          
          {/* Certificate/Rewards Link */}
          <div className="flex justify-center mt-8">
            <Link
              to="/rewards"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 text-black font-semibold hover:from-green-500 hover:to-cyan-500 transition-all duration-300 group"
            >
              <Award className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View Event Certificates
            </Link>
          </div>
        </div>

        {/* Recent Event */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Events</h3>
          <div className="grid grid-cols-1 max-w-3xl mx-auto gap-5">
            {Events.map((event, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover-glow border-l-4 border-l-green-400"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-green-400">{event.title}</h4>
                  <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-mono">
                    {event.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-green-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-green-400" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-green-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 text-green-400" />
                      <span>{event.attendees ? `${event.attendees} Attendees • ${event.registrations} Registrations` : event.registrations}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-lg">{event.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {event.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-800 border border-green-400 text-green-400 px-3 py-1 rounded-full text-sm font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black/30 rounded-lg p-4 mb-6">
                  {event.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-green-400 font-mono text-sm">{highlight}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                  {/* Registration/Status Button */}
                  <button
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      event.status.toLowerCase() === 'completed'
                        ? 'bg-gray-600 text-gray-400'
                        : 'bg-green-400 text-black hover:bg-green-500'
                    }`}
                    onClick={() => {
                      if (event.status.toLowerCase() !== 'completed' && event.link) {
                        window.open(event.link, '_blank');
                      } else if (event.status.toLowerCase() !== 'completed') {
                        toast({
                          title: "Registration Link",
                          description: "Registration link will be available soon!",
                          variant: "default",
                        });
                      }
                    }}
                  >
                    {event.status.toLowerCase() === 'completed' ? 'Event Ended' : 'Join Now'}
                  </button>

                  {/* Visit Us Button for DNA X OSCI */}
                  {event.title === 'DNA X OSCI' && (
                    <Link
                      to="/dna-osci"
                      className="inline-flex items-center px-6 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                    >
                      Visit Us
                    </Link>
                  )}

                  {/* View Certificates Button (only for completed events) */}
                  {event.status.toLowerCase() === 'completed' && (
                    <Link
                      to="/rewards"
                      className="inline-flex items-center px-6 py-2 rounded-full border border-green-400 text-green-400 hover:bg-green-400/10 transition-all duration-300"
                    >
                      <Award className="w-4 h-4 mr-2" />
                      View Certificates
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center">
          <div className="glass-card p-12 rounded-2xl max-w-2xl mx-auto border-2 border-dashed border-cyan-400">
            <div className="mb-6">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-cyan-400 animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold text-cyan-400 mb-4 font-mono">More Events Coming Soon</h3>
              <p className="text-xl text-muted-foreground">
                Stay tuned for exciting upcoming workshops, hackathons, and community meetups.
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Events;
