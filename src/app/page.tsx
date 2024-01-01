"use client";
import styles from "@/app/page.module.css";
import { Flexbox } from "@/components/flexbox";
import { Header } from "@/components/common/Header";
import { WSelectBox } from "@/components/common/WSelectBox";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { FlexDirection, FlexWrap, JustifyContent } from "@/types";
import { WSlider } from "@/components/common/WSlider";

export default function Home() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [width, setWidth] = useState<number>(50);
  const [height, setHeight] = useState<number>(50);
  const [flexDirection, setFlexDirection] = useState<FlexDirection>("row");
  const [justifyContent, setJustifyContent] =
    useState<JustifyContent>("space-around");
  const [flexWrap, setFlexWrap] = useState<FlexWrap>("nowrap");

  const WidthOptions = {
    currentValue: width,
    onChange: setWidth,
    label: "Width",
  };
  const HeightOptions = {
    currentValue: height,
    onChange: setHeight,
    label: "Height",
    max: 150,
  };
  const flexDirectionOptions = {
    currentValue: flexDirection,
    onChange: setFlexDirection,
    label: "Flex Direction",
    options: ["column", "column-reverse", "row", "row-reverse"],
  };
  const justifyContentOptions = {
    currentValue: justifyContent,
    onChange: setJustifyContent,
    label: "JustifyContent",
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
    label: "FlexWrap",
    options: ["nowrap", "wrap", "wrap-reverse"],
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
        </div>
      </main>
    </ThemeProvider>
  );
}
