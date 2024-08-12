import React, { useEffect, useState } from 'react'
import './Profile.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UseFetchProfile from '../hooks/useFetchProfile';

export default function Profile() {
  const { fetchProfile, fetchedProfile } = UseFetchProfile();
  useEffect(() => {
    fetchProfile();
    console.log("Fetched Profile", fetchedProfile);
  }, []);

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadProfile = async () => {
  //     await fetchProfile();
  //     setLoading(false);
  //   };

  //   loadProfile();
  // }, [fetchProfile]);

  // if (loading) {
  //   return <div>Loading...</div>; // Show loading message or spinner
  // }

  // if (!fetchedProfile) {
  //   return <div>No profile data available.</div>; // Handle case where profile data is not available
  // }

  if (fetchedProfile){
    return (
      <Container className="w-screen h-screen py-24 profile cursor-auto" fluid>
         <h1 className='md:pt-20 xl:py-0 text-center text-[#282624]'>User Profile</h1>
   
         <Row className='lg:px-20'>
           <Col className='my-2' md={3} xs>Roll Number</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl justify-center items-center flex opacity-80' md={6} xs></Col>
         </Row>
   
         <Row className='lg:px-20'>
           <Col className='my-2' md={3} xs>Username</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-xs justify-center items-center flex opacity-80' md={6} xs></Col>
         </Row>
   
         <Row className='lg:px-20'>
           <Col className='my-2' md={3} xs>LDAP</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-xs justify-center items-center flex opacity-80' md={6} xs></Col>
         </Row>
   
         <Row className='lg:px-20'>
           <Col className='my-2' md={3} xs>Personal Email</Col>
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-xs text-[11px] justify-center items-center flex opacity-80' md={6} xs>{fetchedProfile.personal_email}</Col>
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
           <Col className='bg-[#3F2813] my-2 rounded-xl md:text-2xl text-xs justify-center items-center flex opacity-80' md={6} xs>Program*</Col>
         </Row>
   
         <Row className='lg:px-20 mt-4'>
           <Col md={2} sm={0}></Col>
           <Col className='bg-[#3F2813] md:mx-5 mx-2 my-2 rounded-xl md:text-2xl text-xl sm:p-0 p-1 justify-center items-center flex opacity-80' md={3} xs>Department*</Col>
           <Col className='bg-[#3F2813] md:mx-5 my-2 rounded-xl md:text-2xl text-xl sm:p-0 p-1 justify-center items-center flex opacity-80' md={3} xs>Degree*</Col>
         </Row>
   
         <Row className='lg:px-20'>
         <Col md={2} sm={0}></Col>
           <Col className='bg-[#3F2813] md:mx-5 mx-2 my-2 rounded-xl md:text-2xl text-xl sm:p-0 p-1 justify-center items-center flex opacity-80' md={3} xs>Joining Year*</Col>
           <Col className='bg-[#3F2813] md:mx-5 my-2 rounded-xl md:text-2xl text-xl sm:p-0 p-1 justify-center items-center flex opacity-80' md={3} xs>Graduation Year*</Col>
         </Row>
   
       </Container>
     )
   }
  }
  
