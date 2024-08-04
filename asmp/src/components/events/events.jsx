import React, { useState } from 'react';
import './Events.css'; // Import the CSS file for styling

const EventImages = () => {
  const [activeIndex, setActiveIndex] = useState(null);
 

  const events = [
    { id: 1, title: 'Break the ice', imgSrc: '/images/231cf09f73eeb4c07c7bb2f35dda633a 1.png', description: 'Alumni Student Mentoring Program (ASMP) is an initiative by Student Alumni Relations Cell (SARC) with an objective of creating a platform to foster relationships between alumni mentors and students that last forever. ASMP achieves this aim by bringing together alumni mentors and student mentees through various events to help form a rapport and strengthen the connection between them, thus enhancing the IITB Alumni networ' },
    { id: 2, title: 'Shadow program', imgSrc:   '/images/231cf09f73eeb4c07c7bb2f35dda633a 1.png', description: 'Alumni Student Mentoring Program (ASMP) is an initiative by Student Alumni Relations Cell (SARC) with an objective of creating a platform to foster relationships between alumni mentors and students that last forever. ASMP achieves this aim by bringing together alumni mentors and student mentees through various events to help form a rapport and strengthen the connection between them, thus enhancing the IITB Alumni networ' },
    { id: 3, title: 'Tansverse mentoring', imgSrc:   '/images/231cf09f73eeb4c07c7bb2f35dda633a 1.png', description: 'Alumni Student Mentoring Program (ASMP) is an initiative by Student Alumni Relations Cell (SARC) with an objective of creating a platform to foster relationships between alumni mentors and students that last forever. ASMP achieves this aim by bringing together alumni mentors and student mentees through various events to help form a rapport and strengthen the connection between them, thus enhancing the IITB Alumni networ' },
    { id: 4, title: 'group mentoring', imgSrc:  '/images/231cf09f73eeb4c07c7bb2f35dda633a 1.png', description: 'Alumni Student Mentoring Program (ASMP) is an initiative by Student Alumni Relations Cell (SARC) with an objective of creating a platform to foster relationships between alumni mentors and students that last forever. ASMP achieves this aim by bringing together alumni mentors and student mentees through various events to help form a rapport and strengthen the connection between them, thus enhancing the IITB Alumni networ' },
    // Add more events as needed
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='main-container'>
      <h1 className='heading'>Events</h1>
    <div className="event-images-container">
      {events.map((event, index) => (
        <div
          key={event.id}
          className="event-item"
          onClick={() => handleClick(index)}
        >
          {activeIndex === index ? (
            <div className="event-description">
              <p>{event.description}</p>
            </div>
          ) : (
            <img
              src={event.imgSrc}
              alt={event.title}
              className="event-image"
            />
          )}
          <div className="event-title">
            <p>{event.title}</p>
          </div>
        </div>
      ))}
    </div>
   </div> 
  );
};

export default EventImages;
