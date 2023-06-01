import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.containerNavbar}>
      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/works">Works</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/works/addWork">Add Work</Link>
      </nav>
    </div>
  );
}
