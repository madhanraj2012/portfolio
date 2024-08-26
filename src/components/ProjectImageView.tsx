import { Box } from "@mui/material";

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
          maxWidth: "150px",
          borderRadius: "50%", // Circular crop
          backgroundColor: "#fff", // White background
          padding: "5px", // Optional padding to make sure the background is visible
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Optional shadow for better appearance
        }}
        alt="Image"
        src={path}
      />
    </Box>
  );
};
