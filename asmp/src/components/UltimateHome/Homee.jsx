import React from 'react';
import About from "../About/About";
import Home from "../Home/Home";
import Faq from "../Faq";
import TestimonialSlider from "../TestimonialSlider/Testimonial";
import CursorAnimation from "../CursorAnimation";
import Lottie from "lottie-react";
import animationData from "../../assets/scroll.json";
import Footer from "../Footer/Footer";
import HomeBackground from "../../assets/images/home_bg.png"

export default function Homee() {
  const scrollAnimation = () => {
    const scrollElement = document.body;
    const currentScrollPosition = scrollElement.scrollTop;
    scrollElement.scrollTo({
      top: currentScrollPosition + 1000,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div 
        style={{
          width: '100vw',
          height: 'fit-content',
          backgroundImage: `url(${HomeBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CursorAnimation />
        <div  
          style={{
            position: "fixed",
            bottom: "2%",
            right: "2%",
            width: "5%",
            height: "auto",
            zIndex: 1000,
            cursor: "pointer",
          }}
        >

          <Lottie
            animationData={animationData}
            onClick={() => {
              console.log("Scroll button clicked!");
              scrollAnimation();
            }}
          />
        </div>
        <div style={{width:'100vw',height:'10vh',backgroundColor:'#313131'}}></div>
        <Home />
        <About />
        <div style={{height:'1px'}} id="testimonials"></div>
        <TestimonialSlider />
        <div id="faq"></div>
        <Faq />
        <Footer />
      </div>
    </>
  );
}
