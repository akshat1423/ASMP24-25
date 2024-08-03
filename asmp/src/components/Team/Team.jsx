import React from 'react';
import './Team.css';
import image1 from '../../assets/images/ctm1.png';
import image2 from '../../assets/images/ctm2.png';
import image3 from '../../assets/images/aadit.png';
import image4 from '../../assets/images/aastha.png';
import image5 from '../../assets/images/ojas.png';
import image6 from '../../assets/images/parv.png';
import image7 from '../../assets/images/vanshika.png';
import image8 from '../../assets/images/yash.png';

const Team = () => {
  const coreMembers = [
    { name: 'Nishit Moonat', image: image1 },
    { name: 'Anshika Mishra', image: image2 },
  ];

  const coordinators = [
    { name: 'Aadit Sule', image: image3 },
    { name: 'Aastha Maliwal',  image: image4 },
    { name: 'Ojas Somani', image: image5 },
    { name: 'Parv Seth',  image: image6 },
    { name: 'Vanshika Bansal', image: image7 },
    { name: 'Yash Choudhary', image: image8 },
  ];

  return (
    <div className="team-members">
      <h1 className='heading'>ASMP TEAM 2024-25</h1>
      <h1 className='head2'>CORE TEAM MEMBERS</h1>
      <div className="team-grid-core">
        {coreMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="image-circle" style={{ backgroundImage: `url(${member.image})` }}></div>
            <div className="name">{member.name}</div>
          </div>
        ))}
      </div>
      <h1 className='head2'>COORDINATORS</h1>
      <div className="team-grid-coordinators">
        {coordinators.map((member, index) => (
          <div key={index} className="team-member">
            <div className="role">{member.role}</div>
            <div className="image-circle" style={{ backgroundImage: `url(${member.image})` }}></div>
            <div className="name">{member.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
