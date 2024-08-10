import React from 'react'
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='page'>
    <div className='abt'>
      <img src='https://s3-alpha-sig.figma.com/img/a21e/6490/af8cf75c1bc9b791ef3c44502981a0ae?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgOem4aYyudb-6uK3GPz6aPcFujoyTP-~4JsDPdjQmTmTyPhOj9c3NutZLfTWlVRBIb5kKuafU6xY1NRARwrd8kA32XqG2IcukXkxyVxfln3QZfyhUoWHGc32Ezzvo9BFZTLDVcFlvD3Xypx8ZqRwz0-rbCiHM43huiPhfxE7YlQ~0qR8xp-z9W0QpnaN6Ggu4ggpViYVQIs0nYBM-SiDTv5QU8qCllokbFQuzs9sA8V3YKCIhfbxo8E9plUtL91odCRgi7lR9h0AAdKOSQQeWMmHr0odX94DM0xYk8sTPRYSZ7Sy-v3v9TeMFB0nr5YPlT9lnQAtSCYfhEjCzE-sQ__' alt='logo'></img>
    </div>
    <p id='about'>ABOUT ASMP</p>
    <p id='content'>Alumni Student Mentoring Program (ASMP) is an initiative by Student Alumni Relations Cell (SARC) with an objective of creating a platform to foster relationships between alumni mentors and students that last forever. ASMP achieves this aim by bringing together alumni mentors and student mentees through various events to help form a rapport and strengthen the connection between them, thus enhancing the IITB Alumni network</p>
    <Link to="/events" className="button-link">
      <button className="events-button">
        Events
      </button>
    </Link>
    </div>

  )
}

export default About