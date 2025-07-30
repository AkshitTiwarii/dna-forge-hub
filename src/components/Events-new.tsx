import { Calendar, Clock, MapPin, Users, Plus } from 'lucide-react';

const Events = () => {
  const pastEvents = [
    {
      title: 'Web Development Workshop',
      date: '2025-07-25',
      endDate: '2025-07-27',
      time: '7:00 PM - 8:00 PM',
      location: 'Virtual Event',
      attendees: 100,
      registrations: 200,
      description: 'A comprehensive 3-day workshop covering modern web development technologies, frameworks, and best practices.',
      tags: ['Web Development', 'React', 'Node.js', 'Workshop'],
      status: 'completed',
      highlights: ['100+ Attendees', '200+ Registrations', '3 Days Intensive Training', 'Virtual Format']
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our community events, workshops, and hackathons. Learn, network, 
            and collaborate with fellow developers.
          </p>
        </div>

        {/* Recent Event */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Recent Events</h3>
          <div className="grid grid-cols-1 max-w-3xl mx-auto">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover-glow border-l-4 border-l-green-400"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-green-400">{event.title}</h4>
                  <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-mono">
                    COMPLETED
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-green-400" />
                      <span>July 25-27, 2025</span>
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
                      <span>{event.attendees}+ Attendees • {event.registrations}+ Registrations</span>
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black/30 rounded-lg p-4">
                  {event.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-green-400 font-mono text-sm">{highlight}</div>
                    </div>
                  ))}
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
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
