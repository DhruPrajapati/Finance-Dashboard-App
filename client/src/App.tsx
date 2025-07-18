import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "@/scenes/navbar";
import Dashboard from "./scenes/dashboard";


function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">

          <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/predictions" element={<div>prediction pages</div>} />
          </Routes>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
