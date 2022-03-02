import React from 'react'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Contactsecond() {
    return (
        <div className='contactsecond'>
            <div className="contactseccontent">
                <div className="flexcontentone">
                    <h2>
                        Small classes size
                    </h2>
                    <h1>
                        ardock solutions
                    </h1>
                <div className="firstbut">
                    <Stack direction="row" spacing={2}>
                        <Button color="secondary">
                            Read more
                        </Button>
                    </Stack>
                </div>
                </div>
                <div className="flexcontenttwo">
                    <div className="image">
                        <img src="/Images/g.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactsecond