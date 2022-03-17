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
        heading: "Lizard house1",
        description: "izards are a widespread group of squamate reptiles, with over species ranging across all continents except Antarctica",
    };
    const courseOne2 = {
        heading: "Lizard house2",
        description: "izards are a widespread group of squamate reptiles, with over species ranging across all continents except Antarctica",
    };
    const courseOne3 = {
        heading: "Lizard house3",
        description: "izards are a widespread group of squamate reptiles, with over species ranging across all continents except Antarctica",
    };
    const courseOne4 = {
        heading: "Lizard house4",
        description: "izards are a widespread group of squamate reptiles, with over species ranging across all continents except Antarctica",
    };


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
                <div style={{ width: "360px"  }}>
                <MultiActionAreaCard heading={courseOne.heading} description={courseOne.description} />
                </div>
                <div  style={{ width: "360px"   }}>
                <MultiActionAreaCard heading={courseOne2.heading} description={courseOne2.description} />
                </div>
                <div  style={{ width: "360px"   }}>
                <MultiActionAreaCard heading={courseOne3.heading} description={courseOne3.description} />
                </div>
                <div  style={{ width: "360px"   }}>
                <MultiActionAreaCard heading={courseOne4.heading} description={courseOne4.description} />
                </div>
                <div  style={{ width: "360px"   }}>
                <MultiActionAreaCard heading={courseOne.heading} description={courseOne.description} />
                </div>
                <div  style={{ width: "360px"   }}>
                <MultiActionAreaCard heading={courseOne2.heading} description={courseOne2.description} />
                </div>
                <div  style={{ width: "360px"   }}>
                <MultiActionAreaCard heading={courseOne3.heading} description={courseOne3.description} />
                </div>
                <div  style={{ width: "360px"   }}>
                <MultiActionAreaCard heading={courseOne4.heading} description={courseOne4.description} />
                </div>
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