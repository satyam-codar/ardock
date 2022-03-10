import React from 'react'

import "./Courses.css"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Coursesfirst() {
    return (
        <div className='coursesfirstw'>
            <div className="container">
                <h2>
                    Our Courses
                </h2>
                <h1>
                    Back to ardock classes
                </h1>
                <div className="first_course_button">
                    <Stack direction="row" spacing={2}>
                        <Button className="butoutlined" color="secondary">
                            Book free trial
                        </Button>
                    </Stack>
                </div>
                {/* <div className="firstbut">
                    <Stack direction="row" spacing={2}>
                        <Button color="secondary" className='Butt'>
                            Read more
                        </Button>
                    </Stack>
                </div> */}
            </div>
        </div>
    )
}

export default Coursesfirst