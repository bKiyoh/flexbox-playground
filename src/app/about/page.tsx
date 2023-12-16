import Image from "next/image";
import styles from "@/app/page.module.css";
import { Flexbox } from "@/components/flexbox";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Menu } from "@/components/common/Menu";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header
        title="About"
        pageNo={2}
        code={<code className={styles.code}>src/app/about/page.tsx</code>}
      />
      <div className={styles.center}>
        <Flexbox />
      </div>
      <Menu />
      <Footer />
    </main>
  );
}
