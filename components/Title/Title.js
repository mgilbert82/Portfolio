import styles from "./Title.module.css";
import { React } from "react";
import Quote from "../Quotes/Quote";

export default function Title() {
  return (
    <>
      <div className={styles.container}>
        <h1>Michel Gilbert</h1>
        <h3>FULL STACK DEVELOPER</h3>
        <Quote />
      </div>
    </>
  );
}
