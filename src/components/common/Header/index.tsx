import Image from "next/image";
import styles from "@/components/common/Header/header.module.css";

export function Header() {
  return (
    <div className={styles.description}>
      <h1>Flexbox Playground</h1>
      <div>
        Thanks for{" "}
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={100}
          height={24}
          priority
        />
      </div>
    </div>
  );
}
