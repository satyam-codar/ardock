import React from 'react'
import "./Footer.css"

import { FiPhoneCall } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { BsFacebook, BsLinkedin,BsInstagram, BsYoutube } from 'react-icons/bs';

function Footer() {
    return (
        <div className='footers'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-lg-3">
                        <h1>
                            Quick Links
                        </h1>
                        <div className="links">

                            <h3>Home</h3>
                            <h3>About Us</h3>
                            <h3>Courses</h3>
                            <h3>Careers</h3>
                            <h3>Contact Us</h3>
                            <h3 className='sociallinks'>Follow us for more!!</h3>
                            <div className="social">
                                <BsFacebook size={30} />
                            </div>
                            <div className="social">
                                <BsInstagram size={30} />
                            </div>
                            <div className="social">
                                <BsLinkedin size={30} />
                            </div>
                            <div className="social">
                                <BsYoutube size={30} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-lg-3">
                        <h1>
                            Contact Us
                        </h1>
                        <div className="links">

                            <h3><FiPhoneCall /> +91 6377076132</h3>
                            <h3><FiPhoneCall /> +91 6377076132</h3>
                            <h3> <FiMail /> permender@gmail.com </h3>
                            <h3> <FiMail /> permender@gmail.com </h3>
                            <h3><GoLocation /> Address: IIT Gandhinagar,    Gandhinagar, Gujarat</h3>
                            {/* <h3>Follow us for more!!</h3> */}

                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-lg-3">
                        <h1>
                            Featured Courses
                        </h1>
                        <div className="links">

                            <h3>Home</h3>
                            <h3>About Us</h3>
                            <h3>Courses</h3>
                            <h3>Careers</h3>
                            <h3>Contact Us</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-lg-3">
                        <h1>
                            Useful links
                        </h1>
                        <div className="links">

                            <h3>FAQs</h3>
                            <h3>Cancellation & refund</h3>
                            <h3>Terms & Conditions</h3>
                            <h3>Privacy policy</h3>
                            <h3>Contact Us</h3>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <h4>
                                Copyright WhiteHat Education Technology Pvt ltd © 2021. All Rights Reserved
                            </h4>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <h4 className='footweb'>
                                Made by @WEBMOT
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer