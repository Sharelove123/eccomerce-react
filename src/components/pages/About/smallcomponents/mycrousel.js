import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import { useSelector } from 'react-redux';

function Mycrousel() {
  const selectedProduct = useSelector((state)=>state.prodname.selectedProduct)
  return (
    <Carousel >
      <Carousel.Item>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{ objectFit: 'scale-down' , height : 200 }}
          image={selectedProduct.avatar} 
        />
      </Carousel.Item>
      <Carousel.Item>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{ objectFit: 'scale-down' , height : 200 }}
          image={selectedProduct.avatar} 
        />

       
      </Carousel.Item>
      <Carousel.Item >
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{ objectFit: 'scale-down' , height : 200 }}
          image={selectedProduct.avatar} 
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Mycrousel;
