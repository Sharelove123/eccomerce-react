import React, { useEffect } from 'react'
import { Stack } from '@mui/system'
import { IconButton } from '@mui/material'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../../../state/actioncreator';


export default function BotComp(props) {
  const dispatch = useDispatch()
  


  function increasequantity(){
      const newincreasedquantity = props.quantity + 1
      dispatch(updateQuantity(props.id,newincreasedquantity))
  }

  function decreasquantity(){
    if (props.quantity !== 0){
      const newdecresdedquantity = props.quantity - 1
      dispatch(updateQuantity(props.id,newdecresdedquantity))
    }
}

  return (
    <div>  
        <Stack  display='flex' spacing={1} direction='row' sx = {{ border:'1px solid' , borderColor:'brown' , borderRadius:25 , height:34, width:'100%'}}>
          <IconButton onClick={()=>{increasequantity()}} ><FaPlus size={10} color='brown' /></IconButton>
            <h4 color='black'>{props.quantity}</h4>
            <IconButton onClick={()=>{decreasquantity()}}><FaMinus  size={10} color='brown'/></IconButton> 
          </Stack>       
    </div>
  )
}
