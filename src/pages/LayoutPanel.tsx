import { Outlet } from "react-router";
import { Box } from "@mui/material";
import NavPanel from "../components/layout/NavPanel";
import Main from "../components/layout/Main";
import HeaderPanel from "../components/layout/HeaderPanel";
import { useState } from "react";

const LayoutPanel: React.FC = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <HeaderPanel onOpenNav={() => setOpenNav(true)} />
      <Box
        sx={{
          display: "flex",
          minHeight: 1,
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <NavPanel openNav={openNav} onCloseNav={() => setOpenNav(false)} />
        <Main>
          <Outlet />
        </Main>
      </Box>
    </>
  );
};

export default LayoutPanel;
