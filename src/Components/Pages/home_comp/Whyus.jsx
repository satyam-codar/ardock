import React from 'react'
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

defineLordIconElement(loadAnimation);

function Whyus() {
    
    return (
        <div className='whyus'>
            <div className="container">

                <h1>Why study with ARDOCK</h1>
                <p>Discover your Perfect program in our courses</p>
                <div className="bulletss">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-4">
                            <div className="bulltex">
                                <div className="ico ora">
                                    <script src="https://cdn.lordicon.com/lusqsztk.js"></script>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/lxlstztz.json"
                                        trigger="morph-two-way"
                                        colors="primary:#d7993c,secondary:#d7993c"
                                        style={{ width: "60px", height: "60px" }}>
                                    </lord-icon>
                                </div>
                                <h3>
                                    Learn anything
                                </h3>
                                <p>
                                    sed curses turpis vitae torotu mauris sit amet gravida tincidunt. Nam quis pretium quam. Nulla suscipit quis liber
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4">
                            <div className="bulltex">
                                <div className="ico blu">
                                    <script src="https://cdn.lordicon.com/lusqsztk.js"></script>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/bkqtuigh.json"
                                        trigger="morph-two-way"
                                        colors="primary:#737CEA,secondary:#737CEA"
                                        style={{ width: "60px", height: "60px" }}>
                                    </lord-icon>
                                </div>
                                <h3>
                                    Flexible Learning
                                </h3>
                                <p>
                                    sed curses turpis vitae torotu mauris sit amet gravida tincidunt. Nam quis pretium quam. Nulla suscipit quis liber
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4">
                            <div className="bulltex">
                                <div className="ico gre">
                                    <script src="https://cdn.lordicon.com/lusqsztk.js"></script>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/wxnxiano.json"
                                        trigger="morph-two-way"
                                        colors="primary:#1FC589,secondary:#1FC589"
                                        style={{ width: "60px", height: "60px" }}>
                                    </lord-icon>
                                </div>
                                <h3>
                                    Learn with experts
                                </h3>
                                <p>
                                    sed curses turpis vitae torotu mauris sit amet gravida tincidunt. Nam quis pretium quam. Nulla suscipit quis liber
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyus