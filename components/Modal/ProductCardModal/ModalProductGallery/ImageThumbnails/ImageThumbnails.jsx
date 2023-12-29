import React from 'react'
import { urlFor } from "@/sanity/lib/client";
const ImageThumbnails = ({ images }) => {
    if (!images) {
      return null;
    }
  
    return (
      <div className="flex justify-center items-center">
        {images.map((item, index) => (
          <div key={index}>
            <img
              alt=""
              src={item?.image && urlFor(item.image).width(100)}
            />
          </div>
        ))}
      </div>
    );
  };
export default ImageThumbnails