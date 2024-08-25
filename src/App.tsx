import React, { useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { Landing } from "./components/Landing";

import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <NavBar />
      <Landing />
    </Box>
  );
}

export default App;
