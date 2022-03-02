import React from 'react'
import FormPage from './Contactusform'

function Contfirst() {
    return (
        <div className='contfirst'>
            <div className="container">
                <div className="contfirstrow">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="image">
                                <img src="/Images/contactman.png" alt="" />

                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="contactform">
                                <h1>
                                    Contact Us!!
                                </h1>
                                <FormPage/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contfirst