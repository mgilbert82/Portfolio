import styles from "./Quote.module.css";
import { quotesData } from "../../json/quotes.json";
import { React, useEffect, useState } from "react";

export default function Quote() {
  const [key, setKey] = useState(0);

  useEffect(
    () => setKey(Math.floor(Math.random() * Math.floor(quotesData.length))),
    []
  );

  return (
    <>
      <div className={styles.quote}>
        <blockquote>&quot;{quotesData[key].citation}&quot;</blockquote>
        <div className={styles.author}>{quotesData[key].author}</div>
      </div>
    </>
  );
}
