import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import linkedin from "../../public/assets/logo/linkedinLogo.svg";
import instagram from "../../public/assets/logo/instagramLogo.svg";
import github from "../../public/assets/logo/githubLogo.svg";
import mail from "../../public/assets/logo/mailLogo.svg";

import Link from "next/link";

export default function footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.textFooter}>
        Powered by Michel Gilbert - All rights reserved
      </div>
      <hr />
      <div className={styles.socialMediaContainer}>
        {/* Instagram */}
        <Link href="https://www.instagram.com/chelmitreblig/" target="_blank">
          <Image
            src={instagram}
            className={`${styles.socialButton} ${styles.instagramColor}`}
            width="800"
            height="800"
            alt="Instagram"
          ></Image>
        </Link>
        {/* Linkedin */}
        <Link
          href="https://www.linkedin.com/in/michelgilbertlkdin/"
          target="_blank"
        >
          <Image
            src={linkedin}
            className={`${styles.socialButton} ${styles.linkedinColor}`}
            width="800"
            height="800"
            alt="Linkedin"
          ></Image>
        </Link>
        {/* Github */}
        <Link href="https://github.com/mgilbert82" target="_blank">
          <Image
            src={github}
            className={`${styles.socialButton} ${styles.githubColor}`}
            width="800"
            height="800"
            alt="Github"
          ></Image>
        </Link>
        {/* Mail */}
        <Link href="mailto:michelgilbert@hotmail.fr">
          <Image
            src={mail}
            className={`${styles.socialButton} ${styles.mailColor}`}
            width="800"
            height="800"
            alt="mail"
          ></Image>
        </Link>
      </div>
    </div>
  );
}
