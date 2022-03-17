import React from 'react'
import $ from 'jquery';

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { BsLinkedin, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';


function Subscribe() {
    const PostToGoogle = async (e) => {
        e.preventDefault();
        var field2 = $("#emailField").val();
        if (field2 === "") {
            alert('Please Fill Your Email');
            document.getElementById("emailField").focus();
            return false;
        }


        $.ajax({
            url: "https://docs.google.com/forms/u/5/d/e/1FAIpQLSe28W5GxgYb0s_jBIIxtMmLHBtnW4rK_R_LrIQPsshqHpvA4Q/formResponse?",
            data: { "entry.525768553": field2 },
            type: "POST",
            dataType: "xml",
            success: function (d) {
            },
            error: function (x, y, z) {

                $('#success-msg1').show();
                $('#form').hide();

            }
        });
        return false;
    };
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
                                    // sx={{
                                    //     '& > :not(style)': { m: 1, width: '25ch' },
                                    // }}
                                    className='subscribeform'
                                    noValidate
                                    autoComplete="off"
                                    id="form" target="_self" onSubmit={PostToGoogle} action="" autocomplete="off"
                                >
                                    <TextField label="Email Id" color="secondary" focused className='textfieldform' id="emailField" name="entry.525768553" />
                                    <Button type="submit" variant="contained" id="send" value="Submit" >Subscribe</Button>
                                </Box>
                                <h3 id="success-msg1">
                                    You have successfully subscibed ARDOCK newsletter.
                                </h3>
                            </div>
                            <div className="formsocial">
                                <div className="social">
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
                                    <a href="https://www.facebook.com/" target="_blank" >
                                        <BsLinkedin size={30} />
                                    </a>
                                </div>
                                <div className="social">
                                    <a href="https://www.facebook.com/" target="_blank" >
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