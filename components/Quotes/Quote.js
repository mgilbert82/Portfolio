import styles from "./Quote.module.css";
import quotes from "../../json/quotes";
import { React, useEffect, useState } from "react";

export default function Quote() {
  const [key, setKey] = useState(0);

  const data = quotes.quotesData;

  useEffect(
    () => setKey(Math.floor(Math.random() * Math.floor(data.length))),
    []
  );

  return (
    <>
      <div className={styles.quote}>
        <hr className={styles.hr} />
        <br />
        <blockquote>&quot;{data[key].citation}&quot;</blockquote>
        <div className={styles.author}>{data[key].author}</div>
      </div>
    </>
  );
}
