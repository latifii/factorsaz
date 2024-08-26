import { Box, Drawer } from "@mui/material";
import { NAV } from "../../configs/config-layout";
import { useResponsive } from "../../hooks/use-responsive";

export type NavProps = {
  openNav: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onCloseNav: (value?: any) => void;
};

const NavPanel: React.FC<NavProps> = ({ openNav, onCloseNav }) => {
  const upLg = useResponsive("up", "lg");
  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
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
      ) : (
        <Drawer open={openNav} onClose={onCloseNav}>
          ناو موبایل
        </Drawer>
      )}
    </Box>
  );
};

export default NavPanel;
