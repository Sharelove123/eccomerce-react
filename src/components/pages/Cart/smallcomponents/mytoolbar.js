import React from 'react'
import { Stack } from '@mui/system'
import {HiArrowNarrowLeft } from 'react-icons/hi'
import { IconButton } from '@material-ui/core'
import { ListItemText } from '@material-ui/core';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, removefromRemoveitem } from '../../../../state/actioncreator/index';
import { useDispatch, useSelector } from 'react-redux';


export default function Mytoolbar() {
  const navigate = useNavigate();
  const dispach = useDispatch()
  const data = useSelector((state)=>state.removeitemlist.items)

  function goback(){
    navigate('/about',);
  }

  function removeall(){
      data.map((id)=>{
        dispach(removeFromCart(id))
      })
      data.map((id)=>{
        dispach(removefromRemoveitem(id))
      })
  }

  return (
    <div>
      <Stack direction='row' justifyContent='space-between'> 
        <Stack spacing={0} direction='row' justifySelf='start' justifyContent='center' alignItems='center' textAlign='center'>
          <IconButton onClick = {goback} style={{height:50,width:50,color:'black'}}><HiArrowNarrowLeft/></IconButton>
          <ListItemText>Back</ListItemText>
        </Stack>
        <center style={{paddingTop:13,fontWeight:500}}>My cart</center>
          <Button variant="text" style={{paddingTop:13,fontWeight:500,height:30,borderRadius:20,marginTop:6}} onClick={removeall} >
            (Remove {data.length})
          </Button>
      </Stack>
    </div>
  )
}
