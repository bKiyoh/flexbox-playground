"use client";
import styles from "@/app/page.module.css";
import { Flexbox } from "@/components/flexbox";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Menu } from "@/components/common/Menu";
import { SelectBox } from "@/components/common/SelectBox";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
type FlexDirection = "column" | "column-reverse" | "row" | "row-reverse";
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
        <Header
          title="Index"
          pageNo={1}
          code={<code className={styles.code}>src/app/page.tsx</code>}
        />
        <div className={styles.center}>
          <Flexbox flexDirection={flexDirection} />
        </div>
        <SelectBox flexDirection={flexDirection} />
        <Menu />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
