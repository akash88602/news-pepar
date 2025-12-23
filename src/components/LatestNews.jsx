import React from "react";
import Marquee from "react-fast-marquee";

export default function LatestNews() {
  return (
    <div className="flex items-center gap-4 bg-base-200 p-3">
      <p className="font-bold bg-secondary text-base-100 py-2 px-3 ">Latest</p>

      <Marquee
        className="flex gap-5"
        pauseOnHover={true}
        speed={100}
      >
        <p className="font-bold mx-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, laborum!
        </p>
        <p className="font-bold mx-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, laborum!
        </p>
        <p className="font-bold mx-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, laborum!
        </p>
      </Marquee>
    </div>
  );
}
