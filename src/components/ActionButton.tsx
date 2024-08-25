import React from "react";
import { Box, Container, Stack, Typography, Chip, Button } from "@mui/material";

export const ActionButton = ({ name = "" }) => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "50px",
        padding: "10px 20px",
        textTransform: "none",
        backgroundColor: "#333333",
        "&:hover": {
          backgroundColor: "#555555",
          transform: "scale(1.05)",
        },
      }}
    >
      {name}
    </Button>
  );
};
