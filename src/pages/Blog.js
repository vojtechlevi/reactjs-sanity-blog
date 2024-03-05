import React from "react";
import { useState, useEffect } from "react";
import client from "../client";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      publishedAt,
      "name": author->name,
      "authorImage": author->image
    }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section className=" px-5 2xl:max-w-7xl">
        <h1 className=" font-bold text-4xl mt-5 mb-10 tracking-widest text-center md:text-6xl lg:text-7xl">
          Blog Page
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug.current}>
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h3 className="text-xl mt-2">{post.title}</h3>
              <button>
                <Link
                  to={`/blog/${post.slug.current}`}
                  className=" py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-blac transition-all duration-500 hover:text-black font-bold"
                >
                  Read Full Article
                </Link>
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
