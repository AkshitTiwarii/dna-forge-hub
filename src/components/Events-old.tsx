import { Calendar, Clock, MapPin, Users, ExternalLink, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Events = () => {
  const pastEvents = [
    {
      title: 'Web Development Workshop',
      date: '2025-07-25',
      endDate: '2025-07-27',
      time: '9:00 AM - 5:00 PM',
      location: 'Virtual Event',
      attendees: 100,
      registrations: 200,
      description: 'A comprehensive 3-day workshop covering modern web development technologies, frameworks, and best practices.',
      tags: ['Web Development', 'React', 'Node.js', 'Workshop'],
      status: 'completed',
      highlights: ['100+ Attendees', '200+ Registrations', '3 Days Intensive Training', 'Virtual Format']
    }
  ];

  const upcomingEvents = [
    // Add upcoming events here when available
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Upcoming Events</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover-glow border-l-4 border-l-primary"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold">{event.title}</h4>
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
                    Upcoming
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.attendees}/{event.maxAttendees} attendees</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{event.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button className="btn-primary w-full" asChild>
                  <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer">
                    RSVP Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Past Events</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover-glow opacity-80 border-l-4 border-l-muted"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold">{event.title}</h4>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                    Completed
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{event.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {event.highlights && (
                  <div>
                    <h5 className="font-semibold mb-2">Highlights:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {event.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Event Hosting CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to Host an Event?</h3>
            <p className="text-muted-foreground mb-6">
              Have an idea for a workshop, talk, or meetup? We'd love to help you 
              share your knowledge with our community.
            </p>
            <Button className="btn-primary" asChild>
              <a href="#contact">
                Propose an Event
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;