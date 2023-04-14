import React from 'react'
import List from '@mui/material/List';
import { useSelector } from 'react-redux';
import Proddetailcard from './proddetailcard';
import { Stack } from '@mui/material';

export default function Cartprodlist() {
  const cartdata=useSelector(state => state.newcart.products)
  return (
    <div>
      <List sx={{ width: '100%', bgcolor: 'background.paper'  }}>
        {cartdata.map((element) => {
            return (
            <Stack direction='column' key={element.id} spacing={5}>
                <Proddetailcard
                    key={element.id}
                    avatar={element.avatar}
                    drinkname={element.drinkname}
                    size={element.size}
                    prize={element.prize}
                    id={element.id}
                    quantity={element.quantity}              
                />
                <div style={{height:6}}></div>
            </Stack>
          )
        })}
      </List>
    </div>
  )
}
