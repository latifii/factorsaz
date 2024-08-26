import { Theme } from "@emotion/react";
import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";
import { HEADER, NAV } from "../../configs/config-layout";
import { useResponsive } from "../../hooks/use-responsive";

type MainProps = {
  sx?: SxProps<Theme>;
  children: ReactNode;
};
const SPACING = 8;
const Main: React.FC<MainProps> = ({ sx, children }) => {
  const lgUp = useResponsive("up", "lg");

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: "flex",
        flexDirection: "column",
        bgcolor: "red",
        py: `${HEADER.H_MOBILE + SPACING}px`,
        ...(lgUp && {
          px: 2,
          py: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `clac(100%-${NAV.WIDTH}px)`,
        }),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
