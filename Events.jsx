// src/components/Events.jsx
import React, { useState } from 'react';
import './Events.css';
import event_1 from '../assets/pexels-suraphat-933620.jpg';
import event_2 from '../assets/health.jpg';
import event_3 from '../assets/pexels-franco30-12193090.jpg';
import event_4 from '../assets/tech.jpg';
import event_5 from '../assets/community.jpg';

const Events = () => {
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility

  const events = [
    {
      title: 'Charity Run',
      date: 'September 5, 2024',
      time: '7:00 AM - 11:00 AM',
      description: 'Participate in our charity run to raise funds for local schools.',
      image: event_1,
    },
    {
      title: 'Health Awareness Workshop',
      date: 'September 15, 2024',
      time: '9:00 AM - 1:00 PM',
      description: 'A workshop on health awareness and basic first aid training.',
      image: event_2,
    },
    {
      title: 'Blood Donation Camp',
      date: 'October 10, 2024',
      time: '9:00 AM - 3:00 PM',
      description: 'Donate blood and save lives. Join us at our blood donation camp.',
      image: event_3,
    },
    {
      title: 'Tech Workshop',
      date: 'November 20, 2024',
      time: '10:00 AM - 4:00 PM',
      description: 'A hands-on workshop on the latest technology trends and innovations.',
      image: event_4,
    },
    {
      title: 'Community Service Day',
      date: 'December 10, 2024',
      time: '9:00 AM - 5:00 PM',
      description: 'Participate in various community service activities and make a difference.',
      image: event_5,
    },
  ];

  const handleRegisterClick = () => {
    setModalOpen(true); // Open the modal when the button is clicked
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <section className="events">
      <h2 className="events-title">Upcoming Events</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={`Poster of ${event.title}`} className="event-image" />
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-time">{event.time}</p>
              <p className="event-description">{event.description}</p>
              <button className="event-button" onClick={handleRegisterClick}>
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for registration confirmation */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Registration Confirmation</h2>
            <p>You have successfully registered for the event!</p>
            <button onClick={handleCloseModal} className="modal-button">Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
