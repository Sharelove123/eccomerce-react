import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Stack } from '@mui/system';
import SwipeableViews from 'react-swipeable-views';
import Box from '@mui/material/Box';
import { withStyles} from '@mui/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import data from './data';

import React from 'react'
import { useState } from 'react';


const CustomTab = withStyles({
    root:{
      height:10,
    },

    selected: {
      background:'linear-gradient(rgba(0,0,255,1),transparent)',
      backgroundColor: 'blue',
      WebkitTextFillColor:'white',
    },
})(Tab);


function TabPanel(props) {
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

export default function Mytab() {
  const [value,setValue]=useState(0)

  function handleChange(Event,newValue){
    setValue(newValue)
    console.log(newValue);
    
  }

    function handleChangeIndex(current_index,pre_index){
        if (current_index !== value){
        setValue(current_index);
        }
        console.log(pre_index + 'ffgvgj' + current_index);
    }

  return (
    <div>
        <>
        <Stack >
        <Tabs
            sx={{paddingLeft:{xs:0,md:10,lg:30,xl:40}}}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "transparent"
              }
            }}>
  
            <CustomTab sx= {{ borderRadius : 3 , marginRight:1}} label="Drinks" />
            <CustomTab sx= {{ borderRadius : 3 , marginRight:1 }} label="Item Two" />
            <CustomTab sx= {{ borderRadius : 3 , marginRight:1}} label="Item Three" />
            <CustomTab sx= {{ borderRadius : 3 , marginRight:1}} label="Item Four" />
            <CustomTab sx= {{ borderRadius : 3 , marginRight:1}} label="Item Five" />
            <CustomTab sx= {{ borderRadius : 3 , marginRight:1}} label="Item Six" />
            <CustomTab sx= {{ borderRadius : 3 , marginRight:1}} label="Item Seven" />
        </Tabs>

        <SwipeableViews
            index={value}
            onChangeIndex={handleChangeIndex}
        >
            <TabPanel value={value} index={0}>
            <Grid container spacing={2} >
              {
                data.map((element,index)=>
                  <Grid item xs={6} md = {4} lg = {3} key={index.toString()}>
                      {element}
                  </Grid>
                )
              }
            </Grid>
            
            </TabPanel>
            <TabPanel value={value} index={1} >
             png item.com
            </TabPanel>
            <TabPanel value={value} index={2} >
            Item Three
            </TabPanel>
            <TabPanel value={value} index={3} >
            Item four
            </TabPanel>
            <TabPanel value={value} index={4} >
            Item five
            </TabPanel>
            <TabPanel value={value} index={5} >
            Item six
            </TabPanel>
            <TabPanel value={value} index={6} >
            Item seven
            </TabPanel>
        </SwipeableViews>
        </Stack>
        </>
    </div>
  )
}
