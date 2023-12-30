"use client";
import styles from "@/app/page.module.css";
import { Flexbox } from "@/components/flexbox";
import { Header } from "@/components/common/Header";
import { Menu } from "@/components/common/Menu";
import { FlexDirectionSelectBox } from "@/components/common/FlexDirectionSelectBox";
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
  const [foo, setHoge] = useState<string>("test1");

  const hoge = {
    value: foo,
    label: "ホゲータ",
    options: ["test1", "test2"],
    changeValue: setHoge,
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <main className={styles.main}>
        <Header />
        <div className={styles.center}>
          <Flexbox flexDirection={flexDirection} />
        </div>
        <div className={styles.grid}>
          <FlexDirectionSelectBox
            flexDirection={flexDirection}
            onFlexDirectionChange={setFlexDirection}
          />
          <SelectBox hoge={hoge} />
        </div>
        <Menu />
      </main>
    </ThemeProvider>
  );
}
