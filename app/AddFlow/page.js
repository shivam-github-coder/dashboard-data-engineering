"use client";
import {
  Box,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Header from "./Header";
import DnD from "./DnD";
import {
  Add,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  SearchRounded,
} from "@mui/icons-material";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Draggable from "react-draggable";

function TitleHead({title}) {
  return (
    <Box className="flex justify-between items-center w-full">
      <Box className="flex items-center ">
        {/* <KeyboardArrowDown /> */}
        <Typography variant="subtitle1" className="font-bold pl-2">
          {title}
        </Typography>
      </Box>
      <Box className="bg-purple-100 h-8 w-8 rounded-lg flex justify-center items-center">
        <Add />
      </Box>
    </Box>
  );
}

function DataItem({ title, subtitle,setLeftClickValues }) {
  return (<Box onClick={() => setLeftClickValues(title)} className="flex overflow-hidden items-center border-2 px-2 rounded-lg cursor-pointer mb-3 shadow-lg py-2 z-40">
      <AdsClickIcon />
      <Box className="flex flex-col pl-2">
        <Typography variant="caption" className="font-bold text-xs">
          {title}
        </Typography>
        <Typography variant="caption" className=" ">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

function DataItem2({ title,setLeftClickValues }) {
  return (
    <Box  onClick={() => setLeftClickValues(title)} className="flex overflow-hidden items-center border-2 px-2 rounded-lg cursor-pointer mb-3 shadow-lg py-2">
      <AdsClickIcon />
      <Box className="flex flex-col pl-3">
        <Typography variant="caption" className="font-bold text-sm">
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  // '&:not(:last-child)': {
  //   borderBottom: 0,
  // },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor:
  //   theme.palette.mode === 'dark'
  //     ? 'rgba(255, 255, 255, .05)'
  //     : 'rgba(0, 0, 0, .03)',
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  // padding: theme.spacing(2),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function page() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [LeftSidebar, setLeftSidebar] = useState(true);
  const [RightSidebar, setRightSidebar] = useState(true);
  const [LeftClickValues, setLeftClickValues] = useState(false)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Grid
      container
      className="bg-[url(https://media.istockphoto.com/id/927772590/vector/dotted-paper-background.jpg?s=612x612&w=0&k=20&c=KGlRB32MYf6K-r3Yxghv7oGy1a7QfcfrwG0I5d5BUSI=)]"
    >
      <Grid item xs={12} className="h-fit">
        <Header />
      </Grid>

      {/* <Grid item xs={12} className="flex justify-start">
        <Grid container> */}
      <Grid
        item
        className={`bg-white h-[89vh] px-3 py-4 border-r-2 shadow-xl overflow-y-scroll overflow-x-hidden  scrollbar-thin scrollbar-thumb-blue-200 ${
          !LeftSidebar && "hidden"
        }`}
        xs
      >
        <Typography variant="subtitle1" className="font-bold mb-3">
          Input
        </Typography>
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
        <Divider className="text-slate-500 py-2" />

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <TitleHead title="Datasets" />
          </AccordionSummary>
          <AccordionDetails>
            <Box className="my-3">
           
              <DataItem title="Amazon_table_chart" subtitle="CSV" setLeftClickValues={setLeftClickValues} />
              <DataItem title="SKU Map_table_chart" subtitle="CSV" setLeftClickValues={setLeftClickValues} />
              <DataItem
                title="Inventory Across Channels_table_chart"
                subtitle="CSV"
              setLeftClickValues={setLeftClickValues} />
            </Box>
          </AccordionDetails>
        </Accordion>

        <Divider className="text-slate-500 py-2" />

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <TitleHead title="Connectors" />
          </AccordionSummary>
          <AccordionDetails>
            <Box className="my-3">
              <DataItem2 title="AWS Asset Inventory" setLeftClickValues={setLeftClickValues} />
              <DataItem2 title="Adobe" setLeftClickValues={setLeftClickValues} />
              <DataItem2 title="Airtable" setLeftClickValues={setLeftClickValues} />
              <DataItem2 title="Amazon CloudFront" setLeftClickValues={setLeftClickValues} />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid
        item
        xs={
          (LeftSidebar && !RightSidebar) || (!LeftSidebar && RightSidebar)
            ? 10
            : !LeftSidebar && !RightSidebar
            ? 12
            : LeftSidebar && RightSidebar && 8
        }
        className="relative h-[89vh] "
      >
        <Box
          className={`bg-purple-500 cursor-pointer h-8 w-8 rounded-lg flex justify-center items-center absolute transition-all ${
            LeftSidebar ? "-left-5 top-4" : "left-1 top-4"
          }`}
          onClick={() => setLeftSidebar((prev) => !prev)}
        >
          {LeftSidebar ? (
            <KeyboardArrowLeft className="text-white" />
          ) : (
            <KeyboardArrowRight className="text-white" />
          )}
        </Box>
        <Box
          onClick={() => setRightSidebar((prev) => !prev)}
          className={`bg-purple-500 cursor-pointer h-8 w-8 rounded-lg flex justify-center items-center absolute transition-all ${
            !RightSidebar ? "right-1 top-4" : "-right-5 top-4"
          }`}
        >
          {!RightSidebar ? (
            <KeyboardArrowLeft className="text-white" />
          ) : (
            <KeyboardArrowRight className="text-white" />
          )}
        </Box>
        <DnD LeftClickValues={LeftClickValues} setLeftClickValues={setLeftClickValues} />
      </Grid>
      <Grid
        item
        xs
        className={`bg-white h-[89vh] border-l-2 px-3 py-4 shadow-xl overflow-y-scroll overflow-x-hidden  scrollbar-thin scrollbar-thumb-blue-200 ${
          !RightSidebar && "hidden"
        }`}
      >
        <Typography variant="subtitle1" className="font-bold mb-3 text-end">
          Output
        </Typography>
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
        <Divider className="text-slate-500 py-2" />
        {/* </Grid>
        </Grid> */}
      </Grid>
    </Grid>
  );
}

export default page;
