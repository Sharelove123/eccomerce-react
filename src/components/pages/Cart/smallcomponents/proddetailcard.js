import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { Box, Grid} from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import {AiOutlineClose} from 'react-icons/ai'
import { Stack } from '@mui/material';
import ImgMediaCard from './mycard';
import BotComp from './bottomcomp';
import { removeFromCart,addtoRemoveitem ,removefromRemoveitem} from '../../../../state/actioncreator/index';
import { useDispatch , useSelector} from 'react-redux';


const useStyles = makeStyles({
  card: {
    position: 'relative',
    height: '200px',
  },
  button: {
    position: 'absolute',
    top: '-15px',
    left: '60%',
    zIndex: 1,
    borderRadius: '50%',
    padding: '5px',
    backgroundColor: 'green',
    color: 'white',
    cursor: 'pointer',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
  },
});

export default function Proddetailcard(props) {
  const { avatar, drinkname, id, prize, size,quantity } = props;
  const labelId = `checkbox-list-label-${0}`;
  const classes = useStyles();
  const dispach = useDispatch()
  const data = useSelector((state)=>state.removeitemlist.items)

  function removeproduct(){
    console.log('deleted...')
    dispach(removeFromCart(id))
    dispach(removefromRemoveitem(id))
  }

  const handleCheckboxChange = (event) => {
      if (event.target.checked===true){
        dispach(addtoRemoveitem(id))
      }
      if (event.target.checked===false){
        dispach(removefromRemoveitem(id))
      }
      console.log(data)
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={2} >
        <center style={{marginTop:50}}>
            <Checkbox
                edge="start"
                onChange={handleCheckboxChange}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                />
        </center>
        </Grid>
        <Grid item xs={9}>
        <Box className={classes.card} style={{backgroundColor:"#FAF4F0" , height:150, borderRadius:14,marginRight:6}}>
          <Grid container>
            <Grid item xs={6}>
              <ImgMediaCard avatar={avatar}/>
            </Grid>
            <Grid item xs={5}>
             
                <Stack direction={'column'} marginLeft={-1}   justifyContent="center" marginTop={2.5} spacing={0}>
                  <h3 style={{height:20}}>{drinkname}</h3> 
                  <h3 style={{fontWeight:350,height:30,fontSize:15}}>{size}</h3>
                  <Stack justifyContent="space-between" direction="row" l>
                    <h3 style={{width:-1,color:'blue'}}>{prize}</h3>
                    <BotComp 
                        quantity={quantity}
                        id={id}
                    />
                  </Stack>
                </Stack>

            </Grid>
            <Grid item xs={1}>
            <IconButton  onClick={removeproduct} size='10' className={classes.button} style={{backgroundColor:"#E5E5E5", display: 'flex', justifyContent: 'flex-end'}}>
              <AiOutlineClose color='white' size={13}/>
            </IconButton>
            </Grid>
          </Grid>
        </Box>
        </Grid>
      </Grid>
      
    </>
  )
}
