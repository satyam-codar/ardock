import React from 'react'
import "./Individualpage.css"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Indifirst() {
    return (
        <div className='indifirst'>
            <div className="videosection">
                <img src="/Images/guitarimg.jpg" alt="" />
            </div>
            <div className="backcolor">
            </div>
            <div className="texty">
                <div className="textytext">
                    <h3>
                        EXECUTIVE PROGRAM
                    </h3>
                    <h1>
                        AI for Business Leaders
                    </h1>
                    <h2>
                        Master the foundations of artificial intelligence so you can strategically implement AI in your company. <br /> Leverage machine learning technologies to power corporate growth, increase efficiency, and enhance customer experiences.
                    </h2>
                    <div className="firstbut">
                        <Stack direction="row" spacing={2} className="allbut">
                            <Button className='Buttoon Buttoon1'>
                                Book Free Trial
                            </Button>
                            <Button  className='Buttoon Buttoon2'>
                                Buy Now
                            </Button>
                            <Button className='Buttoon Buttoon2'>
                                Preview
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indifirst