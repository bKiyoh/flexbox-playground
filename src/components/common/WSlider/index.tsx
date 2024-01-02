import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

type SelectBoxProps = {
  selectOptions: {
    currentValue: number | number[];
    onChange: (newValue: number) => void;
    label: string;
    min?: number;
    max?: number;
  };
};

export function WSlider({ selectOptions }: SelectBoxProps) {
  const min = selectOptions.min || 10;
  const max = selectOptions.max || 200;

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      selectOptions.onChange(newValue);
    }
  };

  return (
    <Box sx={{ m: 2, minWidth: 180 }}>
      <FormControl fullWidth>
        <Typography>
          {selectOptions?.label} : {selectOptions?.currentValue}px
        </Typography>
        <Slider
          value={selectOptions.currentValue}
          onChange={handleChange}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={min}
          max={max}
        />
      </FormControl>
    </Box>
  );
}
