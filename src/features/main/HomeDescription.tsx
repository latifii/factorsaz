import { Box, Container, Typography } from "@mui/material";
import imgCutomers from "../../assets/images/customers.png";
import imgRcurring from "../../assets/images/recurring.png";
import imgPayment from "../../assets/images/payment_icon.png";

const desc = [
  {
    img: imgCutomers,
    title: "شخصی سازی",
    description:
      "لوگو و نشان شما بروی تمام فاکتور ها نمایش داده می شود همچنین در ایمیل ها امضا و اطلاعات تماس شما درج می شود که بدین وسیله برند شما تقویت خواهد شد و مشتریان تجربه خرید خوبی را خواهند داشت .",
  },
  {
    img: imgRcurring,
    title: "رهگیری",
    description:
      "فاکتور های پرداخت نشده به صورت خودکار پیگیری می شود و با ارسال پیامک و ایمیل در بازه های منظم به مشتریان شما یادآوری می شود که تاثیر بسیار قابل توجهی در افزایش نقد شوندگی حساب های شما خواهد داشت .",
  },
  {
    img: imgPayment,
    title: "گزارش روزانه",
    description:
      "شما مستقیماً از داشبورد از وضعیت مالی کسب‌وکار گزارش دریافت می‌کنید. با گزارش‌هایی درباره محصولات پرفروش،  مشتریان برتر و موارد دیگر، ",
  },
];

const HomeDescription: React.FC = () => {
  return (
    <Container sx={{ marginY: "5rem" }}>
      {desc.map((item, i) => {
        return (
          <Box
            key={item.title}
            display="flex"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
            alignItems="center"
            py="3.5rem"
            px="2rem"
          >
            <Box
              textAlign="center"
              sx={{
                order: { md: i === 1 ? "1" : "-1" },
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{ width: { xs: "80%", md: "auto" } }}
              />
            </Box>
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Typography component="h3" variant="h4" mb="1rem">
                {item.title}
              </Typography>
              <Typography variant="body1" lineHeight="1.8">
                {item.description}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Container>
  );
};

export default HomeDescription;
