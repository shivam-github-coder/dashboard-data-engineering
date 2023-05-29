import { Reorder, SearchRounded, Window } from '@mui/icons-material'
import { FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import MuiToggleButton from "@mui/material/ToggleButton";
import styled from 'styled-components';

function Header() {
    const [alignment, setAlignment] = React.useState('left');

    const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
        "&.Mui-selected, &.Mui-selected:hover": {
          color: "white",
          backgroundColor: selectedColor
        }
      }));

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Grid container className='shadow border-b-2 px-10 py-3 flex items-center'>
        <Grid item xs={6}>
            <TextField placeholder='Search' size='small' className='' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRounded className='text-blue-950' />
            </InputAdornment>
          ),
        }}/>
        </Grid>
        <Grid item xs={6} className='flex items-center justify-end'>
        <FormControl  className='mx-5 w-60'>
            <InputLabel id="demo-simple-select-label">All Project</InputLabel>
            <Select
            size='small'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
                label="All Project"
                // onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
        <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" selectedColor="rgb(59,7,100,1)" aria-label="left aligned">
        <Window  />
      </ToggleButton>
      <ToggleButton value="center" selectedColor="rgb(59,7,100,1)" aria-label="centered">
        <Reorder />
      </ToggleButton>
    </ToggleButtonGroup>
        </Grid>

    </Grid>
  )
}

export default Header