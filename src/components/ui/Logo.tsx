import React from "react";
import { Box } from "@mui/material";

type LogoProps = {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
};

const Logo: React.FC<LogoProps> = ({
  src,
  alt = "Logo",
  width = 100,
  height = 100,
}) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: width,
        height: height,

        objectFit: "contain",
      }}
    />
  );
};

export default Logo;
