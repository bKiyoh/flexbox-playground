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
  const [testValue, setTestValue] = useState<string>("test1");

  const selectOptionsTest = {
    currentValue: testValue,
    onChange: setTestValue,
    label: "テスト",
    options: ["test1", "test2"],
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
          <SelectBox selectOptions={selectOptionsTest} />
        </div>
        <Menu />
      </main>
    </ThemeProvider>
  );
}
