import React from 'react'
import { Stack } from 'react-bootstrap'
import Rating from '@mui/material/Rating';
import { useLocation } from 'react-router-dom'

export default function ProdDetail() {
  const location = useLocation();
  return (
    <div>
      <Stack direction='horizontal' style={{paddingLeft:18,paddingRight:18,justifyContent:'space-between'}}>
        <h1 style={{fontWeight:500 , color:'black'}}>{location.state.drinkname}</h1>
        <Rating name="half-rating" defaultValue={3.5} style={{color:'blue'}}/>
      </Stack>

      <Stack direction='horizontal' style={{paddingLeft:18,paddingRight:18,paddingTop:10,justifyContent:'space-between'}}>
        <h1 style={{fontSize:13, opacity:0.5,color:'black'}}>size:{location.state.size}</h1>
        <h1 style={{fontSize:13, opacity:0.5,color:'black'}}>(288 review)</h1>
      </Stack>

    </div>
  )
}
