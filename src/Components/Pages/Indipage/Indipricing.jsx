import React from 'react'


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import { BsFillCaretRightFill } from 'react-icons/bs';


function Indipricing(props) {
    return (
        <div className='indipricing'>
            <h2>
                Get started today
            </h2>
            <h1>
                AI for Business Leaders Executive Program {props.heading}
            </h1>
            <div className="container">
                <div className="pricing">
                    <div className="row">

                        { props.pricing.map((pile)=>(
                            <div className="col-md-6 col-lg-6 col-sm-12">
                                <div className="pricingcard">
                                    <div className="pricingcarduppr">
                                        <h2 className='access'>
                                            {pile.access_time}-MONTH ACCESS
                                        </h2>
                                        <h3>
                                            Save an extra {pile.saving_percent}%
                                        </h3>
                                        <hr />
                                        <h1>
                                            {pile.price}
                                        </h1>
                                        <h3 className='lowaccess'>
                                            for {pile.access_time}-month access
                                        </h3>
                                    </div>
                                    <div className="firstbut">
                                        <Stack direction="row" spacing={2} className="allbut">
                                            <Button className='Buttoon Buttoon2'>
                                                Buy Now
                                            </Button>
                                        </Stack>
                                    </div>
                                    <p>
                                        {pile.bullet_points.map((pile) => (
                                            <>
                                                <BsFillCaretRightFill /> {pile.point} <br />

                                            </>
                                        ))
                                        }
                                    </p>
                                </div>
                            </div>
                            
                        ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indipricing