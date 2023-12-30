import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";

type SelectBoxProps = {
  selectOptions: {
    currentValue: string;
    onChange: (newValue: string) => void;
    label: string;
    options: string[];
  };
};

export function SelectBox({ selectOptions }: SelectBoxProps) {
  const handleChange = (event: SelectChangeEvent<string>) => {
    selectOptions.onChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel>{selectOptions?.label}</InputLabel>
        <Select
          value={selectOptions?.currentValue}
          onChange={handleChange}
          sx={{ m: 1, minWidth: 120 }}
        >
          {selectOptions?.options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
