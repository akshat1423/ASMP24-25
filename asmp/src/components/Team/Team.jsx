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
import image9 from '../../assets/images/yashWeb.png';
import image10 from '../../assets/images/pratiksha.png';
import image11 from '../../assets/images/khushi.png';
import image12 from '../../assets/images/kaushik.png';
import image13 from '../../assets/images/arush.png';
import image14 from '../../assets/images/aryan.png';
import image15 from '../../assets/images/ctm3.png';
import image16 from '../../assets/images/ctm4.png';

const Team = () => {
  const coreMembers = [
    { name: 'Nishit Moonat', image: image1 ,contact:'+91 9399358126'},
    { name: 'Anshika Mishra', image: image2 ,contact:'+91 7987083011'},
  ];
  const WebMembers = [
    { name: 'Akshat Jain', image: image15 ,contact:'+91 8128612391'},
    { name: 'Ashwani Dubey', image: image16 ,contact:'+91 6263173987'},
  ];

  const coordinators = [
    { name: 'Aadit Sule', image: image3 ,contact:'+91 8459539918'},
    { name: 'Aastha Maliwal',  image: image4,contact:'+91 9403521022' },
    { name: 'Ojas Somani', image: image5,contact:'+91 9826420033' },
    { name: 'Parv Seth',  image: image6 ,contact:'+91 8955122243'},
    { name: 'Vanshika Bansal', image: image7,contact:'+91 8949929616' },
    { name: 'Yash Choudhary', image: image8 ,contact:'+91 9358446536'},
  ];
  const webCoordinators = [
    { name: 'Yash', image: image9 ,contact:'+91 7433002732'},
    { name: 'Pratiksha',  image: image10,contact:'+91 7568797288' },
    { name: 'Khushi Yadav', image: image11,contact:'+91 8930097733' },
    { name: 'Kaushik Mandal',  image: image12 ,contact:'+91 9394564173'},
    { name: 'Arush Narayan Srivastav', image: image13,contact:'+91 9005549919' },
    { name: 'Aryan Badkul ', image: image14 ,contact:'+91 8103078069'},
  ];

  return (
    <div className="team-members">
      <h1 className='headingg'>ASMP TEAM 2024-25</h1>
      <h1 className='head2'>CORE TEAM MEMBERS</h1>
      <div className="team-grid-core">
        {coreMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="image-circle" style={{ backgroundImage: `url(${member.image})` }}></div>
            <div className="name">{member.name}</div>
            <div className="name">{member.contact}</div>
          </div>
        ))}
      </div>
      <h1 className='head2'>ASMP COORDINATORS</h1>
      <div className="team-grid-coordinators">
        {coordinators.map((member, index) => (
          <div key={index} className="team-member">
            <div className="role">{member.role}</div>
            <div className="image-circle" style={{ backgroundImage: `url(${member.image})` }}></div>
            <div className="name">{member.name}</div>
            <div className="name">{member.contact}</div>
          </div>
        ))}
      </div>
      <h1 className='headingg'>Web TEAM 2024-25</h1>
      <h1 className='head2'>CORE TEAM MEMBERS</h1>
      <div className="team-grid-core">
        {WebMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="image-circle" style={{ backgroundImage: `url(${member.image})` }}></div>
            <div className="name">{member.name}</div>
            <div className="name">{member.contact}</div>
          </div>
        ))}
      </div>
      <h1 className='head2'>Web COORDINATORS</h1>
      <div className="team-grid-coordinators">
        {webCoordinators.map((member, index) => (
          <div key={index} className="team-member">
            <div className="role">{member.role}</div>
            <div className="image-circle" style={{ backgroundImage: `url(${member.image})` }}></div>
            <div className="name">{member.name}</div>
            <div className="name">{member.contact}</div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Team;
