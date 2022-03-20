import React from 'react'
import MultiActionAreaCard from './Coursecard'


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { BlogData } from '../Courses_details/Details';


function Coursessecond() {
    const courseOne = {
        heading: "Lizard house",
        description: "izards are a widespread group of squamate reptiles, with over species ranging across all continents except Antarctica",
    };
    return (
        <div className='coursessecond'>
            <div className="container">
                <div className="uppertext">
                    <h2>
                        WE CREATE BRANDS THE WORLD LOVES
                    </h2>
                    <p>
                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus . Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio.
                        In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
                    </p>
                    <div className="first_course_button">
                        <Stack direction="row" spacing={2}>
                            <Button className="butoutlined" color="secondary">
                                <a a href="https://docs.google.com/forms/d/e/1FAIpQLSelDZs8ZQMX9cMqJcKtjTmcetD8BP4tkJMcKS7Ajnsd3Kh-qg/viewform?usp=sf_link" target="_blank" >
                                    Book free trial
                                </a>
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
            <div className="allcourses">
                <div className="container-xxl rahubi">
                    <div className="row">
                        {/* <div className="col-lg-6 firstrow col-md-6">
                            <div className="gullu">

                            </div>
                        </div> */}

                        {BlogData.map((post) => (
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <MultiActionAreaCard key={post.title}  heading={post.title} image={post.imageUrl} tutor={post.tutor} level={post.level} description={post.description} age={post.age} skills={post.skills} price={post.price} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Coursessecond