import React, { useEffect, useState } from 'react'
import './Profile.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UseFetchProfile from '../hooks/useFetchProfile';

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

  const { fetchProfile, fetchedProfile } = UseFetchProfile();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      await fetchProfile();
      setLoading(false);
      console.log("Fetched Profile :", fetchedProfile?.user);
    };
    // console.log("Fetched Profile :", fetchedProfile.user.dept);
    loadProfile();
  }, [fetchProfile]);

  if (loading) {
    return <div>Loading...</div>; // Show loading message or spinner
  }

  if (!fetchedProfile) {
    return <div>No profile data available.</div>; // Handle case where profile data is not available
  }

  // if (fetchedProfile){
    return (
      <Container className="w-screen h-screen py-24 profile cursor-auto" fluid>
         <h1 className='md:pt-20 xl:py-0 text-center text-[#282624]'>User Profile</h1>
   
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
   
         <Row className='lg:px-20'>
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
         </Row>
   
         <Row className='lg:px-20 mt-4'>
           <Col md={2} sm={0}></Col>
           <Col className='bg-[#3F2813] md:mx-5 mx-2 my-2 rounded-xl md:text-2xl text-xl sm:p-0 p-1 justify-center items-center flex opacity-80' md={3} xs>{ BRANCH_CHOICES[fetchedProfile.user.dept] }</Col>
           <Col className='bg-[#3F2813] md:mx-5 my-2 rounded-xl md:text-2xl text-xl sm:p-0 p-1 justify-center items-center flex opacity-80' md={3} xs>{ DEGREE_CHOICES[fetchedProfile.user.degree] }</Col>
         </Row>
   
         <Row className='lg:px-20'>
         <Col md={2} sm={0}></Col>
           <Col className='bg-[#3F2813] md:mx-5 mx-2 my-2 rounded-xl md:text-2xl text-xl sm:p-0 p-1 justify-center items-center flex opacity-80' md={3} xs>Joining Year*</Col>
           <Col className='bg-[#3F2813] md:mx-5 my-2 rounded-xl md:text-2xl text-xl sm:p-0 p-1 justify-center items-center flex opacity-80' md={3} xs>Graduation Year*</Col>
         </Row>
   
       </Container>
     )
   }
  // }
  
