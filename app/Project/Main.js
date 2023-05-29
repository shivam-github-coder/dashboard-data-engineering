import styled from "styled-components";
import MuiToggleButton from "@mui/material/ToggleButton";
import {
  Box,
  Grid,
  InputAdornment,
  Skeleton,
  Stack,
  TextField,
  ToggleButtonGroup,
} from "@mui/material";
import React from "react";
import { MoreVert, Reorder, SearchRounded, Window } from "@mui/icons-material";

function SkeletonBox(){
    return <Box className="border-2 rounded-lg p-3">
    <Stack spacing={1}>
      <Box className="flex justify-between items-center">
        <Skeleton className="bg-purple-100" variant="rounded" width={210} height={35} />
        <Box className="px-1 py-1 rounded-lg cursor-pointer bg-purple-100">
          <MoreVert />
        </Box>
      </Box>
        <Box className="flex justify-between pt-5">
          <Box>
            <Skeleton className="bg-purple-100 mb-3" variant="rounded"  width={150} height={20} />
            <Skeleton className="bg-purple-100" variant="rounded" width={120} height={20} />
          </Box>
          <Box>
            <Skeleton className="bg-purple-100 mb-3" variant="rounded"  width={150} height={20} />
            <Skeleton className="bg-purple-100" variant="rounded" width={120} height={20} />
          </Box>
        </Box>
        <Box className="flex justify-between pt-5">
          <Box>
            <Skeleton className="bg-purple-100 mb-3" variant="rounded"  width={150} height={20} />
            <Skeleton className="bg-purple-100" variant="rounded" width={120} height={20} />
          </Box>
          <Box>
            <Skeleton className="bg-purple-100 mb-3" variant="rounded"  width={150} height={20} />
            <Skeleton className="bg-purple-100" variant="rounded" width={120} height={20} />
          </Box>
        </Box>
    </Stack>
  </Box>
}

function Main() {
  const [alignment, setAlignment] = React.useState("left");

  const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: selectedColor,
    },
  }));

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Grid container className="px-10 py-5 flex items-center">
      <Grid item xs={6}>
        <TextField
          placeholder="Search"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRounded className="text-blue-950" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={6} className="flex justify-end">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            value="left"
            selectedColor="rgb(59,7,100,1)"
            aria-label="left aligned"
          >
            <Window />
          </ToggleButton>
          <ToggleButton
            value="center"
            selectedColor="rgb(59,7,100,1)"
            aria-label="centered"
          >
            <Reorder />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12} className="mt-5">
        <Grid container spacing={2}>
          {[...new Array(2)].map((e) => (
          <Grid item xs={4}>
            <SkeletonBox />
          </Grid>
          ))}
          
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Main;
