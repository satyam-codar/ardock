import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

import { MdOutlineDoubleArrow } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { IoArrowRedoCircleSharp } from 'react-icons/io5';
import { BiUserPin, BiUser } from 'react-icons/bi';
import { RiPagesLine } from 'react-icons/ri';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import "./Courses.css"
// import "./Home_com.css"
function MultiActionAreaCard(props) {
    return (
        <Card className='maincard2'>
            <CardActionArea className='maincard3' >
                <CardMedia
                    className='cardmedia'
                    component="img"
                    // height="240"
                    image="/Images/first.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                        {props.heading}
                        {/* Lizard house */}
                    </Typography>
                    <div className="author">
                        <BiUserPin size={20} color="white" /> By Jessi lee
                    </div>
                    <div className="starrating">
                        {/* <BsArrowRightCircleFill size={15} color="white"/> Beginner <br /> */}
                        <IoArrowRedoCircleSharp size={18} color="white" /> Beginner <br />
                        <BiUser size={18} color="white" /> Age 6-10
                    </div>
                    <Typography variant="body2" color="text.secondary" className='para2'>
                        {props.description}
                        {/* Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica */}
                    </Typography>
                    <div className="starrating1">
                        {/* <BsArrowRightCircleFill size={15} color="white"/> Beginner <br /> */}
                        <IoArrowRedoCircleSharp size={18} color="white" /> Skills: Web development and web design <br />
                        <RiPagesLine size={18} color="white" /> Professional certificate
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions className='cardaction'>
                <div className="price">
                    ₹ 7,199
                </div>
                <div className="first_course_button1">
                    <Stack direction="row" spacing={2}>
                        {/* <Button color="secondary" className='cardbutton'>
                                Read more
                            </Button> */}
                        <Button className="butoutlined" color="secondary">
                            Buy Now  <MdOutlineDoubleArrow size={22} />
                        </Button>
                    </Stack>
                </div>
            </CardActions>
        </Card>
    );
}

export default MultiActionAreaCard;