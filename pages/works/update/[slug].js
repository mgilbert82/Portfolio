import React, { useState } from "react";
import styles from "../works.module.css";
import axios from "axios";
import { useRouter } from "next/router";

export default function Update() {
  const [work, setwork] = useState({
    title: "",
    subtitle: "",
    content: "",
    year: "",
    tags: "",
    category: "",
    weblink: "",
    image: "",
  });

  //method to handle data on variable
  const handleChange = (e) => {
    setwork((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const router = useRouter();
  const workId = router.query.slug;

  //method to handle and set data on database
  const handleClick = async (e, res) => {
    e.preventDefault();
    const workData = {
      title: work.title,
      subtitle: work.subtitle,
      content: work.content,
      year: work.year,
      tags: "[" + work.tags + "]",
      category: work.category,
      weblink: work.weblink,
      image: "[" + work.image + "]",
    };
    try {
      await axios
        .put("http://localhost:8800/works/" + workId, workData)
        .then(() => {
          router.push("/works/getWorks");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto pt-8 mt-4 w-3/4 pb-4">
      <h1 className="title text-2xl text-center text-blue">Update the work</h1>

      {/* Form */}
      <form
        className="border-2 border-pink p-4 rounded pt-4"
        //   onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-2 pb-2 mb-2">
          {/* Title */}
          <div className="container">
            <label htmlFor="title" className="text-blue me-2">
              Title
            </label>
            <input
              name="title"
              type="text"
              id="title"
              className="bg-green rounded p-1 w-full pe-2"
              defaultValue={work.title}
              onChange={handleChange}
            />
          </div>
          {/* Date */}
          <div className="container">
            <label htmlFor="year" className="text-blue me-2">
              Date
            </label>
            <input
              name="year"
              id="year"
              className="bg-green rounded p-1 w-full"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Subtitle */}
        <div className="mb-2">
          <label htmlFor="subtitle" className="text-blue me-2">
            Subtitle
          </label>
          <textarea
            name="subtitle"
            id="subtitle"
            rows={2}
            className="bg-green rounded p-1 w-full"
          />
        </div>

        {/* Category */}
        <div className="mb-2">
          <label htmlFor="category" className="text-blue me-2">
            Category
          </label>
          <input
            name="category"
            id="category"
            className="bg-green rounded p-1 w-full"
            onChange={handleChange}
          />
        </div>
        {/* Tags */}
        <div className="mb-2">
          <label htmlFor="tags" className="text-blue me-2">
            Tags
          </label>
          <input
            name="tags"
            id="tags"
            className="bg-green rounded p-1 w-full"
            onChange={handleChange}
          />
        </div>
        {/* Weblink */}
        <div className="mb-2">
          <label htmlFor="weblink" className="text-blue me-2">
            Weblink
          </label>
          <input
            name="weblink"
            id="weblink"
            className="bg-green rounded p-1 w-full"
            onChange={handleChange}
          />
        </div>
        {/* Image */}
        <div className="mb-2">
          <label htmlFor="image" className="text-blue me-2">
            Image Path
          </label>
          <input
            name="image"
            id="image"
            className="bg-green rounded p-1 w-full"
            onChange={handleChange}
          />
        </div>
        {/* Content */}
        <div className="mb-2">
          <label htmlFor="content" className={styles.label}>
            Content
          </label>
          <textarea
            name="content"
            id="content"
            rows={5}
            className="bg-green rounded p-1 w-full"
            onChange={handleChange}
          />
        </div>
        <div className="text-center w-full">
          <button
            className="bg-pink rounded-2xl p-2 text-white w-3/4 border-2 border-white"
            onClick={handleClick}
          >
            Update the work
          </button>
        </div>
      </form>
    </div>
  );
}
