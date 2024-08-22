import { createTheme, ThemeProvider } from "@mui/material";
import Router from "./Router";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      dark: "#002d79", // (اختیاری) رنگ تیره‌تر
    },
  },
  typography: {
    fontFamily: "Iransans, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
