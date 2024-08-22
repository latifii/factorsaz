import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Step,
  StepConnector,
  StepContent,
  StepLabel,
  Stepper,
  styled,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const steps = [
  {
    label: " ثبت نام",
    description: "به صورت رایگان ثبت نام کنید و وارد پنل کاربری شوید.",
  },
  {
    label: "ثبت مشتری",
    description: "مشتری های خود رو ثبت کنید ",
  },
  {
    label: "ثبت کالا",
    description: "کالاهای خود همراه با قیمت و مدل ثبت کنید",
  },
  {
    label: "ساختن فاکتور",
    description: "فاکتور خود را همراه با توضحیات مربوط بسازید",
  },
  {
    label: "چاپ فاکتور",
    description: "فاکتور خود را می توانید هم چاپ کنید هم با PDF دانلود کنید",
  },
];

const HomeSteper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleScroll = () => {
    const stepElements = document.querySelectorAll(".step-section");
    stepElements.forEach((step, index) => {
      const rect = step.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
        setActiveStep(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container sx={{ my: 12 }}>
      <Box
        display="flex"
        alignItems="center"
        gap={5}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            sx={{ direction: "rtl" }}
          >
            {steps.map((step, index) => (
              <Step key={step.label} active={true}>
                <StepLabel
                  StepIconComponent={() =>
                    activeStep >= index ? (
                      <CheckCircleIcon
                        sx={{
                          color: activeStep === index ? "#1976d2" : "#1976d2",
                          backgroundColor:
                            activeStep === index ? "#f0f0f0" : "transparent",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <RadioButtonUncheckedIcon
                        sx={{
                          color: "#1976d2",
                          backgroundColor:
                            activeStep === index ? "#f0f0f0" : "transparent",
                          borderRadius: "50%",
                        }}
                      />
                    )
                  }
                >
                  <Typography variant="h6" fontWeight="bold">
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent className="step-section">
                  <Typography paddingY="1.5rem">{step.description}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Typography
          textAlign="center"
          component="h3"
          variant="h3"
          fontWeight="bold"
          sx={{ order: { xs: -1, md: 1 } }}
        >
          چطوری یک <br />
          فاکتور بسازیم
        </Typography>
      </Box>
    </Container>
  );
};

export default HomeSteper;
