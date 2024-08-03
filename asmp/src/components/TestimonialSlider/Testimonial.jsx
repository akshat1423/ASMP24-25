import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper-custom.css'; // Import the custom CSS

const testimonials = [
  {
    name: 'Jinisha Sabadra',
    image: 'path-to-image-1.jpg', // Replace with your image path
    feedback: 'A long testimonial text goes here...',
  },
  {
    name: 'Jinisha Sabadra',
    image: 'path-to-image-2.jpg', // Replace with your image path
    feedback: 'Another long testimonial text goes here...',
  },
  {
    name: 'Jinisha Sabadra',
    image: 'path-to-image-3.jpg', // Replace with your image path
    feedback: 'Another long testimonial text goes here...',
  },
  {
    name: 'Jinisha Sabadra',
    image: 'path-to-image-4.jpg', // Replace with your image path
    feedback: 'Another long testimonial text goes here...',
  },
  {
    name: 'Jinisha Sabadra',
    image: 'path-to-image-5.jpg', // Replace with your image path
    feedback: 'Another long testimonial text goes here...',
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  return (<>
    <div className="testimonialHeading" style={{display:'flex', alignItems:'center',justifyContent:'center', fontSize:'3rem',fontWeight:'500'}}>Testimonials</div>
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
            1050: {
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
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={styles.image}
              />
              <h3 style={styles.name}>{testimonial.name}</h3>
              <p style={styles.feedback}>{testimonial.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

const styles = {
  sliderContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: 'auto',
    padding: '20px 0',
    height:'40vh'
  },
  testimonialItem: {
    height:'100%',
    textAlign: 'center',
    padding: '20px',
    background: 'linear-gradient(90deg, rgba(108,108,111,0.5) 0%, rgba(251,251,254,0.5) 47%, rgba(132,128,128,0.5) 100%)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    margin:'0 5%'

  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  name: {
    fontSize: '1.2em',
    marginBottom: '10px',
  },
  feedback: {
    fontSize: '1em',
    color: '#555',
  },
};

export default TestimonialSlider;
