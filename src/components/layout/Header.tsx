import {
  AppBar,
  Box,
  Button,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <p>Show</p>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ top: 0, bgcolor: "primary.dark" }}>
      <Toolbar>
        <Button component={Link} to="/" color="inherit">
          <Typography variant="h6">لوگو</Typography>
        </Button>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button component={Link} to="/" color="inherit">
            خانه
          </Button>
          <Button component={Link} to="about" color="inherit">
            درباره ما
          </Button>
          <Button component={Link} to="sample" color="inherit">
            نمونه فاکتور
          </Button>
        </Box>

        <Button
          component={Link}
          to="login"
          color="inherit"
          sx={{ marginRight: "auto" }}
        >
          ورود
        </Button>
        <Button
          color="inherit"
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={toggleDrawer(true)}
        >
          <DehazeIcon />
        </Button>
      </Toolbar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </AppBar>
  );
};

export default Header;
