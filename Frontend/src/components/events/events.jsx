import React, { useState } from 'react';
import './Events.css';

const EventImages = () => {
  const [activeIndex, setActiveIndex] = useState(null);
 
  const events = [
    { id: 1, title: 'Break The Ice', imgSrc: '/images/breaktheice.jpg', description: 'Break the Ice is the flagship event of the Alumni Student Mentorship Program that is conducted during the Alumination. The event focuses on bringing mentors and mentees involved in the regular ASMP phase together so that they can interact with each other over lunch . Besides lunch, a number of other informal activities are organized and a photo booth is also set up so as to create an atmosphere suited for an open and free interaction.' },
    { id: 2, title: 'Shadow program', imgSrc:   '/images/shadowprogram.jpg', description: 'Students get the opportunity to visit alumni workplaces and gain insights into corporate life. The program involves discussions with alumni, introductions to co-workers, and observations of work methodologies. Past visits have included companies like the Bombay Stock Exchange (BSE), National Stock Exchange (NSE), and Hindustan Unilever Limited (HUL).' },
    { id: 3, title: 'Nail The Prep', imgSrc:   '/images/ntp.jpg', description: 'SARC provides an opportunity to all third year students to be a part of mock internship interview program - Nail The Prep, which is planned to engage students in mock interviews with our highly esteemed alumni. NTP generally happens in July, wherein our alumni with the experience in different fields like Finance, consult, PM, IT, software etc. take mock interviews of students who are targeting internships. NTP also involves a QnA session named as Ask The Alum (ATA) to clarify students’ doubts about internship season.' },
    { id: 4, title: 'Group Mentoring', imgSrc:  '/images/groupmentoring.jpg', description: 'Group mentoring is a networking and learning opportunity where students can connect with successful alumni and fellow students who share similar interests. In these sessions, experienced alumni from various fields such as finance, consulting, IT, analytics, and product management interact with small groups of 4-5 students in an offline format. Its a chance to gain insights, ask questions, and receive guidance in a focused and personalized setting, allowing the students to explore specific career options and expand their professional network.' },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='main-container-events'>
      <br/>
      <br/>
      <br/>
      <h1 className='heading' style={ {fontFamily: "Fraunces, serif"}}>Events</h1>
    <div className="event-images-container">
      {events.map((event, index) => (
        <div
          key={event.id}
          className="event-item"
          onClick={() => handleClick(index)}
        >
          {activeIndex === index ? (
            <div className="event-description" style={{fontFamily: "Fraunces, serif",}}>
              <p>{event.description}</p>
            </div>
          ) : (
            <img
              src={event.imgSrc}
              alt={event.title}
              className="event-image"
            />
          )}
        <div className="event-title" style={{fontFamily: "Fraunces, serif",}}>
            <p>{event.title}</p>
          </div>
        </div>
      ))}
    </div>
   </div> 
  );
};

export default EventImages;