import React, { useEffect, useState } from 'react'
import './Profile.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UseFetchProfile from '../hooks/useFetchProfile';
import UseEditProfile from '../hooks/useEditProfile';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function Profile() {
  const DEGREE_CHOICES = {
      btech: 'B.Tech',
      bs: 'B.S',
      dual_degree: 'Dual Degree',
      mtech: 'M.Tech',
      msc: 'M.Sc',
      phd: 'PhD',
      other_degree: 'Other Degree'
  }

  const BRANCH_CHOICES = {
    aero: 'Aerospace Engineering',
    cse: 'Computer Science Engineering',
    ee: 'Electrical Engineering',
    mech: 'Mechanical Engineering',
    chem: 'Chemistry',
    biosci: 'Biosciences & Bioengineering',
    che: 'Chemical Engineering',
    eco: 'Economics',
    ieor: 'Industrial Engineering and Operations Research',
    metallurgy: 'Metallurgical Engineering and Material Science',
    engphy: 'Engineering Physics',
    envsci: 'Environmental Science & Engineering',
    energy: 'Energy Science & Engineering',
    math: 'Mathematics',
    civil: 'Civil Engineering',
    earthsci: 'Earth Sciences and Resource engineering',
    rural: 'Technology for Rural Areas',
    design: 'Design',
    other: 'Other (If not mentioned above)'
}

const { editProfile, loading1, error, success } = UseEditProfile();
const { fetchProfile, fetchedProfile } = UseFetchProfile();





  // const { fetchProfile, fetchedProfile } = UseFetchProfile();

  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    linkedin: '',
    user: {},
    sop: '',
    hostel: '',
    room_no: '',
  
  });

  useEffect(() => {
    const loadProfile = async () => {
      await fetchProfile();
      setLoading(false);
    };
    loadProfile();
  }, [fetchProfile]);

  useEffect(() => {
    if (fetchedProfile) {
      setProfile(prevProfile => ({
        ...prevProfile,
        linkedin: fetchedProfile.linkedin || '',
        sop: fetchedProfile.sop || '',
        hostel: fetchedProfile.hostel || '',
        room_no: fetchedProfile.room_no || '',
        user: fetchedProfile.user || {},
      }));
    }
  }, [fetchedProfile]);

  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    const accessToken = localStorage.getItem('accessToken');
    profile.accessToken = accessToken;
    editProfile(profile);
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message or spinner
  }

  if (!fetchedProfile) {
    return <div>No profile data available.</div>; // Handle case where profile data is not available
  }

  // if (fetchedProfile){
    return (
      <Container className="w-screen h-screen py-24 profile cursor-auto" fluid>
         <h1 className='md:pt-10 xl:py-0 text-center text-[#282624]'>User Profile</h1>
   
         <Row className='lg:px-20'>
           <Col className='my-2' md={3} xs>Roll Number</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl justify-center items-center flex opacity-80' md={6} xs>{ fetchedProfile.user.roll }</Col>
         </Row>
   
         <Row className='lg:px-20'>
           <Col className='my-2' md={3} xs>Username</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-xs justify-center items-center flex opacity-80' md={6} xs>{ fetchedProfile.user.fullname }</Col>
         </Row>
   
         <Row className='lg:px-20'>
           <Col className='my-2' md={3} xs>LDAP</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-xs justify-center items-center flex opacity-80' md={6} xs></Col>
         </Row>
   
         <Row className='lg:px-20'>
           <Col className='my-2' md={3} xs>Personal Email</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-xs text-[11px] justify-center items-center flex opacity-80' md={6} xs>{ fetchedProfile.user.ldap }</Col>
         </Row>
   
         {/* <Row className='lg:px-20'>
           <Col className='my-2' md={3} xs>Hostel</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-xs justify-center items-center flex opacity-80' md={6} xs>{fetchedProfile.sop}</Col>
         </Row>
   
         <Row className='lg:px-20'>
           <Col className='my-2' md={3} xs>Room No.</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-xs justify-center items-center flex opacity-80' md={6} xs></Col>
         </Row>
   
         <Row className='lg:px-20'>
           <Col className='my-2' md={3} xs>Academic</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-xs justify-center items-center flex opacity-80' md={6} xs>{ fetchedProfile.user.degree }</Col>
         </Row> */}

         <Row className='lg:px-20'>
           <Col className='my-2' md={3} xs>SOP</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-xs justify-center items-center flex opacity-80' md={9} xs>
           <InputGroup size='sm' className='h-[200px]'>
            <Form.Control as="textarea" aria-label="With textarea" onChange={handleInputChange} name="sop" value={profile.sop}/>
          </InputGroup>
          </Col>
         </Row>

         <Row className='lg:px-20'>
           <Col className='my-2' md={3} xs>LinkedIn</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-xs justify-center items-center flex opacity-80' md={6} xs>
           <input type="text" onChange={handleInputChange} name="linkedin" value={profile.linkedin} className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-xs justify-center items-center flex opacity-80 w-full' />
           
          </Col>
         </Row>
   
         <Row className='lg:px-20 mt-0'>
           {/* <Col md={2} sm={0}></Col> */}
           <Col className='bg-[#3F2813] md:mx-5 mx-2 my-2 rounded-xl md:text-2xl text-xl sm:p-0 p-1 justify-center items-center flex opacity-80' md={3} xs>{ BRANCH_CHOICES[fetchedProfile.user.dept] }</Col>
           <Col className='bg-[#3F2813] md:mx-5 my-2 rounded-xl md:text-2xl text-xl sm:p-0 p-1 justify-center items-center flex opacity-80' md={3} xs>{ DEGREE_CHOICES[fetchedProfile.user.degree] }</Col>
           <Col className='bg-[#3F2813] md:mx-5 my-2 rounded-xl md:text-2xl text-xl sm:p-0 p-1 justify-center items-center flex opacity-80' md={3} xs>Hostel & Room No.</Col>
         </Row>
   
         <Row className='lg:px-20'>
         {/* <Col md={2} sm={0}></Col> */}
           <Col className='bg-[#3F2813] md:mx-5 mx-2 my-2 rounded-xl md:text-2xl text-xl sm:p-0 p-1 justify-center items-center flex opacity-80' md={3} xs>Joining Year*</Col>
           <Col className='bg-[#3F2813] md:mx-5 my-2 rounded-xl md:text-2xl text-xl sm:p-0 p-1 justify-center items-center flex opacity-80' md={3} xs>Graduation Year*</Col>
           <Col className='bg-[#3F2813] md:mx-5 my-2 rounded-xl md:text-2xl text-xl sm:p-0 p-1 justify-center items-center flex opacity-80' md={3} xs>Academic Program</Col>
           <Col>
              <Button as="input" type="submit" value="Submit" onClick={handleSubmit} />
          </Col>
         </Row>

          
            
          
         
         
       </Container>
     )
   }
  // }
  
