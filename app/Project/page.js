"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import Header from "./Header";
import Main from "./Main";

function page() {
  const ListItems = [
    "Flows",
    "Datasets",
    "Connectors",
    "Databases",
    "Dashboards",
    "Modals",
    "Recources",
  ];
  return (
    <Grid container>
      <Grid item xs={2} className="h-screen bg-slate-200">
        <Box className="px-5 py-8">
          <Typography variant="h5" className="mb-5 text-slate-400 font-medium">
            Projects
          </Typography>
          {ListItems.map((e, i) => (
            <Box
              className={`mb-5 cursor-pointer flex items-center px-5 py-3 ${
                i == 0 && "bg-blue-200 rounded-lg"
              }`}
            >
              <FlutterDashIcon className="text-blue-950" />{" "}
              <Typography
                variant="body1"
                className={`text-blue-950 pl-5 ${i == 0 && "font-bold"}`}
              >
                {e}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid item xs={10}>
        <Header />
        <Main />
      </Grid>
    </Grid>
  );
}

export default page;
