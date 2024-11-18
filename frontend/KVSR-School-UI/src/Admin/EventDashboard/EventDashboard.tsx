import React from 'react';
import './EventDashboard.css';
import { Link } from 'react-router-dom';

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  description: string;
}

const events: Event[] = [
  {
    id: 1,
    name: 'Annual Science Fair',
    date: '2024-11-15',
    location: 'Main Hall',
    description: 'A showcase of the best science projects from students across all grades.',
  },
  {
    id: 2,
    name: 'Sports Day',
    date: '2024-12-20',
    location: 'Sports Ground',
    description: 'A day full of athletic events, competitions, and fun activities for everyone.',
  },
  {
    id: 3,
    name: 'Cultural Fest',
    date: '2025-01-10',
    location: 'Auditorium',
    description: 'An evening of dance, music, and performances celebrating various cultures.',
  },
];

const EventDashboard: React.FC = () => {
  return (
    <div className="event-dashboard">
      {/* Back button to navigate to Dashboard */}
      <Link to="/dashboard" className="back-button">
        &larr; Back
      </Link>

      <h2>Upcoming Events</h2>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p className="description">{event.description}</p>
          </div>
        ))}
      </div>

      {/* Add Event Button */}
      <Link to="/event-register" className="add-event-button">
        Add Event
      </Link>
    </div>
  );
};


export default EventDashboard;

