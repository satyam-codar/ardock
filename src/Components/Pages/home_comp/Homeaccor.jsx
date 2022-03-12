import React from 'react'
import ControlledAccordions from './Homeaccordian'

function Homeaccor() {
    return (
        <div className='homeaccor'>
            <div className="container">
                <div className="heading">
                    <img src="/Images/FAQ.png" alt="scfasdfa" />
                </div>
                <div className="homeaccordian">
                    <ControlledAccordions/>
                </div>
            </div>
        </div>
    )
}

export default Homeaccor