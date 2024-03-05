import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-7xl">
        404 | Page Not Found
      </h1>
      <Link
        to="/"
        className=" py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-blac transition-all duration-500 hover:text-black font-bold"
      >
        Back To Homepage
      </Link>
    </div>
  );
}
