import React from 'react'
// import { MDBContainer, MDBInputGroup, MDBBtn, MDBInput } from "mdbreact";
import { Button } from '@mui/material';
// import { MDBContainer, MDBInputGroup, MDBDropdown, MDBDropdownToggle, MDBIcon, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {  BsLinkedin, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';


function Subscribe() {
    return (
        <div className='subscribe'>
            <div className="container">
                <div className="subscribetext">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-lg-6">
                            <h1>
                                Subscribe to ARDOCK Newletter!!
                            </h1>
                            <p>
                                tra cursus. Curabitur mollis pretium lorem et porta. Suspendisse malesuada iaculis nisi pharetra tempus. Nulla id pharet
                            </p>
                        </div>
                        <div className="col-md-6 col-sm-12 col-lg-6">
                            <div className="formbox">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField label="Email Id" color="secondary" focused className='textfieldform' />
                                    <Button type="submit" variant="contained">Subscribe</Button>
                                </Box>
                            </div>
                            <div className="formsocial"><div className="social">
                                <a href="https://www.facebook.com/" target="_blank" >
                                    <FaFacebookF size={30} />
                                </a>
                            </div>
                                <div className="social">
                                    <a href="https://www.facebook.com/" target="_blank" >
                                        <BsInstagram size={30} />
                                    </a>
                                </div>
                                <div className="social">
                                    <a  href="https://www.facebook.com/" target="_blank" >
                                        <BsLinkedin size={30} />
                                    </a>
                                </div>
                                <div className="social">
                                    <a  href="https://www.facebook.com/" target="_blank" >
                                        <BsYoutube size={30} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe