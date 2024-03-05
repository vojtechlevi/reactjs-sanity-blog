import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import client from "../client";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
      title,
      body,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setSinglePost(data[0]));
    setIsLoading(false);
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <h1 className=" uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-7xl flex items-center justify-center h-screen ">
          Loading...
        </h1>
      ) : (
        <section className="px-5 xl:max-w-6xl xl:mx-auto pb-20">
          <h1 className="uppercase font-bold text-4xl tracking-wide mb-10 md:text-6xl lg:text-7xl text-center mt-5">
            {singlePost.title}
          </h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.mainImage.alt}
              className="blog__image rounded-t"
            />
          )}
          <p>By {singlePost.author}</p>

          <div className="block__content pb-5">
            <BlockContent
              blocks={singlePost.body}
              projectId="7ohjaqen"
              dataset="production"
            />
          </div>

          <button>
            <Link
              to="/blog"
              className=" py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-blac transition-all duration-500 hover:text-black font-bold"
            >
              Read more articles
            </Link>
          </button>
        </section>
      )}
    </>
  );
}
