import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { ListItemText } from '@material-ui/core';
import avatar from '../images/Profileshortimage.jpg'
import IconButton from '@material-ui/core/IconButton';
import {HiOutlineBars3BottomRight} from 'react-icons/hi2';

export default function MYToolbar() {
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
            <Stack spacing={.5} direction="row">
                <IconButton style={{margin:0 , padding:0}}>
                    <HiOutlineBars3BottomRight/>
                </IconButton>
            </Stack>
        </Stack>
    </div>
  )
}
