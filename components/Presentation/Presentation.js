import React from "react";
import Image from "next/image";
import styles from "./Presentation.module.css";
// import img1 from "../../public/assets/images/website/img1.jpg";
import minigilmi from "../../public/assets/images/website/mini-gilmi.png";
import shadow from "../../public/assets/images/website/ombre.png";

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
            <div className={styles.minigilmi}>
              <Image
                src={minigilmi}
                width="178.29"
                height="176.9"
                alt="minigilmi"
                placeholder="blur"
              />
            </div>

            <br />
            <div className={styles.shadow}>
              <Image
                src={shadow}
                width="217.12"
                height="45.35"
                alt="ombre"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
