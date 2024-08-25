import React, { useEffect } from "react";
import { NavBar } from "./components/NavBar";
import Landing from "./screens/Landing";
import Projects from "./screens/Projects";

import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />}></Route>
          <Route path="/portfolio" element={<Landing />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="*" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
