import {
  AppBar,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GMailIcon from "@mui/icons-material/Mail";

export const NavBar = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: "#fff" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <NavBarTitle />
        <HeaderButtons />
      </Toolbar>
    </AppBar>
  );
};

const NavBarTitle = () => {
  return (
    <Link
      href="https://madhanraj2012.github.io/portfolio/"
      underline="none"
      rel="noopener noreferrer"
    >
      <Typography sx={{ color: "#000", textAlign: "start" }}>
        PORTFOLIO
      </Typography>
    </Link>
  );
};

const HeaderButtons = () => {
  return (
    <Stack direction={"row"} spacing={2} sx={{ alignItems: "end" }}>
      <LinkButton Icon={GMailIcon} href="mailto:madhanraj201297@gmail.com" />
      <LinkButton
        Icon={LinkedInIcon}
        href="https://linkedin.com/in/madhanraj201297"
      />
    </Stack>
  );
};

interface LinkButtonProps {
  Icon: React.ComponentType<{}>;
  href?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ Icon, href }) => {
  return (
    <Link
      href={href}
      underline="none"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconButton
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Icon />
      </IconButton>
    </Link>
  );
};
