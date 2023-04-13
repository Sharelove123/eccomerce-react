import React from 'react'
import { Stack } from '@mui/system'
import { IconButton } from '@mui/material'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actioncreators} from '../../../../state/index';


export default function BotComp() {
  const dispatch = useDispatch()
  const amount = useSelector(state => state.amount)
  const {depositMoney,withdrawMoney} = bindActionCreators(actioncreators,dispatch);

  return (
    <div>  
        <Stack  display='flex' spacing={1} direction='row' sx = {{ border:'1px solid' , borderColor:'brown' , borderRadius:25 , height:34, width:'100%'}}>
          <IconButton ><FaPlus size={10} color='brown' onClick={()=>{depositMoney(1)}}/></IconButton>
            <h4 color='black'>{amount}</h4>
            <IconButton><FaMinus  size={10} color='brown'onClick={()=>{withdrawMoney(1)}}/></IconButton> 
          </Stack>       
    </div>
  )
}
