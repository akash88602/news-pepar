
import React from "react";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const {
         id,
        title,
        image_url,
        details,
        rating,
        total_view,
        author,
        tags,
    } = news;

    const formattedDate = author?.published_date
        ? new Date(author.published_date).toLocaleDateString()
        : "";

    return (
        <div className="text-start card bg-base-100  flex flex-col justify-between ">


            <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h4 className="font-semibold text-sm">{author?.name}</h4>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-500">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>


            <h2 className="px-4 text-lg font-bold leading-snug">
                {title}
            </h2>


            <figure className="px-4 pt-4">
                <img
                    src={image_url}
                    alt="news"
                    className="rounded-lg w-full h-56 object-cover"
                />
            </figure>


            <div className="px-4 pt-4 text-sm text-gray-600">
                <p>
                    {details?.length > 220
                        ? details.slice(0, 220) + "..."
                        : details}
                    <Link to={`/news-details/${id}`} className="text-orange-500">
                        Read More
                    </Link>

                </p>


                <p className="mt-2 text-xs text-gray-400">
                    {tags?.join(", ")}
                </p>
            </div>
            <div className="flex justify-between items-center px-4 py-3 border-t mt-4">


                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={i < rating?.number ? "text-orange-500" : "text-gray-300"}
                        />
                    ))}
                    <span className="ml-1 text-gray-700">
                        {rating?.number}
                    </span>
                </div>


                <div className="flex items-center gap-1 text-gray-600">
                    <FaEye /> {total_view}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
