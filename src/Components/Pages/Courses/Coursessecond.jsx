import React from 'react'
import MultiActionAreaCard from './Coursecard'


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
                    <h1>
                        About Design Studio
                    </h1>
                    <p>
                        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus . Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio.
                        In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
                    </p>
                    <div className="first_course_button">
                        <Stack direction="row" spacing={2}>
                            <Button className="butoutlined" color="secondary">
                                Book free trial
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
            <div className="allcourses">
                <div className="container-xxl rahubi">
                    <div className="row">
                        <div className="col-lg-6 firstrow">
                            <div className="gullu">

                            </div>
                            <MultiActionAreaCard heading={courseOne.heading} description={courseOne.description} />
                            <MultiActionAreaCard heading={courseOne.heading} description={courseOne.description} />
                            <MultiActionAreaCard heading={courseOne.heading} description={courseOne.description} />
                        </div>
                        <div className="col-lg-6">

                            <MultiActionAreaCard heading={courseOne.heading} description={courseOne.description} />
                            <MultiActionAreaCard heading={courseOne.heading} description={courseOne.description} />
                            <MultiActionAreaCard heading={courseOne.heading} description={courseOne.description} />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Coursessecond