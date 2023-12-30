import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";

type PageProps = {
  hoge: {
    value: string;
    changeValue: (newValue: string) => void;
    label: string;
    options: string[];
  };
};

export function SelectBox({ hoge }: PageProps) {
  const handleChange = (event: SelectChangeEvent<string>) => {
    hoge.changeValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel>{hoge.label}</InputLabel>
        <Select
          value={hoge.value}
          onChange={handleChange}
          sx={{ m: 1, minWidth: 120 }}
        >
          {hoge.options.map((x) => (
            <MenuItem key={x} value={x}>
              {x}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
