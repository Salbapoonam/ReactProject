import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import heroImage1 from '../assets/hero-image1.jpg';
import heroImage2 from '../assets/hero-image2.jpg';
import heroImage3 from '../assets/hero-image3.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={heroImage1} alt="Temple View 1" />
          <p className="legend">Temple View 1</p>
        </div>
        <div>
          <img src={heroImage2} alt="Temple View 2" />
          <p className="legend">Temple View 2</p>
        </div>
        <div>
          <img src={heroImage3} alt="Temple View 3" />
          <p className="legend">Temple View 3</p>
        </div>
      </Carousel>
      <div className="hero-text">
        <h1>In the serene silence of the temple, the soul finds its true reflection and peace..........</h1>
      </div>
    </section>
  );
};

export default Hero;
