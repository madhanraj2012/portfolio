import { Box, Container, Stack, Typography, Chip, Button } from "@mui/material";

export const ProjectImageView = ({ path = "" }) => {
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
          maxWidth: "300px",
        }}
        alt="Image"
        src={path}
      />
    </Box>
  );
};
