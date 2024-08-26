import { Outlet } from "react-router";
import { Box } from "@mui/material";
import NavPanel from "../components/layout/NavPanel";
import Main from "../components/layout/Main";
import HeaderPanel from "../components/layout/HeaderPanel";

const LayoutPanel: React.FC = () => {
  return (
    <>
      <HeaderPanel />
      <Box
        sx={{
          display: "flex",
          minHeight: 1,
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <NavPanel />
        <Main>
          <Outlet />
        </Main>
      </Box>
    </>
  );
};

export default LayoutPanel;
