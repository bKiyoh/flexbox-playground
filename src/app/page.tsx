"use client";
import styles from "@/app/page.module.css";
import { Flexbox } from "@/components/flexbox";
import { Header } from "@/components/common/Header";
import { Menu } from "@/components/common/Menu";
import { SelectBox } from "@/components/common/SelectBox";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { FlexDirection, JustifyContent } from "@/types";

export default function Home() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [flexDirection, setFlexDirection] = useState<FlexDirection>("row");
  const [justifyContent, setJustifyContent] =
    useState<JustifyContent>("center");

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
            flexDirection={flexDirection}
            justifyContent={justifyContent}
          />
        </div>
        <div className={styles.grid}>
          <SelectBox selectOptions={flexDirectionOptions} />
          <SelectBox selectOptions={justifyContentOptions} />
        </div>
        <Menu />
      </main>
    </ThemeProvider>
  );
}
