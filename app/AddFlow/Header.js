import {
    Box,
    Breadcrumbs,
    Divider,
    Grid,
    InputAdornment,
    Skeleton,
    Stack,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
  } from "@mui/material";
  import React from "react";
  import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
  import { Add, Reorder, SearchRounded, Window } from "@mui/icons-material";
  import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
  import ChevronRightIcon from '@mui/icons-material/ChevronRight';
  import { useRouter } from "next/navigation";
  import ReplayIcon from '@mui/icons-material/Replay';
  
  
  function Header() {
    const router = useRouter();
   
    return (
        <Grid
          container
          display="flex"
          alignItems="center"
          className=" shadow border-2 bg-white"
        >
          <Grid item xs={6} className="py-3">
            <Box className="flex justify-start items-center">
              <Box className="bg-purple-100 h-8 w-8 rounded-lg flex justify-center items-center mx-5">
                <ChevronLeftIcon />
              </Box>
              <Box>
                <Box className="flex items-center">
                  <Typography
                    variant="caption"
                    className="font-bold text-blue-950"
                  >
                    Project
                  </Typography>
                  <ChevronRightIcon fontSize="small" className="mx-1.5" />
                  <Typography variant="caption" className="font-bold">
                    Flows
                  </Typography>
                  <ChevronRightIcon fontSize="small" className="mx-1.5" />
                  <Typography variant="caption" className="font-bold">
                    Inventory Title
                  </Typography>
                </Box>
                <Typography variant="h5" className="font-semibold">
                    Inventory
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} className="py-3">
            <Box className="flex items-center justify-end">
              <Box className="bg-purple-100 px-3 py-2 text-white mx-3 rounded-lg flex items-center cursor-pointer">
                <ReplayIcon className="text-purple-950" />
              </Box>
              <Box className="bg-purple-100 px-3 py-2 text-white mr-3 rounded-lg flex items-center cursor-pointer">
                <ReplayIcon className="" style={{transform:"rotateY(180deg)"}} />
              </Box>
              <button onClick={() => router.push('/AddFlow')} className="bg-purple-500 px-4 py-2 text-white rounded-lg flex items-center">
                <Add className="mr-1" /> Add Flow
              </button>
              <Box className="bg-purple-100 px-3 py-2 text-white mx-3 rounded-lg flex items-center cursor-pointer">
                <MoreHorizIcon />
              </Box>
            </Box>
          </Grid>
          {/* <Divider className="w-full bg-slate-300" /> */}
        </Grid>
    );
  }
  
  export default Header;
  