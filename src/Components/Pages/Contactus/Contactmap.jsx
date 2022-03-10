import React from 'react'

import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';


function Contactmap() {
    defineLordIconElement(loadAnimation);
    return (
        <div className='contactmap'>
            <div className="contflex">
                <div className="contdetails">
                    <div className="contmapcontn">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-12">
                                <div className="contmapicon">
                                    <div className="conticon">
                                        <script src="https://cdn.lordicon.com/lusqsztk.js"></script>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/zzcjjxew.json"
                                            trigger="morph-two-way"
                                            colors="primary:#999999,secondary:#999999"
                                            style={{ width: "70px", height: "70px" }}>
                                        </lord-icon>
                                    </div>
                                    <h1>
                                        Address:
                                    </h1>
                                    <h2>
                                        121 Rock Sreet, 21 Avenue,
                                        <br />
                                        New York, NY 92103-9000
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12">
                                <div className="contmapicon">
                                    <div className="conticon">
                                        <script src="https://cdn.lordicon.com/lusqsztk.js"></script>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/rhvddzym.json"
                                            trigger="morph-two-way"
                                            colors="primary:#999999,secondary:#999999"
                                            style={{ width: "70px", height: "70px" }}>
                                        </lord-icon>
                                    </div>
                                    <h1>
                                        Address:
                                    </h1>
                                    <h2>
                                        121 Rock Sreet, 21 Avenue,
                                        <br />
                                        New York, NY 92103-9000
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12">
                                <div className="contmapicon">
                                    <div className="conticon">
                                        <script src="https://cdn.lordicon.com/lusqsztk.js"></script>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/cnbtojmk.json"
                                            trigger="morph-two-way"
                                            colors="primary:#999999,secondary:#999999"
                                            style={{ width: "70px", height: "70px" }}>
                                        </lord-icon>
                                    </div>
                                    <h1>
                                        Address:
                                    </h1>
                                    <h2>
                                        121 Rock Sreet, 21 Avenue,
                                        <br />
                                        New York, NY 92103-9000
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12">
                                <div className="contmapicon">
                                    {/* <div className="conticon">
                                        <script src="https://cdn.lordicon.com/lusqsztk.js"></script>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/zzcjjxew.json"
                                            trigger="morph-two-way"
                                            colors="primary:#999999,secondary:#999999"
                                            style={{ width: "70px", height: "70px" }}>
                                        </lord-icon>
                                    </div> */}
                                    <h1 className='seperate'>
                                        CONTACT US:
                                    </h1>
                                    <h2>
                                        Contact us for a quote. 
                                        <br />
                                        Help or to join the team.
                                    </h2>
                                    <div className="formsocial">
                                        <div className="social">
                                            <FaFacebookF size={30} />
                                        </div>
                                        <div className="social">
                                            <BsInstagram size={30} />
                                        </div>
                                        <div className="social">
                                            <FaLinkedinIn size={30} />
                                        </div>
                                        <div className="social">
                                            <BsYoutube size={30} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contmap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8694317053364!2d72.68206021533823!3d23.21142851506699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2adec1f16d8d%3A0xdc447b8706689bc3!2sIndian%20Institute%20Of%20Technology%E2%80%93Gandhinagar%20(IIT%E2%80%93Gandhinagar)!5e0!3m2!1sen!2sin!4v1646308972877!5m2!1sen!2sin"  allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contactmap