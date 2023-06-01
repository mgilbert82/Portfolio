import React from "react";
import styles from "./Skills.module.css";
import Image from "next/image";
import angularLogo from "../../public/assets/logo/angularLogo.svg";
import nextjsLogo from "../../public/assets/logo/nextjsLogo.svg";
import tailwindLogo from "../../public/assets/logo/tailwindLogo.svg";
import symfonyLogo from "../../public/assets/logo/symfonyLogo.svg";
import strapiLogo from "../../public/assets/logo/strapiLogo.svg";
import wordpressLogo from "../../public/assets/logo/wordpressLogo.svg";

import Link from "next/link";

export default function Skills() {
  return (
    <>
      <div className={styles.container}>
        <h2>Skills</h2>
        {/* Frontend */}
        <section className={styles.column}>
          {/* frontEnd skills */}
          <div className={`${styles.leftColumn} ${styles.borderBlue}`}>
            <h3>Frontend</h3>
            {/* Hmtl skills */}
            <div className={styles.skill}>
              <span>Html</span>
              <div className={styles.skillOuterBar}>
                <div
                  className={`${styles.skillInnerBar} ${styles.htmlColor} ${styles.skill80}`}
                >
                  <p> 80%</p>
                </div>
              </div>
            </div>
            {/* CSS skills */}
            <div className={styles.skill}>
              <span>Css</span>
              <div className={styles.skillOuterBar}>
                <div
                  className={`${styles.skillInnerBar} ${styles.cssColor} ${styles.skill70}`}
                >
                  <p> 70%</p>
                </div>
              </div>
            </div>
            {/* Javascript skills */}
            <div className={styles.skill}>
              <span>Javascript</span>
              <div className={styles.skillOuterBar}>
                <div
                  className={`${styles.skillInnerBar} ${styles.jsColor} ${styles.skill60}`}
                >
                  <p> 60%</p>
                </div>
              </div>
            </div>
          </div>
          {/* Framework */}
          <div className={styles.rightColumn}>
            <h3>Framework</h3>
            <div className={styles.frameworkText}>
              I used many frameworks for the frontend development like
              <em className={styles.highlightTxt}> Bootstrap</em>,{" "}
              <em className={styles.highlightTxt}> Tailwind </em> and
              <em className={styles.highlightTxt}> Materialize </em> for
              customize the style of my web application. I already used the open
              source <em className={styles.highlightTxt}> Angular </em>framework
              in my last company to develop her showcase site, so i learn
              <em className={styles.highlightTxt}> Typescript </em>to code the
              entire website. My web site made in{" "}
              <em className={styles.highlightTxt}>NextJs </em>for her simplicity
              and because it enables server-side rendering.
            </div>
            <div className={styles.frameworkLogo}>
              {/* Angular Logo */}
              <div className={styles.logoContent}>
                <div className={styles.imgContent}>
                  <Image
                    src={angularLogo}
                    width="768"
                    height="768"
                    alt="logo Angular"
                  ></Image>
                </div>
                <Link
                  href="https://angular.io/"
                  className={styles.link}
                  target="_blank"
                >
                  Angular
                </Link>
              </div>
              {/* NextJS Logo */}
              <div className={`${styles.logoContent} ${styles.link}`}>
                <div className={styles.imgContent}>
                  <Image
                    className={styles.imgLogo}
                    src={nextjsLogo}
                    width="1280"
                    height="767"
                    alt="logo nextJs"
                  ></Image>
                </div>
                <Link
                  href="https://nextjs.org/"
                  className={styles.link}
                  target="_blank"
                >
                  NextJs
                </Link>
              </div>
              <div className={styles.logoContent}>
                <div className={styles.imgContent}>
                  <Image
                    className={styles.imgLogo}
                    src={tailwindLogo}
                    width="600"
                    height="600"
                    alt="logo Tailwind"
                  ></Image>
                </div>
                <Link
                  href="https://tailwindcss.com/"
                  className={styles.link}
                  target="_blank"
                >
                  Tailwind
                </Link>
              </div>
            </div>
          </div>
        </section>
        <br />
        {/* Backend */}
        <section className={styles.column}>
          {/* frontEnd skills */}
          <div className={`${styles.leftColumn} ${styles.borderBlue}`}>
            <h3>Backend</h3>
            {/* PHP skills */}
            <div className={styles.skill}>
              <span>PHP</span>
              <div className={styles.skillOuterBar}>
                <div
                  className={`${styles.skillInnerBar} ${styles.phpColor} ${styles.skill70}`}
                >
                  <p> 70%</p>
                </div>
              </div>
            </div>
            {/* SQL skills */}
            <div className={styles.skill}>
              <span>MYSQL</span>
              <div className={styles.skillOuterBar}>
                <div
                  className={`${styles.skillInnerBar} ${styles.mysqlColor} ${styles.skill80}`}
                >
                  <p> 80%</p>
                </div>
              </div>
            </div>
            {/* PostGreSql skills */}
            <div className={styles.skill}>
              <span>PostGreSql</span>
              <div className={styles.skillOuterBar}>
                <div
                  className={`${styles.skillInnerBar} ${styles.postgresColor} ${styles.skill50}`}
                >
                  <p> 50%</p>
                </div>
              </div>
            </div>
          </div>
          {/* Framework */}
          <div className={styles.rightColumn}>
            <h3>Framework</h3>
            <p className={styles.frameworkText}>
              For my school project, i used the
              <em className={styles.highlightTxt}> symfony </em>framework to
              build a restaurant application with
              <em className={styles.highlightTxt}> Twig </em>and{" "}
              <em className={styles.highlightTxt}> Doctrine</em>. The{" "}
              <em className={styles.highlightTxt}> Mysql </em>
              database was used for many{" "}
              <em className={styles.highlightTxt}> Wordpress </em>project and
              the last of one i discover is{" "}
              <em className={styles.highlightTxt}> PostgreSql </em>
              in my last company with the
              <em className={styles.highlightTxt}> Strapi </em>Headless CMS for
              the backend.
            </p>
            <div className={styles.frameworkLogo}>
              {/* Angular Logo */}
              <div className={styles.logoContent}>
                <div className={styles.imgContent}>
                  <Image
                    src={symfonyLogo}
                    width="2090"
                    height="2100"
                    alt="logo Symfony"
                  ></Image>
                </div>
                <Link
                  href="https://symfony.com/"
                  className={styles.link}
                  target="_blank"
                >
                  Symfony
                </Link>
              </div>
              {/* NextJS Logo */}
              <div className={`${styles.logoContent} ${styles.link}`}>
                <div className={styles.imgContent}>
                  <Image
                    className={styles.imgLogo}
                    src={strapiLogo}
                    width="2500"
                    height="2500"
                    alt="logo strapi"
                  ></Image>
                </div>
                <Link
                  href="https://strapi.io/"
                  className={styles.link}
                  target="_blank"
                >
                  Strapi
                </Link>
              </div>
              {/* React Logo */}
              <div className={styles.logoContent}>
                <div className={styles.imgContent}>
                  <Image
                    className={styles.imgLogo}
                    src={wordpressLogo}
                    width="2500"
                    height="2500"
                    alt="logo wordpress"
                  ></Image>
                </div>
                <Link
                  href="https://wordpress.com/fr/"
                  className={styles.link}
                  target="_blank"
                >
                  Wordpress
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
