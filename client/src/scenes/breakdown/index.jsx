import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import BreakdownChart from "components/BreakdownChart";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Breakdown" subtitle="Breakdown of Sales By Category" />
      <Box m="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
