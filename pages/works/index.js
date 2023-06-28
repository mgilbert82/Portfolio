import { React } from "react";
import styles from "./works.module.css";
import { worksData } from "../../json/works.json";
import Link from "next/link";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Index({ works }) {
  return (
    <>
      {
        <div className={styles.container}>
          <h1 className={styles.h1}> All my works</h1>
          {works.map((work, key) => (
            // Article Block
            <div className={styles.article} key={key}>
              {/* Section block */}
              <div className={styles.section} key={key}>
                {/* Text Block */}
                <div className={styles.leftContainer}>
                  {/* Title block */}
                  <h3>{work.title}</h3>
                  {/* Subtitle block */}
                  <h4>{work.subtitle}</h4>
                  {/* Category Block */}
                  <div className={styles.category}>
                    Category: {work.category}
                  </div>
                  {/* Article Body */}
                  <div className={styles.articleBody}>{work.body}</div>
                  <hr className={styles.hr} />
                  {/* Web Link */}
                  {work.weblink ? (
                    <div className={styles.weblinkContainer}>
                      <Link href={work.weblink} className={styles.weblink}>
                        <FontAwesomeIcon icon={faLink} /> Go to the webapp
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {/* Image & Tag Block */}
                <div className={styles.rightContainer}>
                  {/* Tag Block */}
                  <div className={styles.tagsContainer}>
                    Tags:
                    {work.tags.map((tags, id) => (
                      <div className={styles.tags} key={id}>
                        {tags}
                      </div>
                    ))}
                  </div>

                  {/* Carousel Block */}
                  <div className={styles.imagesContainer}>
                    {work.images.map((image, id) => (
                      <Image
                        src={image}
                        key={id}
                        width={500}
                        height={400}
                        alt="images"
                        className={styles.images}
                      />
                    ))}
                  </div>
                  <div className={styles.date}>Created at {work.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      works: worksData,
    },
  };
};
