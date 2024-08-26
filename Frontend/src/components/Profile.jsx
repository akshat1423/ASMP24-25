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
    joining_year: '',
    graduation_year: '',
    academic_program: '',
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
        linkedin: fetchedProfile.linkedin,
        sop: fetchedProfile.sop,
        hostel: fetchedProfile.hostel,
        room_no: fetchedProfile.room_no,
        user: fetchedProfile.user,
      }));
    }
  }, [fetchedProfile]);

  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    const accessToken = localStorage.getItem('accessToken');
    const updatedProfile = {
      ...profile,
      accessToken,
      sop: profile.sop, // Use an empty string if sop is not filled
      linkedin: profile.linkedin, // Use an empty string if linkedin is not filled
      hostel: profile.hostel,
      room_no: profile.room_no,
    }
    editProfile(updatedProfile);
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message or spinner
  }

  if (!fetchedProfile) {
    return <div>No profile data available.</div>; // Handle case where profile data is not available
  }

  // if (fetchedProfile){
    return (
      <Container className="w-screen min-h-screen py-24 profile cursor-auto" fluid>
         <h1 className='md:pt-5 xl:py-0 text-center text-[#282624]'>User Profile</h1>
   
         <Row className='lg:px-20'>
           <Col className='my-2 md:text-2xl text-sm' md={3} xs>Roll Number</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-sm justify-center items-center flex opacity-80' md={6} xs>{ fetchedProfile.user.roll }</Col>
         </Row>
   
         <Row className='lg:px-20'>
           <Col className='my-2 md:text-2xl text-sm' md={3} xs>Username</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-sm justify-center items-center flex opacity-80' md={6} xs>{ fetchedProfile.user.fullname }</Col>
         </Row>
   
         <Row className='lg:px-20'>
           <Col className='my-2 md:text-2xl text-sm' md={3} xs>LDAP</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-sm justify-center items-center flex opacity-80' md={6} xs></Col>
         </Row>
   
         <Row className='lg:px-20'>
           <Col className='my-2 md:text-2xl text-sm' md={3} xs>Personal Email</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-sm justify-center items-center flex opacity-80' md={6} xs>{ fetchedProfile.user.ldap }</Col>
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
           <Col className='my-2 md:text-2xl text-sm' md={3} xs>SOP</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl justify-center items-center flex opacity-80' md={9} xs={7}>
           <InputGroup size='xs' className='h-[200px]'>
            <Form.Control as="textarea" aria-label="With textarea" onChange={handleInputChange} name="sop" value={profile.sop} />
          </InputGroup>
          </Col>
         </Row>

         <Row className='lg:px-20'>
           <Col className='my-2 md:text-2xl text-sm' md={3} xs>LinkedIn</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl justify-center items-center flex opacity-80' md={6} xs>
           <input type="text" onChange={handleInputChange} name="linkedin" value={profile.linkedin} className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-sm justify-center items-center flex opacity-80 w-full'/>
           
          </Col>
         </Row>
   
         <Row className='lg:px-20 mt-5 md:flex-none md:justify-normal flex justify-center'>
           <Col md={3} sm={0}></Col>
           <Col className='bg-[#3F2813] md:mx-5 mx-2 my-2 rounded-xl md:text-2xl text-sm sm:p-4 p-1 justify-center items-center flex opacity-80 text-center' xl={3} xs={5} sm={4}>{ BRANCH_CHOICES[fetchedProfile.user.dept] }</Col>
           <Col className='bg-[#3F2813] md:mx-5 mx-2 my-2 rounded-xl md:text-2xl text-sm sm:p-4 p-1 justify-center items-center flex opacity-80 text-center' xl={3} xs={5} sm={4}>{ DEGREE_CHOICES[fetchedProfile.user.degree] }</Col>
           
         </Row>
   
          <Row className='lg:px-20 mt-1 md:flex-none md:justify-normal flex justify-center items-center'>
          <Col md={3} sm={0}></Col>
          <Col className='bg-[#3F2813] md:mx-5 my-2 mx-2 rounded-xl md:text-2xl text-xs sm:p-0 p-1 justify-center items-center flex opacity-80 text-center' xl={3} xs={5} sm={4}><div className='pl-5'>Hostel:</div>
           <input type="text" onChange={handleInputChange} name="hostel" value={profile.hostel} className='bg-[#3F2813] md:mx-5 my-2 rounded-xl md:text-2xl text-xs sm:p-0 p-1 justify-center items-center flex opacity-80 w-full text-center' placeholder='Hostel'/>
           </Col>
           <Col className='bg-[#3F2813] md:mx-5 my-2 mx-2 rounded-xl md:text-2xl text-xs sm:p-0 p-1 justify-center items-center flex opacity-80 text-center' xl={3} xs={5} sm={4}><div className='pl-5'>Room No:</div>
           <input type="text" onChange={handleInputChange} name="room_no" value={profile.room_no} className='bg-[#3F2813] md:mx-5 my-2 rounded-xl md:text-2xl text-xs sm:p-0 p-1 justify-center items-center flex opacity-80 w-full text-center' placeholder='Room No.'/>
           </Col>
          </Row>
        

          <Row>
            <Col className='flex justify-center items-center my-5'>
            <Button variant='success' onClick={handleSubmit} className='p-3'>Save Profile</Button>
          </Col>
          </Row>
            
          
         
         
       </Container>
     )
   }
  // }
  
