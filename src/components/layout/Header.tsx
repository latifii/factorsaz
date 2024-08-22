import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ top: 0, bgcolor: "primary.dark" }}>
      <Toolbar>
        <Button component={Link} to="/" color="inherit">
          <Typography variant="h6">لوگو</Typography>
        </Button>
        <Box>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
