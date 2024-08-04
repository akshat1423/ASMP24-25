
import About from "../About/About"
import Home from "../Home/Home"
import Faq from "../Faq"
import TestimonialSlider from "../TestimonialSlider/Testimonial"
import CursorAnimation from '../CursorAnimation'

export default function Homee(params) {

    return(
        <>
        <CursorAnimation />
      <Home />
      <About/>
      <div id="testimonials"></div>
      <TestimonialSlider></TestimonialSlider>
      <div id="faq"></div>
      <Faq />
        </>
    )
}