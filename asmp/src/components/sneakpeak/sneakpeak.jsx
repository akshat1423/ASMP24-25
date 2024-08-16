import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./Sneakpeak.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CursorAnimation from "../CursorAnimation";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

function Sneakpeak() {
  const slides = [
    {
      title: "Co-founder & CTO - Velocity",
      location: "Mumbai",
      description: "Chemical Engineering, 2014",
      link: "/Login",
      buttonText: "Grab Mentorship Now!",
    },
    {
      title: "Co-founder & CTO - Velocity",
      location: "Mumbai",
      description: "Chemistry, 2014",
      link: "/Login",
      buttonText: "Grab Mentorship Now!",
    },
    {
      title: "Co-founder & CTO - Velocity",
      location: "Mumbai",
      description: "Civil Engineering, 2014",
      link: "/Login",
      buttonText: "Grab Mentorship Now!",
    },
    {
      title: "Co-founder & CTO - Velocity",
      location: "Mumbai",
      description: "Electrical Engineering, 2014",
      link: "/Login",
      buttonText: "Grab Mentorship Now!",
    },
    {
      title: "Co-founder & CTO - Velocity",
      location: "Mumbai",
      description: "Chemical Engineering, 2014",
      link: "/Login",
      buttonText: "Grab Mentorship Now!",
    },
    {
      title: "Co-founder & CTO - Velocity",
      location: "Mumbai",
      description: "Mechanical Engineering, 2014",
      link: "/Login",
      buttonText: "Grab Mentorship Now!",
    },
  ];

  return (
    <>
      <CursorAnimation />
      <div className="sneakpeak-container">
        <br />
        <h1 className="heading">Sneak Peeks</h1>
        <Swiper
          spaceBetween={60}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          // autoplay={{
          //   delay: 5000,
          // }}
          loop={true}
          slidesPerView={2}
          breakpoints={{
            1024: {
              slidesPerView: 2, // 3 slides for large screens
            },
            768: {
              slidesPerView: 1, // 1 slide for medium screens
            },
            576: {
              slidesPerView: 1, // 1 slide for small screens
            },
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          className="swiper_container"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <h4>
                <b>{slide.title}</b>
              </h4>
              <h6>
                <b>{slide.location}</b>
              </h6>
              <p className="mohit">{slide.description}</p>
              <Link to={slide.link}>
                <button className="btn" style={{ margin: "20px" }}>
                  {slide.buttonText}
                </button>
              </Link>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Sneakpeak;
