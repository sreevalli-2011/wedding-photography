// src/SliderComponent.js
import React from 'react';
import Slider from 'react-slick';
import bannerImage1 from './assets/images/slider-1.jpg';
import bannerImage2 from './assets/images/slider-2.jpg';
import bannerImage3 from './assets/images/slider-3.jpg';
import bannerImage4 from './assets/images/slider-4.jpg';
import './style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
    };

    return (
        <div className="slider-container">
            <Slider {...sliderSettings}>
                
                <div>
                    <img src={bannerImage1} alt="slider-1" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
                </div>
                <div>
                    <img src={bannerImage2} alt="slider-2" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
                </div>
                <div>
                    <img src={bannerImage3} alt="slider-3" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
                </div>

                <div>
                    <img src={bannerImage4} alt="slider-4" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
                </div>
               
            </Slider>
        </div>
    );
};

export default SliderComponent;



