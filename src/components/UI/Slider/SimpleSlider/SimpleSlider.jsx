import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SimpleSlider.css'

function SimpleSlider({ children }) {
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
    };

    return (
        <>
            <Slider {...settings}>
                {children}
            </Slider>
        </>
    );
}

export default SimpleSlider;
