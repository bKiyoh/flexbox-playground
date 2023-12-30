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

  return (
    <ThemeProvider theme={darkTheme}>
      <main className={styles.main}>
        <Header />
        <div className={styles.center}>
          <Flexbox flexDirection={flexDirection} />
        </div>
        <div className={styles.grid}>
          <SelectBox
            flexDirection={flexDirection}
            onFlexDirectionChange={setFlexDirection}
          />
        </div>
        <Menu />
      </main>
    </ThemeProvider>
  );
}
