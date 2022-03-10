import React from 'react'
import MultiActionAreaCard from './Coursecard'
import Courseslider from './Courseslider/Courseslider'

function Homecourse() {
    return (
        <div className='homecourse'>
            <div className="container">
                <h2>
                    Find a Course
                </h2>
                <h1>
                    Featured courses
                </h1>
                <div className="cardpart">
                    {/* <MultiActionAreaCard/> */}
                    <Courseslider/>
                </div>
                    {/* <img src="/Images/bokesh.jpg" alt="" /> */}
            </div>
        </div>
    )
}

export default Homecourse