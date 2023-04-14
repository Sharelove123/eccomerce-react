import React from 'react'
import { Stack } from 'react-bootstrap'
import Rating from '@mui/material/Rating';
import { useSelector } from 'react-redux';

export default function ProdDetail() {
  const selectedProduct = useSelector((state)=>state.prodname.selectedProduct)
  return (
    <div>
      <Stack direction='horizontal' style={{paddingLeft:18,paddingRight:18,justifyContent:'space-between'}}>
        <h1 style={{fontWeight:500 , color:'black'}}>{selectedProduct.drinkname}</h1>
        <Rating name="half-rating" defaultValue={3.5} style={{color:'blue'}}/>
      </Stack>

      <Stack direction='horizontal' style={{paddingLeft:18,paddingRight:18,paddingTop:10,justifyContent:'space-between'}}>
        <h1 style={{fontSize:13, opacity:0.5,color:'black'}}>size:{selectedProduct.size}</h1>
        <h1 style={{fontSize:13, opacity:0.5,color:'black'}}>(288 review)</h1>
      </Stack>
      <h1 style={{height:5}}></h1>
      <center>
      <p style={{opacity:1}}>
        Vodka is a popular alcoholic beverage that is usually colorless, odorless,</p>
      <p style={{opacity:0.8}}>
        and tasteless. It is made from fermented grains, such as corn, wheat, or
      </p>
      <p style={{opacity:0.7}}>
        potatoes, and distilled to increase its alcohol content. Vodka is a staple
      </p>
      <p style={{opacity:0.5}}>
        drink in many cultures and is often used in cocktails or as a base for
      </p>
      <p style={{opacity:0.4}}>
        other mixed drinks.
        </p>
        </center>
    </div>
  )
}
