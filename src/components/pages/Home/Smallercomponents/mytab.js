import * as React from 'react';
import { Component } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Stack } from '@mui/system';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { withStyles} from '@mui/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import data from './data';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default class Mytab extends Component{
  constructor(){
    super();
    this.state = {
        value:0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.TabPanel = this.TabPanel.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }

  handleChange(Event,newValue){
    this.setState({
        value : newValue
    });
    console.log(newValue);
    
  }

  handleChangeIndex(current_index,pre_index){
    if (current_index !== this.value){
      this.setState({
          value:current_index
      });
    }
    console.log(pre_index + 'ffgvgj' + current_index);
  }

  CustomTab = withStyles({
    root:{
      height:10,
    },

    selected: {
      background:'linear-gradient(rgba(0,0,255,1),transparent)',
      backgroundColor: 'blue',
      WebkitTextFillColor:'white',
    },
  })(Tab);

  

  TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box sx={{ p: 3 }}>
                <Box>{children}</Box>
            </Box>
            )}
        </div>
    );
  }


  render(){
    return (
        <>
        <Stack >
        <Tabs
            sx={{paddingLeft:{xs:0,md:10,lg:30,xl:40}}}
            value={this.state.value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "transparent"
              }
            }}>
  
            <this.CustomTab sx= {{ borderRadius : 3 , marginRight:1}} label="Drinks" />
            <this.CustomTab sx= {{ borderRadius : 3 , marginRight:1 }} label="Item Two" />
            <this.CustomTab sx= {{ borderRadius : 3 , marginRight:1}} label="Item Three" />
            <this.CustomTab sx= {{ borderRadius : 3 , marginRight:1}} label="Item Four" />
            <this.CustomTab sx= {{ borderRadius : 3 , marginRight:1}} label="Item Five" />
            <this.CustomTab sx= {{ borderRadius : 3 , marginRight:1}} label="Item Six" />
            <this.CustomTab sx= {{ borderRadius : 3 , marginRight:1}} label="Item Seven" />
        </Tabs>

        <SwipeableViews
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
        >
            <this.TabPanel value={this.state.value} index={0}>
            <Grid container spacing={2} >
              {
                data.map((element,index)=>
                  <Grid item xs={6} md = {4} lg = {3} key={index.toString()}>
                      {element}
                  </Grid>
                )
              }
            </Grid>
            
            </this.TabPanel>
            <this.TabPanel value={this.state.value} index={1} >
             png item.com
            </this.TabPanel>
            <this.TabPanel value={this.state.value} index={2} >
            Item Three
            </this.TabPanel>
            <this.TabPanel value={this.state.value} index={3} >
            Item four
            </this.TabPanel>
            <this.TabPanel value={this.state.value} index={4} >
            Item five
            </this.TabPanel>
            <this.TabPanel value={this.state.value} index={5} >
            Item six
            </this.TabPanel>
            <this.TabPanel value={this.state.value} index={6} >
            Item seven
            </this.TabPanel>
        </SwipeableViews>
        </Stack>
        </>
    );
  }
}
