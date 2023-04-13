import { Component } from 'react';
import * as React from 'react';
import MYToolbar from './Smallercomponents/toolbar';
import { Stack } from '@mui/system';
import SearchComponent from './Smallercomponents/searchcomponent'
import Mytab from './Smallercomponents/mytab';


export default class HomePage extends Component {

  render() {
    return (
        <div >
          <Stack spacing={3}>
            <MYToolbar/>
            <SearchComponent/>
            <Mytab/>
          </Stack>
        </div>
    );
  }
}

