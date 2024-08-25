import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { ActionButton } from "../components/ActionButton";
import { ChipView } from "../components/ChipView";
import { LandingImageView } from "../components/LandingImageView";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Box>
      <NavBar />
      <Container
        maxWidth="lg"
        sx={{
          padding: 2,
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
        >
          <LandingImageView />

          <InfoView />
        </Stack>
      </Container>
    </Box>
  );
}

const InfoView = () => {
  return (
    <Box
      sx={{
        flex: 1,
        textAlign: "center",
      }}
    >
      <NameAndRoleView />

      <ChipView names={["Kotlin", "Jetpack Compose", "Ktor", "Spring"]} />
      <ChipView names={["XMPP", "WebSockets", "VoIP"]} />
      <ChipView names={["Room", "Realm", "Junit4", "Mockito"]} />
      <ChipView names={["GitHub", "Firebase", "AWS S3"]} />

      <ButtonView />
    </Box>
  );
};

const NameAndRoleView = () => {
  return (
    <Box>
      <Typography variant="h4" component="div">
        Madhan Raj
      </Typography>

      <Typography
        variant="subtitle1"
        component="div"
        sx={{ color: "grey", marginBottom: 2 }}
      >
        Android App Developer
      </Typography>
    </Box>
  );
};

const ButtonView = () => {
  return (
    <Stack direction="row" spacing={2} marginTop={6} justifyContent="center">
      <Link to="/projects" style={{ textDecoration: "none" }}>
        <ActionButton name="View Projects"></ActionButton>
      </Link>
      <a href={"./madhan_raj_resume_2024.pdf"} download>
        <ActionButton name="Download Resume" />
      </a>
    </Stack>
  );
};
