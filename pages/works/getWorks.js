import { React, useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function GetWorks() {
  const [works, setworks] = useState([]);

  const router = useRouter();
  useEffect(() => {
    const fetchAllWorks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/works/");
        setworks(res.data);
        //console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllWorks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios
        .delete("http://localhost:8800/works/delete/" + id)
        .then(() => {
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addWork = () => {
    router.push("http://localhost:3000/works/add");
  };

  return (
    <>
      {
        <div className="mx-auto pt-8 mt-4 w-3/4 pb-4">
          <h1 className="title text-center text-blue"> All my works</h1>
          {/* Admin button */}
          <div className=" rounded-b-lg text-center">
            <button
              onClick={addWork}
              className="bg-blue rounded-xl m-2 p-1 border-2 border-white hover:bg-yellow"
            >
              Add a new work
            </button>
          </div>
          {works.map((work, key) => (
            // Article Block
            <div className="border-2 border-pink rounded-lg" key={key}>
              {/* Section block */}
              <div className="grid grid-cols-2 p-4" key={key}>
                {/* Text Block */}
                <div className="col-span me-3">
                  {/* Title block */}
                  <h3 className="text-yellow">{work.title}</h3>
                  {/* Subtitle block */}
                  <h4 className="text-blue text-sm pt-2">{work.subtitle}</h4>
                  {/* Category Block */}
                  <div className="text-sm mt-2 mb-4">
                    Category: {work.category}
                  </div>
                  {/* Article Body */}
                  <div className="me-2">{work.content}</div>
                  <hr className="text-blue mt-4 w-2/4 mx-auto" />
                  {/* Web Link */}
                  {work.weblink ? (
                    <div className="m-4 text-center pt-4">
                      <Link
                        href={work.weblink}
                        className="bg-blue rounded-xl p-2 text-sm border-2 border-white w-full shadow-lg shadow-blue"
                      >
                        <FontAwesomeIcon icon={faLink} /> Go to the webapp
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {/* Image & Tag Block */}
                <div className="col-span">
                  {/* Tag Block */}
                  {work.tags ? (
                    <div className="m-2 grid grid-col">
                      Tags:
                      {work.tags.map((tags, id) => (
                        <div
                          className="bg-green m-1 p-1 rounded-xl text-center"
                          key={id}
                        >
                          {tags}
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}

                  {/* Carousel Block */}

                  {work.image ? (
                    <div className="mt-4">
                      {work.image.map((image, id) => (
                        <Image
                          src={image}
                          key={id}
                          width={500}
                          height={400}
                          alt="images"
                          className="rounded-xl border-2 border-white bg-gray-dark"
                        />
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="text-sm text-center mt-4">
                    Created at {work.year}
                  </div>
                </div>
              </div>
              {/* Admin button */}
              <div className=" rounded-b-lg text-right bg-gray-light">
                <button className="bg-orange rounded-xl m-2 p-1 border-2 border-white hover:bg-pink">
                  <Link href={`/works/update/${work.id}`}>Update</Link>
                </button>
                <button
                  onClick={() => {
                    handleDelete(work.id);
                  }}
                  className="bg-red rounded-xl m-2 p-1 border-2 border-white hover:bg-yellow"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  );
}
