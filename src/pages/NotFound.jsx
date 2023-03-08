import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid min-h-screen px-4 bg-white place-content-center dark:bg-slate-900">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl dark:text-slate-600">
          404
        </h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can't find that page.</p>

        <Link
          to="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-sky-500 rounded hover:bg-sky-600 focus:outline-none focus:ring dark:text-slate-900"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
