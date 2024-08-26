import { Stack, Chip } from "@mui/material";

interface ChipViewProps {
  names: string[];
}

export const ProjectChipView: React.FC<ChipViewProps> = ({ names }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      flexWrap="wrap"
      gap={2} // Use gap for consistent spacing between chips and rows
      sx={{ mt: 2 }} // Add top margin to the ChipView
    >
      {names.map((name, index) => (
        <Chip key={index} label={name} />
      ))}
    </Stack>
  );
};
