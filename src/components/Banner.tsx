import React from 'react';
import { Carousel } from 'antd';
import './Banner.css';

const Banner: React.FC = () => {
  return (
    <div className="banner-wrapper">
      <Carousel autoplay effect="scrollx" dots={false}>
        <div className="banner-slide">
          <img src={require('../assets/bride.jpg')} alt="Bride" className="" />
        </div>
        <div className="banner-slide">
          <img src={require('../assets/groom.jpg')} alt="Groom" className="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
