import React from 'react'
import { Box,Stack } from '@mui/system'
import { useLocation } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actioncreators} from '../../../../state/index';


export default function BotComp() {
  const location = useLocation()
  const dispatch = useDispatch()
  const amount = useSelector(state => state.amount)
  const {depositMoney,withdrawMoney} = bindActionCreators(actioncreators,dispatch);

  return (
    <div>
        <Box justifyContent='space-between'  alignItems='center' display='flex' sx = {{position:'fixed', left:0 , right:0 , bottom:0 , background : 'linear-gradient(rgba(100,20,10,.5),transparent)' , backgroundColor:'blue', borderRadius:25,height:'25%'}}>
          <Stack paddingLeft={4}  direction='row' spacing={'10%'} >
            <h1  style={{color:'white',fontWeight:500}}>{location.state.prize}</h1>
          </Stack>
          <Stack paddingRight={4} alignSelf='center' display='flex' justifyContent='center' direction='row' spacing={2}>
            
            
            <Stack alignItems='center' justifyContent='center' display='flex' spacing={1} direction='row' sx = {{ border:'1px solid' , borderColor:'white' , borderRadius:25 , height:34 }}>
              <IconButton ><FaPlus size={10} color='white' onClick={()=>{depositMoney(1)}}/></IconButton>
              <h4>{amount}</h4>
              <IconButton><FaMinus  size={10} color='white'onClick={()=>{withdrawMoney(1)}}/></IconButton> 
            </Stack>
            
            <Box sx={{height:50, backgroundColor:'white',borderRadius:3}} alignContent='center' alignItems='center' display='flex' justifyContent='center'>
              <h1 style={{ display:'flex',justifyContent:'center' , alignItems:'center' ,alignSelf:'center' , color:'blue' , fontWeight:600 , height:10}}>Cart</h1>
            </Box>
          </Stack>
        </Box>
    </div>
  )
}
