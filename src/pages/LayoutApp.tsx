import { Outlet } from "react-router";
import { Box, Container } from "@mui/material";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
const LayoutApp: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Container
        sx={{ flexGrow: 1, my: 2, bgcolor: "primary.main" }}
        component="main"
      >
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default LayoutApp;
