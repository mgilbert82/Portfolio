import { React, useRef } from "react";
import styles from "./works.module.css";

export default function AddWork() {
  const title = useRef();
  const subtitle = useRef();
  const year = useRef();
  const category = useRef();
  const tags = useRef();
  const weblink = useRef();
  const image = useRef();
  const body = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWork = {
      title: title.current.value,
      subtitle: subtitle.current.value,
      year: year.current.value,
      category: category.current.value,
      tags: tags.current.value,
      weblink: weblink.current.value,
      image: image.current.value,
      body: body.current.value,
    };

    fetch("/api/worksJsonData", {
      method: "POST",
      body: JSON.stringify(newWork),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    // title.current.value = "";
    // subtitle.current.value = "";
    // year.current.value = "";
    // category.current.value = "";
    // tags.current.value = "";
    // weblink.current.value = "";
    // image.current.value = "";
    // body.current.value = "";
  };

  return (
    <div className={styles.formContainer}>
      <h3>Add a new work</h3>
      {/* Form */}
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Title */}
        <div className={styles.labelControl}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            ref={title}
            type="text"
            id="title"
            className={styles.input}
            defaultValue="gravida aenean non nascetur taciti venenatis lectus lobortis"
          />
        </div>
        {/* Subtitle */}
        <div className={styles.labelControl}>
          <label htmlFor="subtitle" className={styles.label}>
            Subtitle
          </label>
          <textarea
            ref={subtitle}
            id="subtitle"
            rows={2}
            className={styles.input}
            defaultValue="gravida aenean non nascetur taciti venenatis lectus lobortis"
          />
        </div>
        {/* Date */}
        <div className={styles.labelControl}>
          <label htmlFor="year" className={styles.label}>
            Date
          </label>
          <input
            ref={year}
            id="year"
            className={styles.input}
            defaultValue="gravida aenean non nascetur taciti venenatis lectus lobortis"
          />
        </div>
        {/* Category */}
        <div className={styles.labelControl}>
          <label htmlFor="category" className={styles.label}>
            Category
          </label>
          <input
            ref={category}
            id="category"
            className={styles.input}
            defaultValue="gravida aenean non nascetur taciti venenatis lectus lobortis"
          />
        </div>
        {/* Tags */}
        <div className={styles.labelControl}>
          <label htmlFor="tags" className={styles.label}>
            Tags
          </label>
          <input
            ref={tags}
            id="tags"
            className={styles.input}
            defaultValue="gravida aenean non nascetur taciti venenatis lectus lobortis"
          />
        </div>
        {/* Weblink */}
        <div className={styles.labelControl}>
          <label htmlFor="weblink" className={styles.label}>
            Weblink
          </label>
          <input
            ref={weblink}
            id="weblink"
            className={styles.input}
            defaultValue="gravida aenean non nascetur taciti venenatis lectus lobortis"
          />
        </div>
        {/* Image */}
        <div className={styles.labelControl}>
          <label htmlFor="image" className={styles.label}>
            Image Path
          </label>
          <input
            ref={image}
            id="image"
            className={styles.input}
            defaultValue="gravida aenean non nascetur taciti venenatis lectus lobortis"
          />
        </div>
        {/* Content */}
        <div className={styles.labelControl}>
          <label htmlFor="content" className={styles.label}>
            Content
          </label>
          <textarea
            ref={body}
            id="content"
            rows={5}
            className={styles.input}
            defaultValue="gravida aenean non nascetur taciti venenatis lectus lobortis"
          />
        </div>

        <button className={styles.button}>Save the work</button>
      </form>
    </div>
  );
}
