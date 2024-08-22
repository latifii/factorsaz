import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        pt: 9,
        pb: 4,
        textAlign: "center",
        bgcolor: "primary.dark",
        color: "white",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} textAlign="right">
            <Typography variant="h6" gutterBottom>
              لوگو
            </Typography>
            <Typography variant="body2" lineHeight="2">
              فاکتور ساز سرویس فاکتور اینترنتی است که با آن میتوانید به صورت
              آنلاین فاکتور بسازید و برای مشتری ارسال کنید ، بروی فاکتور دکمه
              پرداخت از طریق درگاه اینترنتی بانک وجود دارد .
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="right">
            <Typography variant="h6" gutterBottom>
              لینک سریع
            </Typography>
            <List>
              <ListItem sx={{ paddingY: "3px" }}>
                <Button component={Link} to="signup" color="inherit">
                  ثبت نام
                </Button>
              </ListItem>
              <ListItem sx={{ paddingY: "3px" }}>
                <Button component={Link} to="about" color="inherit">
                  درباره ما
                </Button>
              </ListItem>
              <ListItem sx={{ paddingY: "3px" }}>
                <Button component={Link} to="sample" color="inherit">
                  نمونه فاکتور
                </Button>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={4} textAlign="right">
            <Typography variant="h6" gutterBottom>
              تماس با ما
            </Typography>
            <List>
              <ListItem sx={{ paddingY: "3px" }}>
                شماره تماس:
                <Button component="a" href="#" color="inherit">
                  0910100500
                </Button>
              </ListItem>
              <ListItem sx={{ paddingY: "3px", textAlign: "right" }}>
                شبکه های اجتماعی:
                <Box display="flex">
                  <Button component="a" href="#" color="inherit">
                    <InstagramIcon />
                  </Button>
                  <Button component="a" href="#" color="inherit">
                    <TelegramIcon />
                  </Button>
                  <Button component="a" href="#" color="inherit">
                    <WhatsAppIcon />
                  </Button>
                </Box>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
      <Typography variant="body2" sx={{ borderTop: 1 }} pt="1rem">
        تمام حقوق برای شرکت کاما محفوظ است© {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
