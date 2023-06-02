import React from "react";
import styles from "./Form.module.css";
import img1 from "../../public/assets/images/website/contactForm.svg";
import Image from "next/image";

export default function Form() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.leftContainer}>
        <Image
          src={img1}
          className={styles.contactImg}
          width="108.18"
          height="153.66"
          alt="Indian-mango"
        />
      </div>
      <div className={styles.rightContainer}>
        <h2>Contact me</h2>

        <form action="/api/form" method="post">
          <div className={styles.inputDiv}>
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
          <div className={styles.inputDiv}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />
          </div>
          <div className={styles.inputDiv}>
            <textarea
              id="comment"
              name="comment"
              maxLength="300"
              minLength="1"
              placeholder="Your comment"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
