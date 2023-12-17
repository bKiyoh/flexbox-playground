"use client";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import { Flexbox } from "@/components/flexbox";
type FlexDirection = "column" | "column-reverse" | "row" | "row-reverse";
type PageProps = {
  flexDirection: FlexDirection;
};

export function SelectBox(props: PageProps) {
  const [flexDirection, setFlexDirection] = useState<FlexDirection>(
    props.flexDirection
  );
  const handleChange = (event: SelectChangeEvent) => {
    setFlexDirection(event.target.value as FlexDirection);
  };
  return (
    <>
      {/* <div>
        <Flexbox flexDirection={flexDirection} />
      </div> */}
      <Box sx={{ minWidth: 180 }}>
        <FormControl fullWidth>
          <InputLabel>FlexDirection</InputLabel>
          <Select
            value={flexDirection}
            label="FlexDirection"
            onChange={handleChange}
          >
            <MenuItem value={"column"}>column</MenuItem>
            <MenuItem value={"column-reverse"}>column-reverse</MenuItem>
            <MenuItem value={"row"}>row</MenuItem>
            <MenuItem value={"row-reverse"}>row-reverse</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
