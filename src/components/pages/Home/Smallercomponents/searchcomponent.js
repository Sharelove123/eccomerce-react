import { Icon, InputBase, Paper,} from '@material-ui/core'
import { Stack } from '@mui/system'
import React, { Component } from 'react'
import {FiSearch} from 'react-icons/fi'
import {HiAdjustmentsHorizontal} from 'react-icons/hi2'

export default class SearchComponent extends Component {

  constructor(props){
    super(props);
    this.state={
        value:''
    };
    this.update_data = this.update_data.bind(this);
    
}
  
  update_data(event){
    this.setState({
        value:event.target.value
    });
  }
  
  render() {
    return (
      <div>
        <Stack justifyContent={'center'} spacing={2} alignItems='center' direction='row'>
            <Paper
                component='form'
                style={{ width: 250 }
                 
                }
                >
                    <Stack justifyContent={'flex-start'} alignItems='center' direction='row'>
                        <center>
                          <Icon style={{margin:2 , padding:2}} >
                              <FiSearch/>
                          </Icon>
                          </center>
                        <InputBase
                            placeholder='Search Products'
                            value={this.state.value}
                            onChange={this.update_data}
                            style={{height:40}}
                        >
                        </InputBase>
                    </Stack>
            </Paper>

            <Stack
                sx={{borderRadius:3}}
                alignContent='center'
                justifyContent='center'
                style={{ width: 50, background : 'linear-gradient(rgba(100,20,10,.5),transparent)' , backgroundColor:'blue' , height:40}
                }
                >
                  <center>
                    <Icon style={{ color:'white' }} >
                        <HiAdjustmentsHorizontal/>
                    </Icon>
                    </center>
                </Stack>
            
        </Stack>
      </div>
    )
  }
}
