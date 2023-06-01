import React from "react";
import Image from "next/image";
import styles from "./Presentation.module.css";
import img1 from "../../public/assets/images/website/img1.jpg";

export default function Presentation() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.leftColumn}>
            <article>
              Adventurers for several years exploring the world of department
              stores, and conquering human management through support,
              communication and knowledge sharing. During this period, I
              developed several IT solutions to optimize and improve the quality
              of life at work. While I participated in the group&quot;s various
              IS projects, I was often a referent, trainer, key-user...
            </article>
            <br />
            <article>
              After 15 years in this structure, I decided to make a professional
              retraining in web application development.
            </article>
          </div>
          <div className={styles.rightColumn}>
            <Image
              src={img1}
              width="5184"
              height="3456"
              alt="img1"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
}
