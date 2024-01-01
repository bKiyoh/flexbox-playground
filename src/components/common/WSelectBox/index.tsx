import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";

type SelectBoxProps<T> = {
  selectOptions: {
    currentValue: T;
    onChange: (newValue: T) => void;
    label: string;
    options: string[] | number[];
  };
};

export function WSelectBox<T>({ selectOptions }: SelectBoxProps<T>) {
  const handleChange = (event: SelectChangeEvent<T>) => {
    selectOptions.onChange(event.target.value as T);
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
