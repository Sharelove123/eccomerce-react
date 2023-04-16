import * as React from 'react';
import MYToolbar from './Smallercomponents/toolbar';
import { Stack } from '@mui/system';
import SearchComponent from './Smallercomponents/searchcomponent'
import Mytab from './Smallercomponents/tabpanel';


export default function HomePage(){
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

