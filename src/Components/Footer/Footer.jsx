import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';


import { FiPhoneCall } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { BsFacebook, BsLinkedin,BsInstagram, BsYoutube } from 'react-icons/bs';

function Footer() {
    return (
        <div className='footers'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-3">
                        <h1>
                            Quick Links
                        </h1>
                        <div className="links">
                            <h3><Link to='/'>Home</Link></h3>
                            <h3><Link to='/About'>About Us</Link></h3>
                            <h3><Link to='/ourteam'>Our Team</Link></h3>
                            <h3><Link to='/Courses'>Courses</Link></h3>
                            <h3><Link to='/Contactus'>Contact Us</Link></h3>
                            <h3 className='sociallinks'>Follow us for more!!</h3>
                            <div className="social">
                                <a a href="https://www.facebook.com/" target="_blank" >
                                <BsFacebook size={30} />
                                </a>
                            </div>
                            <div className="social">
                                <a a href="https://www.facebook.com/" target="_blank" >
                                <BsInstagram size={30} />
                                </a>
                            </div>
                            <div className="social">
                                <a a href="https://www.facebook.com/" target="_blank" >
                                <BsLinkedin size={30} />
                                </a>
                            </div>
                            <div className="social">
                                <a a href="https://www.facebook.com/" target="_blank" >
                                <BsYoutube size={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-3">
                        <h1>
                            Contact Us
                        </h1>
                        <div className="links">

                            <h3><FiPhoneCall /><a href="tel:+916377076132"> +91 6377076132</a></h3>
                            <h3><FiPhoneCall /><a href="tel:+916377076132"> +91 6377076132 </a></h3>
                            <h3> <FiMail /><a href="mailto:webmot.in@gmail.com">webmot.in@gmail.com</a></h3>
                            <h3> <FiMail /><a href="mailto:webmot.in@gmail.com">webmot.in@gmail.com</a></h3>
                            <h3><GoLocation /><a href="https://goo.gl/maps/ivncdQx35iJd15rp9" target="_blank" > Address: IIT Gandhinagar,    Gandhinagar, Gujarat</a></h3>
                            {/* <h3>Follow us for more!!</h3> */}

                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-3">
                        <h1>
                            Featured Courses
                        </h1>
                        <div className="links">

                            <h3><a href="#" target="_self"> Home </a></h3>
                            <h3><a href="#" target="_self"> About Us </a></h3>
                            <h3><a href="#" target="_self"> Courses </a></h3>
                            <h3><a href="#" target="_self"> Careers </a></h3>
                            <h3><a href="#" target="_self"> Contact Us </a></h3>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-3">
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
                                Copyright Ardock Education Technology Pvt ltd © 2021. All Rights Reserved
                            </h4>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <h4 className='footweb'>
                                <a href="https://webmot.in/" target="_blank"> 
                                Made by @WEBMOT
                                </a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer