import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-custom.css";
import img from "./img.png";
import img4 from './shreyas[1].png'
import img1 from './harshil[1].png'
import img2 from './dhruv garg[1].png'
import img3 from './jasmine[1].png'

const testimonials = [
  {
    name: "Harshil Khatri",
    image: img1,
    feedback:
      "ASMP paired me with an exceptional mentor whose humble approach and industry insights have been invaluable. His support, from college to startup plans, has boosted my confidence. I’m grateful to the Student Alumni Relations Cell for connecting me with a mentor who has significantly shaped my future.",
  },
  {
    name: "Dhruv Garg",
    image: img2,
    feedback:
      "ASMP connected me with an amazing mentor in analytics who helped me navigate my career path. Over the past year, he’s guided me through my internship, provided data science resources, reviewed my resume, and supported me whenever I felt lost. Though we haven’t met in person yet, I hope to soon. Thanks, SARC!",
  },
  {
    name: "Jasmine Multani",
    image: img3,
    feedback:
      "My ASMP mentor offered invaluable support and practical insights into consulting. He regularly checked on my progress and encouraged long-term career goals. His advice has greatly impacted my growth. I’m thankful to ASMP for connecting me with a mentor who’s become a lifelong friend.",
  },
  {
    name: "Shreyas Sinha",
    image: img4,
    feedback:
      "ASMP has been amazing, providing me with a mentor who’s always there for advice and guidance. His support during the BCG Ideathon was invaluable, and despite his busy schedule, he made time to keep me on track. I’m grateful to ASMP for connecting me with a mentor who truly cares about my success."
  },
  
];

const TestimonialSlider = () => {
  const testimonialRef = useRef(null);

  useEffect(() => {
    const scrollToTestimonial = () => {
      testimonialRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("scrollToTestimonials", scrollToTestimonial);

    return () => {
      window.removeEventListener("scrollToTestimonials", scrollToTestimonial);
    };
  }, []);

  return (
    <div ref={testimonialRef} id="testimonials">
      <div style={{ height: "10vh" }}></div>
      <div
        className="testimonialHeading"
        style={{
          marginTop: "2%",
          fontFamily: "Fraunces, serif",
          fontSize: "4vw",
          fontWeight: "700",
          lineHeight: "1.2",
          textAlign: "left",
          marginLeft: "10%",
          color: "rgba(255, 255, 255, 1)",
        }}
      >
        TESTIMONIALS
      </div>
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          centeredSlides={true}
          breakpoints={{
            1300: {
              slidesPerView: 3,
            },
            750: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div style={styles.testimonialItem}>
                <div
                  style={styles.overContainer}
                >
                  <div
                    className="name-heading"
                    style={{
                      width: "100%",
                      color: "white",
                      fontFamily: "Fraunces, serif",
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="pic-content"
                    style={{ height: "85%", width: "100%", display: "flex" }}
                  >
                    <div
                      className="image"
                      style={{
                        height: "100%",
                        width: "35%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img src={testimonial.image} alt="" />
                    </div>
                    <div
                      className="testimonal-content"
                      style={{
                        color: "white",
                        fontFamily: "Fraunces, serif",
                      }}
                    >
                      {testimonial.feedback}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const styles = {
  // sliderContainer: {
  //   width: "100%",
  //   maxWidth: "1500px",
  //   margin: "auto",
  //   padding: "10px 0",
  //   height: "45vh",
  // },
  // mediaQuery: {
  //   '@media (maxWidth: 750px)': {
  //     sliderContainer: {
  //       padding: "10px 30px",
  //     },
  //   },
  // },

  testimonialItem: {
    height: "100%",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    overflow: "hidden",
    padding: "20px",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    "@media (maxWidth: 750px)": {
      padding: "10px",
    },
  },

  overContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    

    "@media (maxWidth: 750px)": {
      margin: "0 20%",
    },
  },

  image: {
    width: "auto",
    height: "auto",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
  },

  name: {
    fontSize: "1.2em",
    marginBottom: "10px",
  },

  feedback: {
    fontSize: "1em",
    color: "#555",
  },
};

export default TestimonialSlider;