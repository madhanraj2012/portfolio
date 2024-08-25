import { Box, Typography } from "@mui/material";

export const TitleDescriptionView = ({ title = "", desc = "" }) => {
  return (
    <Box>
      <Typography variant="h4" component="div">
        {title}
      </Typography>

      <Typography
        variant="subtitle1"
        component="div"
        sx={{ color: "grey", marginBottom: 2 }}
      >
        {desc}
      </Typography>
    </Box>
  );
};
