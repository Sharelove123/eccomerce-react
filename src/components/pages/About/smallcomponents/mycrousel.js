import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import { useLocation } from 'react-router-dom';

function Mycrousel() {
  const location = useLocation();
  return (
    <Carousel >
      <Carousel.Item>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{ objectFit: 'scale-down' , height : 200 }}
          image={location.state.avatar} 
        />
      </Carousel.Item>
      <Carousel.Item>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{ objectFit: 'scale-down' , height : 200 }}
          image={location.state.avatar} 
        />

       
      </Carousel.Item>
      <Carousel.Item >
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{ objectFit: 'scale-down' , height : 200 }}
          image={location.state.avatar} 
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Mycrousel;
