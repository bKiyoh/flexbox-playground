"use client";
import styles from "@/app/page.module.css";
import { Flexbox } from "@/components/flexbox";
import { Header } from "@/components/common/Header";
import { Menu } from "@/components/common/Menu";
import { WSelectBox } from "@/components/common/WSelectBox";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { FlexDirection, JustifyContent } from "@/types";

export default function Home() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [boxSize, setBoxSize] = useState<number>(50);
  const [flexDirection, setFlexDirection] = useState<FlexDirection>("row");
  const [justifyContent, setJustifyContent] =
    useState<JustifyContent>("center");

  const boxSizeOptions = {
    currentValue: boxSize,
    onChange: setBoxSize,
    label: "Box Size",
    options: [50, 100, 150],
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

  return (
    <ThemeProvider theme={darkTheme}>
      <main className={styles.main}>
        <Header />
        <div className={styles.center}>
          <Flexbox
            boxSize={boxSize}
            flexDirection={flexDirection}
            justifyContent={justifyContent}
          />
        </div>
        <div className={styles.grid}>
          <WSelectBox selectOptions={boxSizeOptions} />
          <WSelectBox selectOptions={flexDirectionOptions} />
          <WSelectBox selectOptions={justifyContentOptions} />
        </div>
        <Menu />
      </main>
    </ThemeProvider>
  );
}
