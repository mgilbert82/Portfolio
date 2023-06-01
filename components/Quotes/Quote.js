import React from "react";
import styles from "./Quote.module.css";
import { quotesData } from "../../json/quotes";
import { useEffect, useState } from "react";

export default function Quote({ quotes }) {
  const [key, setKey] = useState(0);

  useEffect(
    () => setKey(Math.floor(Math.random() * Math.floor(quotelength))),
    []
  );
  let quotelength = quotesData.length;

  return (
    <>
      <div className={styles.quote}>
        <blockquote>&quot;{quotesData[key].citation}&quot;</blockquote>
        <div className={styles.author}>{quotesData[key].author}</div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      quotes: quotesData,
    },
  };
};
