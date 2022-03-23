import React from 'react'
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "./Courseslider.css"
import MultiActionAreaCard from '../Coursecard';
import { Hidden } from '@mui/material';

import { BlogData } from '../../Courses_details/Details';


function Courseslider() {

    // ---------------------------courses-----------------------------

    const FeaturedCourses= BlogData.filter((course)=>{
        return course.featured === "true";
    })

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight size={23} />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft size={23} />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        dots: false, 
        slidesToShow: 2,
        slidesToScroll: 1,
        // arrows:false,
        // initialSlide: 0,
        variableWidth: true,
        className: " slider variable-width",
        swipeToSlide: true,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };


    return (
        <div>
            <Slider {...settings} className="cardoo">
                
                {FeaturedCourses.map((course)=>(
                    <div style={{ width: "360px" }}>
                        <MultiActionAreaCard image={course.imageUrl} heading={course.title} description={course.description} nav={course.nav}/>
                    </div>
                ))
                }

            </Slider>
        </div>
    )
}

export default Courseslider;