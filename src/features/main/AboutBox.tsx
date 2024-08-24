import { Box, Container, Divider, Typography } from "@mui/material";

const AboutBox: React.FC = () => {
  return (
    <Container>
      <Box
        sx={{
          background: "url('src/assets/images/hero.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "15.5rem",
          //   borderEndEndRadius: ".5rem",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
        }}
      ></Box>
      <Typography component="h2" variant="h4" my="1.5rem" fontWeight="bold">
        درباره فاکتورساز
      </Typography>
      <Typography variant="body1" my="1.5rem" fontWeight="bold">
        صورت حساب هوشمند شما
      </Typography>
      <Divider />
      <Typography variant="body2" mt="1.5rem" mb="4rem" lineHeight="2">
        کسب و کارهای نوین امروز نیازمند ابزارهایی است که بتواند همگام با تغییرات
        سریع در زیرساخت های بازار پیش برود و بر مبنای پیشرفت های تکنولوژیک
        خدماتی در خور را عرضه نماید .<br />
        <br />
        فاکتورساز یک سیستم فاکتور آنلاین است که مدیریت حساب و مشتریان را کاملا
        آسان و امن در بستر اینترنت فراهم میکند . ما در فاکتورساز تمام تلاش خود
        را میکنیم که با استفاده از تکنولوژی روز ، بهترین سرویس را به کاربران خود
        ارائه کنیم و درکنار رشد آنها هروز بهتر شویم .<br />
        <br />
        هدف ما ساختن بهترین است . <br />
        تمامی حقوق مربوط به شرکت کاما است <br />
        ارادتمند
      </Typography>
    </Container>
  );
};

export default AboutBox;
