// import { createTheme, ThemeProvider } from "@mui/material";
import Router from "./Router";
import ThemeProvider from "./theme";
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#1976d2",
//       dark: "#002d79",
//       light: "#c0e0ff",
//     },
//   },
//   typography: {
//     fontFamily: "Iransans, Arial, sans-serif",
//   },
// });

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
