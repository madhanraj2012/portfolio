import { Box, Container, Stack, Typography, Chip, Button } from "@mui/material";

export const Landing = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
      }}
    >
      <ImageView />

      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          paddingLeft: 2,
        }}
      >
        <NameAndRoleView />

        <ChipView names={["Kotlin", "Jetpack Compose", "Ktor", "Spring"]} />
        <ChipView names={["XMPP", "WebSockets", "VoIP"]} />
        <ChipView names={["Room", "Realm", "Junit4", "Mockito"]} />
        <ChipView names={["GitHub", "Firebase", "AWS S3"]} />

        <ButtonView />
      </Box>
    </Container>
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

const ImageView = () => {
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

interface ChipViewProps {
  names: string[];
}

const ChipView: React.FC<ChipViewProps> = ({ names }) => {
  return (
    <Stack direction="row" spacing={2} marginBottom={2} justifyContent="center">
      {names.map((name, index) => (
        <Chip key={index} label={name} />
      ))}
    </Stack>
  );
};

const ButtonView = () => {
  return (
    <Stack direction="row" spacing={2} marginTop={6} justifyContent="center">
      <ActionButton name="View Projects"></ActionButton>
      <ActionButton
        name="Download Resume"
        href="./madhan_raj_resume_2024.pdf"
      ></ActionButton>
    </Stack>
  );
};

interface ActionButtonProps {
  name: string;
  href?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ name, href }) => {
  return (
    <a href={href} download>
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
    </a>
  );
};
