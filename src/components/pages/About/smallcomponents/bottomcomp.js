import React from 'react'
import { Box,Stack } from '@mui/system'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { IconButton } from '@mui/material'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actioncreators} from '../../../../state/index';
import { showSnackbarstate } from '../../../../state/actioncreator/index';
import { addToCart } from '../../../../state/actioncreator/index';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function BotComp() {
  const dispatch = useDispatch()
  const amount = useSelector(state => state.prodname.count)
  const {increaseSelectedProductCount,decreaseSelectedProductCount} = bindActionCreators(actioncreators,dispatch);
  const selectedProduct = useSelector((state)=>state.prodname.selectedProduct)
  const open = useSelector((state)=>state.snakbarstate)


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(showSnackbarstate(false));
  };





// new cart

  function addtonewcart(){
    if (amount===0){
      dispatch(addToCart(selectedProduct,1))
      dispatch(showSnackbarstate(true));
    }
    else{
    dispatch(addToCart(selectedProduct,amount))
    dispatch(showSnackbarstate(true));
    }
  }




  return (
    <div>
        <Box justifyContent='space-between'  alignItems='center' display='flex' sx = {{position:'fixed', left:0 , right:0 , bottom:0 , background : 'linear-gradient(rgba(100,20,10,.5),transparent)' , backgroundColor:'blue', borderRadius:25,height:'25%'}}>
          <Stack paddingLeft={4}  direction='row' spacing={'10%'} >
            <h1  style={{color:'white',fontWeight:500}}>{selectedProduct.prize}</h1>
          </Stack>
          <Stack paddingRight={4} alignSelf='center' display='flex' justifyContent='center' direction='row' spacing={2}>
            
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
               {selectedProduct.drinkname} added to cart successfully!!
            </Alert>
          </Snackbar>
            
            <Stack alignItems='center' justifyContent='center' display='flex' spacing={1} direction='row' sx = {{ border:'1px solid' , borderColor:'white' , borderRadius:25 , height:34 }}>
              <IconButton ><FaPlus size={10} color='white' onClick={()=>{increaseSelectedProductCount(selectedProduct)}}/></IconButton>
              <h4>{amount}</h4>
              <IconButton><FaMinus  size={10} color='white'onClick={()=>{decreaseSelectedProductCount(selectedProduct)}}/></IconButton> 
            </Stack>
            
            <Box sx={{height:50, backgroundColor:'white',borderRadius:3}} alignContent='center' alignItems='center' display='flex' justifyContent='center'>
              <h1 style={{ display:'flex',justifyContent:'center' , alignItems:'center' ,alignSelf:'center' , color:'blue' , fontWeight:600 , height:10}} onClick={addtonewcart}>Cart</h1>
            </Box>
          </Stack>
        </Box>
    </div>
  )
}
