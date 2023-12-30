import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import { FlexDirection } from "@/types";

type PageProps = {
  flexDirection: FlexDirection;
  onFlexDirectionChange: (newDirection: FlexDirection) => void;
};

export function SelectBox({ flexDirection, onFlexDirectionChange }: PageProps) {
  const flexDirectionOptions: FlexDirection[] = [
    "column",
    "column-reverse",
    "row",
    "row-reverse",
  ];

  const handleChange = (event: SelectChangeEvent<FlexDirection>) => {
    onFlexDirectionChange(event.target.value as FlexDirection);
  };

  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel>Flex Direction</InputLabel>
        <Select
          value={flexDirection}
          label="Flex Direction"
          onChange={handleChange}
          sx={{ m: 1, minWidth: 120 }}
        >
          {flexDirectionOptions.map((direction) => (
            <MenuItem key={direction} value={direction}>
              {direction}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
