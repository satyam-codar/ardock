import React from 'react'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Contact() {
    return (
        <div className='container'>
            <div className="contact">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <h1>
                            Happy to help you!
                        </h1>
                        <p>
                            Need more details? Our expert academic counsellors will be happy to patiently explain everything that you wan to know.
                        </p>
                        <div className="buttonu">

                            <Stack direction="row" spacing={2}>
                                <Button color="secondary">
                                    Speak to an expert
                                </Button>
                                {/* <Button variant="outlined" color="error">
                                    Contact Us
                                </Button> */}
                            </Stack>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <div className="teaching">
                            <img src="/Images/teacher.png" alt="lkjlkj" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact