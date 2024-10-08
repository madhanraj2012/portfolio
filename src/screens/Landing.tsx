import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { ActionButton } from "../components/ActionButton";
import { ChipView } from "../components/ChipView";
import { LandingImageView } from "../components/LandingImageView";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";
import { TitleDescriptionView } from "../components/TitleDescriptionView";

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
          direction={{ sm: "column", md: "row" }}
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
      <TitleDescriptionView title="Madhan Raj" desc="Android App Developer" />

      <ChipView names={["Kotlin", "Jetpack Compose", "Ktor", "Spring"]} />
      <ChipView names={["XMPP", "WebSockets", "VoIP"]} />
      <ChipView names={["Room", "Realm", "Junit4", "Mockito"]} />
      <ChipView names={["GitHub", "Firebase", "AWS S3"]} />

      <ButtonView />
    </Box>
  );
};

const ButtonView = () => {
  return (
    <Stack direction="row" spacing={2} marginTop={6} justifyContent="center">
      <Link to="/portfolio/projects" style={{ textDecoration: "none" }}>
        <ActionButton name="View Projects"></ActionButton>
      </Link>
      <a href={"portfolio/madhan_raj_resume_2024.pdf"} download>
        <ActionButton name="Download Resume" />
      </a>
    </Stack>
  );
};
