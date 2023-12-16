import styles from "@/components/common/Footer/footer.module.css";
import Image from "next/image";

export function Footer() {
  return (
    <div className={styles.description}>
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
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
}
