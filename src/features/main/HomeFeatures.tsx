import { Box, Container, Typography } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
const features = [
  {
    icon: <AccessAlarmIcon sx={{ fontSize: "60px", marginX: "auto" }} />,
    title: "صرفه جویی در زمان",
    description:
      "به سرعت فاکتورها و برآوردهای حرفه ای را در هر کجا که هستید ایجاد کنید",
  },
  {
    icon: <CreditScoreIcon sx={{ fontSize: "60px", marginX: "auto" }} />,
    title: "حرفه ای شوید",
    description:
      "به سادگی یک الگوی فاکتور را انتخاب کنید و آن را با لوگوی خود سفارشی کنید. حرفه ای به نظر برسید و منظم بمانید.",
  },
  {
    icon: (
      <PublishedWithChangesIcon sx={{ fontSize: "60px", marginX: "auto" }} />
    ),
    title: "گزارش روزانه",
    description:
      "به راحتی گزارش روزانه ، هفتگی ، ماهانه و فصلی بگیرید و پیگری فاکتورهای صادر شده باشید.",
  },
];

const HomeFeatures: React.FC = () => {
  return (
    <Box>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          gap={4}
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {features.map((feature) => {
            return (
              <Box
                key={`feayure-${feature.title}`}
                display="flex"
                flexDirection="column"
                gap={1}
                sx={{
                  bgcolor: "primary.light",
                  borderRadius: "0.5rem",
                  flex: 1,
                  py: "3rem",
                  px: "1rem",
                }}
              >
                {feature.icon}
                <Typography component="h3" variant="h6" textAlign="center">
                  {feature.title}
                </Typography>
                <Typography variant="body2" textAlign="center" lineHeight={1.8}>
                  {feature.description}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default HomeFeatures;
