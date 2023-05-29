"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Header from "./Header";
import Main from "./Main";
import Circle from "@/components/Hero/circle";

export default function MiniDrawer() {
  return (
    <Box >
      <Header />
      <Box className="px-10 py-5 relative ">
        <Main />
        {/* <Circle /> */}
      </Box>
    </Box>
  );
}
