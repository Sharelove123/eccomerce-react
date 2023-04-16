import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { ListItemText } from '@material-ui/core';
import avatar from '../images/Profileshortimage.jpg'
import { IconButton , Badge } from '@material-ui/core'
import {BsCart} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function MYToolbar() {
  const cartdata=useSelector(state => state.newcart.products)
  const navigate = useNavigate();

  function gotomycart(){
    navigate('/mycart',);
  }

  return (
    <div>
        <Stack direction="row" spacing={2} justifyContent='space-between'>
            <Stack spacing={.5} direction="row">
                <Avatar alt="Remy Sharp" src= {avatar} sx={{ width: 39,height: 39 }}/>
                <Stack spacing={0} direction="column">
                    <ListItemText secondary="Hello" style={{ margin: 0, padding: 0 , spacing:0}}/>
                    <ListItemText secondary="Martin" style={{ margin: 0, padding: 0 , spacing:0}}/>
                </Stack>
            </Stack>
            <Stack spacing={.5} direction="row" paddingLeft={7}>
                <IconButton style={{margin:0}} onClick={gotomycart}>
                    <Badge badgeContent={cartdata.length} color="primary" overlap='rectangular'>
                        <BsCart color='black' />
                    </Badge>
                </IconButton>
            </Stack>
        </Stack>
    </div>
  )
}
