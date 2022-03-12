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
                            <a a href="https://docs.google.com/forms/d/e/1FAIpQLSelDZs8ZQMX9cMqJcKtjTmcetD8BP4tkJMcKS7Ajnsd3Kh-qg/viewform?usp=sf_link" target="_blank" >
                                Book free trial
                            </a>
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