import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        bgcolor: "primary.dark",
        color: "white",
      }}
    >
      <Typography variant="body2">فوتر © {new Date().getFullYear()}</Typography>
    </Box>
  );
};

export default Footer;
