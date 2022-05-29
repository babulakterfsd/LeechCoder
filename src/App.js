import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./shared/sharedComponents/AllRoutes";



function App() {
   const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })


  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
         <AllRoutes mode={mode} setMode={setMode} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
