import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { IconButton, Paper } from '@mui/material';
import {AiOutlineHeart} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { selectedProduct } from '../../../../state/actioncreator/index';


export default function ImgMediaCard(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch()


  function get_about_page(){
      navigate('/about');
      dispatch(selectedProduct(props));
  }

  return (
    <Card key={props.id.toString()} sx={{ boxShadow:0 ,background:"transparent", maxWidth:345}} onClick = {get_about_page} >
      <Typography
      component={"div"}
      variant="body1"
      style={{
        height: 150,
        width: '100%',
        position: 'relative',
      }}>
      <Box
        sx={{
          marginTop:0,
          paddingTop:0,
          borderTopLeftRadius:{xs:45,md:60,lg:70},
          borderTopRightRadius:{xs:45,md:60,lg:70},
          borderBottomLeftRadius:{xs:20,md:30,lg:40},
          borderBottomRightRadius:{xs:20,md:30,lg:40},
          clipPath:'polygon(6% 0, 91% 0, 100% 100%, 0% 100%)',
          position: 'absolute',
          top: 20,
          left: '18%',
          zIndex: 'tooltip',
          height:130,
          width:'85%',
          boxShadow:40,
          background:'#ffffff',
        }}
      >
      </Box>
      <CardMedia
          component="img"
          alt="green iguana"
          sx={{ objectFit: 'scale-down' , height : 150 ,position: 'absolute',
          top: 0,
          left: '8%',
          zIndex: 'modal'}}
          image={props.avatar} 
        />
      <Box sx={{height:{xs:'24%'},width:{xs:'26%',sm:'16%',md:'14%',lg:'14%'}, background:'#e5e6ed',position:'absolute',left:{xs:'70%',sm:'78%'},top:30, borderRadius:'100%'}} alignItems='center' textAlign='center'>
        <IconButton><AiOutlineHeart style={{borderColor:'yellow' , paddingBottom:1}} /></IconButton>
      </Box>

    </Typography>
        
      
      <CardContent style={{paddingLeft:50,}}>
        <Typography gutterBottom variant="h6" component="div" fontSize={20} color='black'  >
          {props.drinkname}
        </Typography>

        <Typography variant="body2" color="text.secondary"  >
          {props.size}
        </Typography>

        <Typography variant="caption" color="blue" fontSize={20}>
          {props.prize}
        </Typography>

      </CardContent>
    </Card>
  );
}

