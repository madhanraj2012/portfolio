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
          borderRadius: "50%",
          backgroundColor: "#fff",
          padding: "5px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
        alt="Image"
        src={path}
      />
    </Box>
  );
};
