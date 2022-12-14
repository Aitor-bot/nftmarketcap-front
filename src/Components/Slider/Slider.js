import React from 'react';
import '../Slider/Slider.scss'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1250 },
        items: 4
    },
    dektop2: {
        breakpoint: { max: 1250, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Slider() {
    return (
        <div className='slider'>
            <div className='slider_title'>TOP </div>

            <Carousel responsive={responsive}>
                <div className='slider_div'> </div>
                <div className='slider_div'> </div>
                <div className='slider_div'> </div>
                <div className='slider_div'> </div>
                <div className='slider_div'> </div>
                <div className='slider_div'> </div>


            </Carousel>
        </div>
    );
}

export default Slider;
