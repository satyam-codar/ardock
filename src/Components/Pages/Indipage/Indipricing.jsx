import React from 'react'


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import { BsFillCaretRightFill } from 'react-icons/bs';


function Indipricing() {
    return (
        <div className='indipricing'>
            <h2>
                Get started today
            </h2>
            <h1>
                AI for Business Leaders Executive Program
            </h1>
            <div className="container">
                <div className="pricing">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12">
                            <div className="pricingcard">
                                <div className="pricingcarduppr">
                                    <h2 className='access'>
                                        2-MONTH ACCESS
                                    </h2>
                                    <h3>
                                        Save an extra 15%
                                    </h3>
                                    <hr />
                                    <h1>
                                        ₹38838
                                    </h1>
                                    <h3 className='lowaccess'>
                                        for 2-month access
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
                                    <BsFillCaretRightFill /> Save an extra 15%. <br />
                                    <BsFillCaretRightFill /> 2 months is the average time to complete this course. <br />
                                    <BsFillCaretRightFill /> Switch to monthly price after if more time is needed. <br />
                                    <BsFillCaretRightFill /> Cancel anytime <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12">
                            <div className="pricingcard">
                                <div className="pricingcarduppr">
                                    <h2 className='access'>
                                        3-MONTH ACCESS
                                    </h2>
                                    <h3>
                                        Save an extra 15%
                                    </h3>
                                    <hr />
                                    <h1>
                                        ₹38838
                                    </h1>
                                    <h3 className='lowaccess'>
                                        for 2-month access
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
                                    <BsFillCaretRightFill /> Save an extra 15%. <br />
                                    <BsFillCaretRightFill /> 2 months is the average time to complete this course. <br />
                                    <BsFillCaretRightFill /> Switch to monthly price after if more time is needed. <br />
                                    <BsFillCaretRightFill /> Cancel anytime <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ControlledAccordions/> */}
        </div>
    )
}

export default Indipricing