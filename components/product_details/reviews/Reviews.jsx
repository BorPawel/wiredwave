import React from "react";
import { AiFillStar } from "react-icons/ai";
export function Reviews({
  stars,
  reviews
}) {
  return <div className="flex items-center gap-4">
            <AiFillStar className="text-4xl md:text-5xl text-blue" />
            <span className="text-xl md:text-2xl">{stars}</span>
            <span>({reviews} reviews)</span>
          </div>;
}
  