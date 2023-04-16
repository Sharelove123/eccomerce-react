import { Icon, InputBase, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { Stack } from '@mui/system';

export default function SearchComponent() {
  const [value, setValue] = useState('');

  const updateData = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Stack justifyContent={'center'} spacing={2} alignItems='center' direction='row'>
        <Paper component='form' style={{ width: 250 }}>
          <Stack justifyContent={'flex-start'} alignItems='center' direction='row'>
            <center>
              <Icon style={{ margin: 2, padding: 2 }}>
                <FiSearch />
              </Icon>
            </center>
            <InputBase
              placeholder='Search Products'
              value={value}
              onChange={updateData}
              style={{ height: 40 }}
            ></InputBase>
          </Stack>
        </Paper>

        <Stack
          sx={{ borderRadius: 3 }}
          alignContent='center'
          justifyContent='center'
          style={{
            width: 50,
            background: 'linear-gradient(rgba(100,20,10,.5),transparent)',
            backgroundColor: 'blue',
            height: 40,
          }}
        >
          <center>
            <Icon style={{ color: 'white' }}>
              <HiAdjustmentsHorizontal />
            </Icon>
          </center>
        </Stack>
      </Stack>
    </div>
  );
}

