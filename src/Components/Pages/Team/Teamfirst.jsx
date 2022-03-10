import React from 'react'
import "./Team.css"
function Teamfirst() {
    return (
        <div className='teamfirst'>
            <div className="container">
                <div className="team">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-lg-6 col-sm-12">
                            <div className="image imagee">
                                <img src="/Images/firstone.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12">
                            <div className="image">
                                <div className="smallpic">
                                    <div className="indipic">
                                        <div className="text">
                                        <h1>
                                            Our team
                                        </h1>
                                        <p>
                                            Sample text. Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                                        </p>
                                            </div>
                                    </div>
                                    <div className="indipic">
                                        <img src="/Images/three.jpg" alt="" />
                                    </div>
                                    <div className="indipic">
                                        <img src="/Images/one.jpg" alt="" />
                                    </div>
                                    <div className="indipic">
                                        <img src="/Images/two.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Teamfirst