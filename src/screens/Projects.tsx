import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { NavBar } from "../components/NavBar";
import { ProjectImageView } from "../components/ProjectImageView";
import { ChipView } from "../components/ChipView";
import { ActionButton } from "../components/ActionButton";
import { TitleDescriptionView } from "../components/TitleDescriptionView";

enum Project {
  JUGL,
  TOONMOJI,
  MAGICBOX,
}

export default function Projects() {
  return (
    <Box>
      <NavBar />

      <Container
        maxWidth="lg"
        sx={{
          padding: 2,
        }}
      >
        <ProjectDetails type={Project.JUGL} path="/portfolio/jugl.png" />
        <ProjectDetails
          type={Project.TOONMOJI}
          path="/portfolio/toonmoji.svg"
        />
        <ProjectDetails type={Project.MAGICBOX} path="/portfolio/mb.png" />
      </Container>
    </Box>
  );
}

const ProjectDetails = ({ type = Project.JUGL, path = "" }) => {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        border: "2px solid black",
        marginBottom: 6,
        width: {
          xs: "90%",
          sm: "70%",
          md: "60%",
          lg: "50%",
        },
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Box paddingY={4} paddingX={2}>
        <Stack
          direction={{ sm: "column", md: "column" }}
          spacing={{
            xs: 4, // Increase spacing on extra-small screens (mobile)
            sm: 6, // Larger spacing on small screens (tablets)
            md: 2, // Default spacing on medium screens
          }}
          alignItems="center"
        >
          <ProjectImageView path={path} />
          {type === Project.JUGL ? (
            <JuglDetails />
          ) : type === Project.TOONMOJI ? (
            <ToonmojiDetails />
          ) : (
            <MagicBoxDetails />
          )}
        </Stack>
      </Box>
    </Box>
  );
};

const JuglDetails = () => {
  return (
    <Box
      sx={{
        flex: 1,
        textAlign: "center",
      }}
    >
      <TitleDescriptionView
        title="Jugl - Android App"
        desc="Features worked on:"
      />

      <ChipView names={["Employee Management", "Client Management"]} />
      <ChipView
        names={["Voice & Video Call", "Video Conference", "Reactions"]}
      />
      <ChipView names={["Chat Attachments", "Image & Video Compression"]} />

      <ButtonView link="https://play.google.com/store/apps/details?id=com.jugl" />
    </Box>
  );
};

const ToonmojiDetails = () => {
  return (
    <Box
      sx={{
        flex: 1,
        textAlign: "center",
      }}
    >
      <TitleDescriptionView title="Toonmoji" desc="Skills used:" />

      <ChipView names={["Jetpack Compose", "Swift UI"]} />

      <ButtonView link="https://play.google.com/store/apps/details?id=app.toonmoji.android" />
    </Box>
  );
};

const MagicBoxDetails = () => {
  return (
    <Box
      sx={{
        flex: 1,
        textAlign: "center",
      }}
    >
      <TitleDescriptionView title="Magicbox Apps" desc="Skills used:" />

      <ChipView names={["HLS Streaming", "Media3", "Rest API"]} />
      <ChipView names={["In-App purchase", "Subscription"]} />

      <ButtonView link="https://play.google.com/store/apps/details?id=com.magicbox.english&hl=en" />
    </Box>
  );
};

const ButtonView = ({ link = "" }) => {
  return (
    <Stack direction="row" spacing={2} marginTop={6} justifyContent="center">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ActionButton name="View On Play Store" />
      </a>
    </Stack>
  );
};
