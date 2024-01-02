"use client";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Button, FormControl } from "@mui/material";
import { Flexbox } from "@/components/flexbox";
import { Header } from "@/components/common/Header";
import { WSelectBox } from "@/components/common/WSelectBox";
import { WSlider } from "@/components/common/WSlider";
import { FlexDirection, FlexWrap, JustifyContent } from "@/types";
import styles from "@/app/page.module.css";

export default function Home() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const initialWidth = 50;
  const initialHeight = 50;
  const initialFlexDirection = "row";
  const initialJustifyContent = "space-around";
  const initialFlexWrap = "nowrap";

  const [width, setWidth] = useState<number>(initialWidth);
  const [height, setHeight] = useState<number>(initialHeight);
  const [flexDirection, setFlexDirection] =
    useState<FlexDirection>(initialFlexDirection);
  const [justifyContent, setJustifyContent] = useState<JustifyContent>(
    initialJustifyContent
  );
  const [flexWrap, setFlexWrap] = useState<FlexWrap>(initialFlexWrap);

  const WidthOptions = {
    currentValue: width,
    onChange: setWidth,
    label: "width",
  };
  const HeightOptions = {
    currentValue: height,
    onChange: setHeight,
    label: "height",
    max: 150,
  };
  const flexDirectionOptions = {
    currentValue: flexDirection,
    onChange: setFlexDirection,
    label: "flexDirection :",
    options: ["column", "column-reverse", "row", "row-reverse"],
  };
  const justifyContentOptions = {
    currentValue: justifyContent,
    onChange: setJustifyContent,
    label: "justifyContent :",
    options: [
      "center",
      "end",
      "flex-end",
      "flex-start",
      "start",
      "space-around",
      "space-between",
      "space-evenly",
      "stretch",
    ],
  };
  const flexWrapOptions = {
    currentValue: flexWrap,
    onChange: setFlexWrap,
    label: "flexWrap :",
    options: ["nowrap", "wrap", "wrap-reverse"],
  };

  const resetSettings = () => {
    setWidth(initialWidth);
    setHeight(initialHeight);
    setFlexDirection(initialFlexDirection);
    setJustifyContent(initialJustifyContent);
    setFlexWrap(initialFlexWrap);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <main className={styles.main}>
        <Header />
        <div className={styles.center}>
          <Flexbox
            width={width}
            height={height}
            flexDirection={flexDirection}
            justifyContent={justifyContent}
            flexWrap={flexWrap}
          />
        </div>
        <div className={styles.center}>
          <WSlider selectOptions={WidthOptions} />
          <WSlider selectOptions={HeightOptions} />
        </div>
        <div className={styles.grid}>
          <WSelectBox selectOptions={flexDirectionOptions} />
          <WSelectBox selectOptions={justifyContentOptions} />
          <WSelectBox selectOptions={flexWrapOptions} />
          <Box sx={{ m: 2, minWidth: 180 }}>
            <FormControl fullWidth>
              <Button variant="contained" size="medium" onClick={resetSettings}>
                Reset
              </Button>
            </FormControl>
          </Box>
        </div>
      </main>
    </ThemeProvider>
  );
}
