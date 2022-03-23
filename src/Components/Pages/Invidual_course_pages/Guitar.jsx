import React from 'react'

import { BlogData } from '../Courses_details/Details'
import Indipage from '../Indipage';
import Indiaboutprof from '../Indipage/Indiaboutprof';
import Indifaq from '../Indipage/Indifaq';
import Indifirst from '../Indipage/Indifirst';
import Indipricing from '../Indipage/Indipricing';
import Indisecond from '../Indipage/Indisecond';
import Indisyllabus from "../Indipage/Indisyllabus.jsx"

function Guitar() {

    const Course1 = BlogData.filter((element) => {
        return element.course === "course1";
    })


    return (
        <>

            {Course1.map((post) => (
                <>
                    <Indifirst key={post.title} heading={post.title} description={post.description} />
                    <Indisecond key={post.title} Estimated_time={post.estimated_time} speed={post.course_speed} enroll_by={post.enroll_by} enroll_des={post.enroll_des} tutor={post.tutor} tutor_des={post.tutor_des} />
                    <Indiaboutprof key={post.title} tutor={post.tutor} prof_des={post.prof_des}/>
                    <Indisyllabus key={post.title} breakdown={post.breakdown_number} program_breakdown={post.program_breakdown}  />
                    <Indipricing  key={post.title} heading={post.title} pricing={post.pricing} />
                    <Indifaq />
                </>
            ))}

        </>
    )
}

export default Guitar