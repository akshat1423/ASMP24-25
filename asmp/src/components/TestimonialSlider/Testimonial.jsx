import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-custom.css";
import img from "./img.png";

const testimonials = [
  {
    name: "Jinisha Sabadra",
    image: "path-to-image-1.jpg",
    feedback:
      "Industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Jinisha Sabadra",
    image: "path-to-image-2.jpg",
    feedback:
      "Industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Jinisha Sabadra",
    image: "path-to-image-3.jpg",
    feedback:
      "Industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Jinisha Sabadra",
    image: "path-to-image-4.jpg",
    feedback:
      "Industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Jinisha Sabadra",
    image: "path-to-image-5.jpg",
    feedback:
      "Industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      <div style={styles.sliderContainer}>
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
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
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
                      <img src={img} alt="" />
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
  sliderContainer: {
    width: "100%",
    maxWidth: "1500px",
    margin: "auto",
    padding: "20px 0",
    height: "45vh",
    "@media (max-width: 750px)": {
      padding: "20px 20px",
    },
  },

  testimonialItem: {
    height: "100%",
    textAlign: "center",
    background: "linear-gradient(90deg, rgba(108,108,111,0.2) 0%, rgba(251,251,254,0.2) 50%, rgba(132,128,128,0.2) 100%)",
    borderRadius: "0",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    // margin:'0 5%',
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
