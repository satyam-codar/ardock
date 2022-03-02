import React from 'react'
import "./Aboutus.css"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Firstcomp() {
    return (
        <div className='firstcomp'>
            <div className="image">
                <div className="container">
                    <h1>
                        Private <br />
                        KinderGarden
                    </h1>
                    <h2>
                        Get them ready for what's next
                    </h2>
                    <div className="firstbut">
                        <Stack direction="row" spacing={2}>
                            <Button color="secondary">
                                Read more
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Firstcomp