import React from "react";
import LazyLoad from 'react-lazyload';
import asmpTrailerMp4 from '../../assets/videos/ASMPkatrailer.mp4';
import asmpTrailerWebm from '../../assets/videos/ASMPkaTrailer.webm';
import posterImage from '../../assets/images/posterimg.png';

import './Home.css';

function Home () {
  

  return (
    <>
    <div className="home">
     <div className="mainSection">

          <div className="video">
            <LazyLoad height={100} offset={100}>
              <video controls width="100%" style={{ maxWidth: '100%' }} poster={posterImage}>
              <source src={asmpTrailerMp4} type="video/mp4" />
              <source src={asmpTrailerWebm} type="video/webm" />
              ASMP VIDEO
            </video>
            </LazyLoad>
          </div>
          </div>
        </div>
    </>
  )
}
export default Home