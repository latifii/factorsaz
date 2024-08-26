import { AppBar, Stack, styled, Toolbar, useTheme } from "@mui/material";
import { useResponsive } from "../../hooks/use-responsive";
import { HEADER, NAV } from "../../configs/config-layout";
import { bgBlur } from "../../theme/css";

export type HeaderProps = {
  onOpenNav?: (value: boolean) => void;
};

const HeaderPanel: React.FC<HeaderProps> = ({ onOpenNav }) => {
  const theme = useTheme();
  const lgUp = useResponsive("up", "lg");

  const renderContent = (
    <>
      <Stack direction="row" alignItems="center" spacing={1}>
        <p>نوتیفت</p>
        <p>کاربر</p>
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        left: 0,
        right: "auto",
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar sx={{ height: 1, px: { lg: 5 } }}>{renderContent}</Toolbar>
    </AppBar>
  );
};

export default HeaderPanel;
