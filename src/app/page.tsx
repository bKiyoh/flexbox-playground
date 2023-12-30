"use client";
import styles from "@/app/page.module.css";
import { Flexbox } from "@/components/flexbox";
import { Header } from "@/components/common/Header";
import { Menu } from "@/components/common/Menu";
import { SelectBox } from "@/components/common/SelectBox";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { FlexDirection } from "@/types";

export default function Home() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [flexDirection, setFlexDirection] = useState<FlexDirection>("row");

  const flexDirectionOptions = {
    currentValue: flexDirection,
    onChange: setFlexDirection,
    label: "Flex Direction",
    options: ["column", "column-reverse", "row", "row-reverse"],
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <main className={styles.main}>
        <Header />
        <div className={styles.center}>
          <Flexbox flexDirection={flexDirection} />
        </div>
        <div className={styles.grid}>
          <SelectBox selectOptions={flexDirectionOptions} />
        </div>
        <Menu />
      </main>
    </ThemeProvider>
  );
}
