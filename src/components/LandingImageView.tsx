import { Box, Container, Stack, Typography, Chip, Button } from "@mui/material";

export const LandingImageView = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        sx={{
          width: "100%",
          height: "auto",
          maxWidth: "600px",
        }}
        alt="Image"
        src="./boy_working.svg"
      />
    </Box>
  );
};
