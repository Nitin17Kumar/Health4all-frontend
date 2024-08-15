import React from "react";
import { Box } from "@mui/material";
import './WorkoutDatabase.css';
import WorkoutDatabase from "./WorkoutDatabase";

const Exercise = () => {
  return (
    <div className="">
      <Box className="flex justify-center items-center mt-[-25px]">
        <WorkoutDatabase />
      </Box>
    </div>
  );
};

export default Exercise;
