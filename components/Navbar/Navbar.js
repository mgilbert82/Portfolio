import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.containerNavbar}>
      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/works">Works</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
