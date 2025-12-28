import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NewsDetailsCard from "../components/NewsDetailsCard";
import RigthAside from "../components/homelayout/RigthAside";
import { useLoaderData, useParams } from "react-router-dom";

export default function NewsDetails() {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    if (data && id) {
      const newsDetails = data.find(
        (singleNews) => singleNews.id === id
      );
      setNews(newsDetails);
    }
  }, [data, id]);

  return (
    <div>
      <header className="py-3">
        <Header />
      </header>

      <main className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 py-10 px-3 md:px-5">

        <section className="md:col-span-8 lg:col-span-9">
          <h2 className="font-bold mb-5 text-lg md:text-xl lg:text-2xl text-start">
            News Details Page
          </h2>

          {news ? (
            <NewsDetailsCard news={news} />
          ) : (
            <p className="text-gray-500">Loading news details...</p>
          )}
        </section>

        <aside className="md:col-span-4 lg:col-span-3 mt-5 md:mt-0">
          <RigthAside />
        </aside>

      </main>
    </div>
  );
}
