import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { IconButton, Paper } from '@mui/material';
import {AiOutlineHeart} from 'react-icons/ai';


export default function ImgMediaCard(avatar) {
  return (
    <Card sx={{ boxShadow:0 ,background:"transparent", maxWidth:345}}>
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
          borderTopLeftRadius:{xs:40,md:60,lg:70},
          borderTopRightRadius:{xs:40,md:60,lg:70},
          borderBottomLeftRadius:{xs:40,md:60,lg:70},
          borderBottomRightRadius:{xs:40,md:60,lg:70},
          position: 'absolute',
          top: 30,
          width:"80%",
          left: '8%',
          zIndex: 'tooltip',
          height:100,
          boxShadow:40,
          background:'#ffffff',
        }}
      >
      </Box>
      <center>
      <CardMedia
          component="img"
          alt="green iguana"
          sx={{ objectFit: 'scale-down' , height : 120 ,position: 'absolute',
          top: 8,
          
          zIndex: 'modal'}}
          image={avatar.avatar} 
        />
      </center>
      <Box sx={{height:{xs:'24%'},width:{xs:'26%',sm:'16%',md:'14%',lg:'14%'}, background:'#e5e6ed',position:'absolute',left:{xs:'70%',sm:'78%'},top:30, borderRadius:'100%'}} alignItems='center' textAlign='center'>
        <IconButton><AiOutlineHeart style={{borderColor:'yellow' , paddingBottom:1}} /></IconButton>
      </Box>

    </Typography>
    </Card>
  );
}

