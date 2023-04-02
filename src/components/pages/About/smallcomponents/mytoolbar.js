import React from 'react'
import { Stack } from '@mui/system'
import {HiArrowNarrowLeft } from 'react-icons/hi'
import { IconButton } from '@material-ui/core'
import { ListItemText } from '@material-ui/core';
import {HiOutlineBars3BottomRight} from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';


export default function Mytoolbar() {
  const navigate = useNavigate();

  function goback(){
    navigate('/',);
  }

  return (
    <div>
      <Stack direction='row' justifyContent='space-between'> 
        <Stack spacing={0} direction='row' justifySelf='start' justifyContent='center' alignItems='center' textAlign='center'>
          <IconButton onClick = {goback} style={{height:50,width:50,color:'black'}}><HiArrowNarrowLeft/></IconButton>
          <ListItemText>Back</ListItemText>
        </Stack>
          <IconButton onClick={goback}>
            <HiOutlineBars3BottomRight />
          </IconButton>
            

      </Stack>
    </div>
  )
}
