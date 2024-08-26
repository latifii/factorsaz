import { Box } from "@mui/material";
import { NAV } from "../../configs/config-layout";

const NavPanel: React.FC = () => {
  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        bgcolor: "blue",
        width: { lg: NAV.WIDTH },
      }}
    >
      <Box
        sx={{
          height: 1,
          position: "fixed",
          width: NAV.WIDTH,
          borderLeft: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        ناو
      </Box>
    </Box>
  );
};

export default NavPanel;
