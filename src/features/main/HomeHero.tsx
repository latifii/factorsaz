import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomeHero: React.FC = () => {
  return (
    <Box
      sx={{
        background:
          "url('src/assets/images/newhero.webp'), linear-gradient(to bottom,#002d79,rgba(34, 37, 48, 1))",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "600px",
      }}
    >
      <Container sx={{ paddingY: "150px" }}>
        <Box
          sx={{
            width: {
              xs: "60%",
              sm: "50%",
            },
            marginRight: "auto",
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            fontWeight="bold"
            color="white"
            sx={{
              lineHeight: 1.8,
              fontSize: {
                xs: "1.8rem",
                sm: "2.5rem",
                md: "3rem",
              },
            }}
          >
            آنلاین فاکتور صادر کنید
          </Typography>

          <Typography
            component="h2"
            variant="h5"
            fontWeight="bold"
            color="white"
            marginY="40px"
            sx={{
              lineHeight: 1.8,
              fontSize: {
                xs: "1.1rem",
                sm: "1.6rem",
                md: "2rem",
              },
            }}
          >
            به راحتی و در کمتر از 3 دقیقه فاکتور صادر و ارسال می کنید
          </Typography>

          <Button
            component={Link}
            to="/signup"
            variant="contained"
            size="large"
          >
            ثبت نام رایگان
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeHero;
