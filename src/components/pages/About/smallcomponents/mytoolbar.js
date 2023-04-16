import React from 'react'
import { Stack } from '@mui/system'
import {HiArrowNarrowLeft } from 'react-icons/hi'
import { IconButton , Badge } from '@material-ui/core'
import { ListItemText } from '@material-ui/core';
import {BsCart} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showSnackbarstate } from '../../../../state/actioncreator/index';


export default function Mytoolbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartdata=useSelector(state => state.newcart.products)

  function goback(){
    navigate('/',);
    dispatch(showSnackbarstate(false));
  }

  function gotomycart(){
    navigate('/mycart',);
  }

  return (
    <div>
      <Stack direction='row' justifyContent='space-between'> 
        <Stack spacing={0} direction='row' justifySelf='start' justifyContent='center' alignItems='center' textAlign='center'>
          <IconButton onClick = {goback} style={{height:50,width:50,color:'black'}}><HiArrowNarrowLeft/></IconButton>
          <ListItemText>Back</ListItemText>
        </Stack>
          <IconButton onClick={gotomycart}>
            <Badge badgeContent={cartdata.length} color="primary" overlap='rectangular'>
              <BsCart color='black' />
            </Badge>
          </IconButton>
            

      </Stack>
    </div>
  )
}
