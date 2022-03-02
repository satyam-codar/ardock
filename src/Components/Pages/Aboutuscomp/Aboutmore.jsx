import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




function Aboutmore() {
    return (
        <div className='aboutmore'>
            <div className="aboutblk">
                <div className="abouttext">
                    <div className="flexleft">
                        {/* sdfkla;sjflasjf */}
                    </div>
                    <div className="flexright">
                        <h1>
                            Our History
                        </h1>
                        <p>
                            In 1988, entrepreneur Anthony A. Martino established The Goddard School preschool franchise to deliver a high-quality, play-based learning program to families all over the United States. Since then, The Goddard School has grown into an institution that parents and families trust, reaching more than 65,000 students in more than 460 Schools in 36 states.
                        </p>
                        {/* <br /> */}
                        <p>
                            As more Schools open in neighborhoods across the country, they use the most current, academically endorsed methods to ensure that children have fun while learning the skills they need for long-term success in school and in life.
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
            </div>
        </div>
    )
}

export default Aboutmore