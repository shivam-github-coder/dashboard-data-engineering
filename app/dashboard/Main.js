import { Add, Download, MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import randomColor from "randomcolor";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import Link from "next/link";

const FolderBox = () => {
  var color = randomColor();
  return (
    <Grid item xs={3} className="">
      <Box
        className="w-60 h-40 rounded-xl rounded-tr-[35px] relative"
        sx={{ backgroundColor: color }}
        >
        <Box className="flex flex-col justify-evenly items-start h-full pl-5 pr-2">
          <Box className=" w-full flex justify-end">
            <IconButton className="">
              <MoreVert />
            </IconButton>
          </Box>
          <Typography variant="h5" className="font-bold">
            Invertory Ops
          </Typography>
          <Typography variant="caption">3 Projects</Typography>
        </Box>
        <Box className="absolute top-0 right-0 w-40 bg-white h-5 skew-x-[30deg]"></Box>
      </Box>
    </Grid>
  );
};

function ChainBox(){
  return <Grid item xs={4} className="">
  <Link href="/Project"><Box className="border-2 p-3 rounded-xl">
  <Box className="flex justify-between items-center">
    <Typography variant="h5" className="font-bold">Supply Chain</Typography>
    <Box className="px-1 py-1 rounded-lg cursor-pointer bg-purple-100">
      <MoreVert />
    </Box>
  </Box>
  <Box className="border-2 p-3 rounded-xl my-5 bg-purple-100">
    {[...new Array(4)].map((e) => (
      <Box className="flex justify-between items-center px-4">
        <Box>
          <InsertLinkIcon className="-rotate-45" />
          <Typography
            variant="caption"
            className="pl-5 font-bold text-sm"
          >
            Resources
          </Typography>
        </Box>
        <Typography variant="caption">4</Typography>
      </Box>
    ))}
  </Box>
  <Box>
    <Box className="flex items-center px-4 mb-3">
      <Typography variant="caption" className="font-bold pr-4 w-20">
        Owner
      </Typography>
      <Typography variant="caption">XYZ@gmail.com</Typography>
    </Box>
    <Box className="flex items-center px-4 mb-3">
      <Typography variant="caption" className="font-bold pr-4 w-20">
        Menbers{" "}
      </Typography>
      <Avatar
        sx={{ width: 30, height: 30 }}
        className="ml-2 mr-2"
        src="https://as2.ftcdn.net/v2/jpg/05/06/49/35/1000_F_506493511_w887Hp0jyZSIVEgDdM0EUJr2WEu0JYIg.jpg"
      />
      <Avatar
        sx={{ width: 30, height: 30 }}
        className="ml-2 mr-2"
        src="https://as2.ftcdn.net/v2/jpg/05/06/49/35/1000_F_506493511_w887Hp0jyZSIVEgDdM0EUJr2WEu0JYIg.jpg"
      />
    </Box>
  </Box>
</Box>
</Link>
</Grid>
}

function Main() {
  const [ShowMoreLess, setShowMoreLess] = useState(false)
  return (
    <Grid container>
      <Grid item xs={4} className="flex items-center">
        <Typography variant="h4">Project</Typography>
        <IconButton
          size="small"
          className="bg-blue-950 hover:bg-purple-600 ml-3"
        >
          <Add fontSize="small" className="text-white" />
        </IconButton>
      </Grid>
      <Grid item xs={8} className="flex items-center justify-end">
        <Typography variant="caption" className="text-blue-950">
          <Download /> Get Template Project
        </Typography>
        <Typography variant="caption" className="ml-3 text-blue-950">
          <Download /> Get Tutorial Project
        </Typography>
      </Grid>
      <Grid item xs={12} className="pt-4">
        <Grid container className="my-5 transition-all max-h-96 min-h-40 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-200">
          {(ShowMoreLess ? [...new Array(4)].slice(0) : [...new Array(4)].slice(0,5)).map((e) => (
            <FolderBox />
          ))}
          
        </Grid>
        <Grid container className=" transition-all">
        <Grid item xs={12} display="flex" justifyContent="end">
          <button className="text-sm bg-blue-950 px-5 py-2 text-white font-bold rounded-lg" onClick={() => setShowMoreLess((prev) => !prev)}>{!ShowMoreLess ? "Show More" : "Show Less"}</button>
          </Grid>
          <Divider className="bg-slate-300 mt-5 text-slate-300 w-full" />
          </Grid>
        <Grid container spacing={2} className="my-5">
          
            
          {[...new Array(2)].map((e) => (
            <ChainBox />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Main;
