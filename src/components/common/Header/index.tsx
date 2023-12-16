import Link from "next/link";
import styles from "@/components/common/Header/header.module.css";

type PageProps = {
  title: string;
  pageNo: number;
  code: React.ReactNode;
};

export function Header(props: PageProps) {
  return (
    <div className={styles.description}>
      <h1>Flexbox Playground</h1>
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
