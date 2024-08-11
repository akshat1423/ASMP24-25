import React from 'react'
import './Profile.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Profile() {
  return (
    <div className="w-screen profile h-screen relative">
      <h1 className='text-[#D6AA66] sm:ml-[8vw] ml-[6vw] sm:my-[2vh] my-[6vh]'>User Profile</h1>
      <div className='absolute my-[0vh] mx-[10vw] w-[20vw] h-[20vw] md:mt-[2vh]'><svg xmlns="http://www.w3.org/2000/svg" width="20vw" height="20vw" viewBox="0 0 251 243" fill="none">
        <g filter="url(#filter0_d_233_405)">
          <ellipse cx="125.5" cy="117.5" rx="121.5" ry="117.5" fill="#0E0101" fill-opacity="0.5" shape-rendering="crispEdges" />
          <path d="M246.5 117.5C246.5 182.102 192.342 234.5 125.5 234.5C58.6576 234.5 4.5 182.102 4.5 117.5C4.5 52.8983 58.6576 0.5 125.5 0.5C192.342 0.5 246.5 52.8983 246.5 117.5Z" stroke="black" shape-rendering="crispEdges" />
        </g>
        <defs>
          <filter id="filter0_d_233_405" x="0" y="0" width="251" height="243" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_233_405" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_233_405" result="shape" />
          </filter>
        </defs>
      </svg></div>

      <div className='absolute sm:my-[23vh] sm:mx-[22.5vw] my-[6vh] mx-[22vw]'>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="4vh" viewBox="0 0 48 48" fill="none">
            <path d="M24 4.5C20.1433 4.5 16.3731 5.64366 13.1664 7.78634C9.95963 9.92903 7.46027 12.9745 5.98436 16.5377C4.50845 20.1008 4.12228 24.0216 4.8747 27.8043C5.62711 31.5869 7.4843 35.0615 10.2114 37.7886C12.9386 40.5157 16.4131 42.3729 20.1957 43.1253C23.9784 43.8777 27.8992 43.4916 31.4623 42.0156C35.0255 40.5397 38.071 38.0404 40.2137 34.8336C42.3564 31.6269 43.5 27.8567 43.5 24C43.4936 18.8303 41.437 13.8741 37.7815 10.2185C34.1259 6.56298 29.1698 4.50645 24 4.5ZM31.5 25.5H25.5V31.5C25.5 31.8978 25.342 32.2794 25.0607 32.5607C24.7794 32.842 24.3978 33 24 33C23.6022 33 23.2207 32.842 22.9393 32.5607C22.658 32.2794 22.5 31.8978 22.5 31.5V25.5H16.5C16.1022 25.5 15.7207 25.342 15.4393 25.0607C15.158 24.7794 15 24.3978 15 24C15 23.6022 15.158 23.2206 15.4393 22.9393C15.7207 22.658 16.1022 22.5 16.5 22.5H22.5V16.5C22.5 16.1022 22.658 15.7206 22.9393 15.4393C23.2207 15.158 23.6022 15 24 15C24.3978 15 24.7794 15.158 25.0607 15.4393C25.342 15.7206 25.5 16.1022 25.5 16.5V22.5H31.5C31.8978 22.5 32.2794 22.658 32.5607 22.9393C32.842 23.2206 33 23.6022 33 24C33 24.3978 32.842 24.7794 32.5607 25.0607C32.2794 25.342 31.8978 25.5 31.5 25.5Z" fill="#F8F8F8" />
          </svg>
        </button>
      </div>

      <div className='grid grid-cols-2 ml-[20vw] mr-[8vw] mt-[6vh] text-[#946d33] sm:text-2xl text-base'>
        <div className='mx-[0.8vw] my-[0.4vh] text-right'>Roll Number</div>
        <div className='mx-[0.8vw] my-[0.4vh] text-center bg-[#3F2813] rounded-xl px-[0.8vw] opacity-65 w-[70%]'>23b0689</div>

        <div className='mx-[0.8vw] my-[0.4vh] text-right'>Username</div>
        <div className='mx-[0.8vw] my-[0.4vh] text-center bg-[#3F2813] rounded-xl px-[0.8vw] opacity-65 w-[70%]'></div>
      </div>

      <div className='grid sm:grid-cols-2 grid-cols-[120px_minmax(800px,_1fr)] sm:ml-[0vw] ml-[0vw] mr-[8.3vw] md:mt-[5vh] xl:mt-[15vh] mt-[4.2vh] text-[#946d33] sm:text-2xl text-base'>
        <div className='mx-[0.8vw] my-[0.4vh] text-right'>LDAP</div>
        <div className='mx-[0.8vw] my-[0.4vh] text-center w-fit bg-[#3F2813] rounded-xl px-[0.8vw] opacity-65 lg:w-[55%]'>23b0689@gmail.com</div>

        <div className='mx-[0.8vw] my-[0.4vh] text-right'>Personal Email</div>
        <div className='mx-[0.8vw] my-[0.4vh] text-center w-fit bg-[#3F2813] rounded-xl px-[0.8vw] opacity-65 lg:w-[55%]'>aryan223653badkul@gmail.com</div>
      </div>

      <div className='grid grid-cols-2 sm:ml-[0vw] ml-[8vw] mr-[8.3vw] mt-[4.2vh] text-[#946d33] sm:text-2xl text-base'>
        <div className='mx-[0.8vw] my-[0.33vh] text-right'>Hostel</div>
        <div className='mx-[0.8vw] my-[0.33vh] text-center bg-[#3F2813] rounded-xl px-[0.8vw] opacity-65 sm:w-[25%] w-[65%]'></div>

        <div className='mx-[0.8vw] my-[0.33vh] text-right'>Room No.</div>
        <div className='mx-[0.8vw] my-[0.33vh] text-center bg-[#3F2813] rounded-xl px-[0.8vw] opacity-65 sm:w-[25%] w-[65%]'></div>

        <div className='sm:mx-[0.8vw] mx-[0vw] my-[0.4vh] text-right'>Academic Program</div>
        <div className='mx-[0.8vw] my-[0.4vh] text-center bg-[#3F2813] rounded-xl px-[0.8vw] opacity-65 sm:w-[55%] w-[65%]'></div>
      </div>

      <div className='grid grid-cols-2 ml-[30vw] mt-[5vh] text-[#946d33] sm:text-2xl text-base'>
        <div className='sm:mx-[5vw] my-[0.4vh] text-center bg-[#3F2813] rounded-xl px-[0.8vw] opacity-65 sm:w-[60%] w-[90%]'>Department*</div>
        <div className='sm:mx-[5vw] my-[0.4vh] text-center bg-[#3F2813] rounded-xl px-[0.8vw] opacity-65 sm:w-[60%] w-[90%]'>Degree*</div>

        <div className='sm:mx-[5vw] my-[0.4vh] text-center bg-[#3F2813] rounded-xl px-[0.8vw] opacity-65 sm:w-[60%] w-[90%]'>Joining Year*</div>
        <div className='sm:mx-[5vw] my-[0.4vh] text-center bg-[#3F2813] rounded-xl px-[0.8vw] opacity-65 sm:w-[60%] w-[90%]'>Graduating Year*</div>
      </div>


    </div>



  )
}
