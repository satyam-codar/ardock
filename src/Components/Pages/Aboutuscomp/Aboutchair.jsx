import React from 'react'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Aboutchair() {
    return (
        <div className="container">
            <div className='aboutchair'>
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <div className="chairmanmessage">

                            <h1>
                                Chariman's message
                            </h1>
                            <p>
                                We develop partnerships with leading companies and organizations from around the globe to complement our expertise and deliver breakthrough results. We have long-lasting partnerships and affiliations with like-minded organizations and leaders share our commitment to deliver lasting results.
                            </p>
                            <div className="firstbut">
                                <Stack direction="row" spacing={2}>
                                    <Button color="secondary">
                                        Read more
                                    </Button>
                                </Stack>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <div className="chairimage">

                            <img src="/Images/chairman.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutchair