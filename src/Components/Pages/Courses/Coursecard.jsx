import * as React from 'react';
import { Link } from 'react-router-dom';


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

function MultiActionAreaCard(props) {
    return (
        <Card className='maincard2'>
            <Link to="/Indipage">
            <CardActionArea className='maincard3' >
                <CardMedia
                    className='cardmedia'
                    component="img"
                    image={props.image}
                    alt="course card"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                        {props.heading}
                    </Typography>
                    <div className="author">
                        <BiUserPin size={20} color="white" /> {props.tutor}
                    </div>
                    <div className="starrating">
                        <IoArrowRedoCircleSharp size={18} color="white" /> {props.level} <br />
                        <BiUser size={18} color="white" /> Age {props.age}
                    </div>
                    <Typography variant="body2" color="text.secondary" className='para2'>
                        {props.description}
                    </Typography>
                    <div className="starrating1">
                        <IoArrowRedoCircleSharp size={18} color="white" /> Skills: {props.skills} <br />
                        <RiPagesLine size={18} color="white" />  Professional certificate
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions className='cardaction'>
                <div className="price">
                    ₹ {props.price}
                </div>
                <div className="first_course_button1">
                    <Stack direction="row" spacing={2}>
                        <Button className="butoutlined" color="secondary">
                            Buy Now  <MdOutlineDoubleArrow size={22} />
                        </Button>
                    </Stack>
                </div>
            </CardActions>
            </Link>
        </Card>
    );
}

export default MultiActionAreaCard;