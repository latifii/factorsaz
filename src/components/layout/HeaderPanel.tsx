import {
  AppBar,
  Button,
  IconButton,
  Stack,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useResponsive } from "../../hooks/use-responsive";
import { HEADER, NAV } from "../../configs/config-layout";
import { bgBlur } from "../../theme/css";
import DehazeIcon from "@mui/icons-material/Dehaze";

export type HeaderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onOpenNav?: (value: any) => void;
};

const HeaderPanel: React.FC<HeaderProps> = ({ onOpenNav }) => {
  const theme = useTheme();
  const lgUp = useResponsive("up", "lg");

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <DehazeIcon />
        </IconButton>
      )}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width={1}
        spacing={1}
        sx={{ color: "text.primary" }}
      >
        <Typography variant="body2">{new Date().getDate()}</Typography>
        <Button color="primary" variant="contained">
          خروج
        </Button>
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
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
