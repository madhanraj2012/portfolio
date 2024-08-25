import Landing from "./screens/Landing";
import Projects from "./screens/Projects";

import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />}></Route>
          <Route path="/portfolio" element={<Landing />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
