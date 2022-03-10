import React from 'react'
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "./Courseslider.css"
import MultiActionAreaCard from '../Coursecard';
import { Hidden } from '@mui/material';

function Courseslider() {

    // ---------------------------courses-----------------------------
    const courseOne = {
        heading: "Lizard house",
        description: "izards are a widespread group of squamate reptiles, with over species ranging across all continents except Antarctica",
    };
    const carInfo = { name: "Ford", model: "Mustang" };


    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        // nextArrow: Hidden,
        // prevArrow: Hidden,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };


    return (
        <div className="App">
            <Slider {...settings}>
                <MultiActionAreaCard heading={courseOne.heading} description={courseOne.description} />
                <MultiActionAreaCard heading={courseOne.heading} description={courseOne.description} />
                <MultiActionAreaCard heading={courseOne.heading} description={courseOne.description} />
                <MultiActionAreaCard heading={courseOne.heading} description={courseOne.description} />
                <MultiActionAreaCard heading={courseOne.heading} description={courseOne.description} />
                {/* {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))} */}
            </Slider>
        </div>
    )
}

export default Courseslider;