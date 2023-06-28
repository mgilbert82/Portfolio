import React from "react";
import styles from "../../styles/Home.module.css";
import Form from "../../components/Form/Form";

export default function Contact() {
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Send me a message !</h1>
      <Form />
    </div>
  );
}
