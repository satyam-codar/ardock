import React from 'react'
import CustomizedAccordions from './Homeaccordian'

function Homeaccor() {
    return (
        <div className='homeaccor'>
            <div className="container">
                <div className="heading">
                    <img src="/Images/FAQ.png" alt="scfasdfa" />
                </div>
                <div className="homeaccordian">
                    <CustomizedAccordions />
                </div>
            </div>
        </div>
    )
}

export default Homeaccor