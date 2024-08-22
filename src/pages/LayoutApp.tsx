import { Outlet } from "react-router";
import { Box } from "@mui/material";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
const LayoutApp: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box sx={{ flexGrow: 1 }} component="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default LayoutApp;
