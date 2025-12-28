import React from "react";
import { Link } from "react-router-dom";

export default function NewsDetailsCard({ news }) {
  if (!news) return null; // ✅ safety check

  return (
    <div className="space-y-4 text-start">

      <img
        src={news.image_url}
        alt={news.title}
        className="w-full h-[350px] object-cover rounded-lg"
      />

      <h2 className="text-2xl font-bold">
        {news.title}
      </h2>

      <p className="text-gray-700">
        {news.details}
      </p>

      <Link
        to={`/category/${news.category_id}`}
        className="text-white font-medium btn btn-secondary"
      >
        All news in this category
      </Link>

    </div>
  );
}

