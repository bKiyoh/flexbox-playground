"use client";
import styles from "@/app/page.module.css";
import { Flexbox } from "@/components/flexbox";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Menu } from "@/components/common/Menu";
import { SelectBox } from "@/components/common/SelectBox";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Home() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <main className={styles.main}>
        <Header
          title="Index"
          pageNo={1}
          code={<code className={styles.code}>src/app/page.tsx</code>}
        />
        <div className={styles.center}>
          <Flexbox />
        </div>
        <SelectBox />
        <Menu />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
