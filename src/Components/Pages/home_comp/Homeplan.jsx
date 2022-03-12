import React from 'react'
import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Homeplan() {
    return (
        <div className='homeplan'>
            <div className="container">
                <h2>
                    WE HAVE A PLAN FOR A STRONGER YOU
                </h2>
                <h1>
                    Free 30-day Plan
                </h1>
                <p>
                    Get a free personalized 30-Day Plan only at Our Gym - we're dedicated to helping <br /> you experience change.
                </p>
                <div className="firstbut">
                    <Stack direction="row" spacing={2}>
                        <Button color="secondary" className='cardbutton'>
                            <Link to='#'>Get your plan</Link>
                        </Button>
                    </Stack>
                </div>
            </div>


        </div>
    )
}

export default Homeplan