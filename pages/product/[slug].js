import React, { useEffect, useState } from "react";
import { client, urlFor } from "@/sanity/lib/client";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import Quantity from "@/components/reusable/Quantity";
import ButtonOutline from "@/components/reusable/button/ButtonOutline";
import ButtonFull from "@/components/reusable/button/ButtonFull";
import { FaBluetooth } from "react-icons/fa";

import { BsBatteryFull, BsFillMicFill } from "react-icons/bs";
const ProductDetails = ({ product, products }) => {
  const { incQty, decQty, qty, addItemToCart } = useStateContext();
  const {
    image,
    name,
    details,
    price,
    stars,
    reviews,
    bluetooth,
    batteryLife,
    shortDesc,
    longDesc
  } = product;
  const [bigImage, setBigImage] = useState(image[0]);

  const toggleProduct = (image, index) => {
    setBigImage(image);

    const smallImg = document.querySelectorAll(".small_img");
    smallImg.forEach((img) => {
      img.classList.remove("small_img_active");
    });
    smallImg[index].classList.add("small_img_active");
  };
  useEffect(() => {
    document
      .querySelectorAll(".small_img")[0]
      .classList.add("small_img_active");
  }, []);
  const mainDescClass = "m-2 hover:text-blue cursor-pointer";
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-start">
        <div className="flex lg:flex-col lg:w-6/12 gap-2">
          <div className="w-28 lg:w-32 flex flex-col lg:flex-row lg:order-2 gap-4">
            {image?.map((img, index) => (
              <img
                src={urlFor(img && img)}
                alt=""
                key={index}
                className="small_img bg-grey rounded-[20px]"
                onMouseEnter={() => toggleProduct(img, index)}
              />
            ))}
          </div>
          <div className=" flex lg:order-1">
            <img
              src={urlFor(bigImage)}
              alt=""
              className="rounded-[20px] bg-grey w-[600px]"
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 flex flex-col items-start justify-evenly gap-6 lg:gap-8">
          <h3 className="text-4xl font-medium lg:text-5xl">{name}</h3>
          <div className="flex items-center gap-4">
            <AiFillStar className="text-4xl md:text-5xl text-blue" />
            <span className="text-xl md:text-2xl">{stars}</span>
            <span>({reviews} reviews)</span>
          </div>

          <p className="text-sm md:w-3/4 pr-2">{shortDesc}</p>

          <div className="flex gap-2">
            <div className="flex justify-center items-center text-xl border-2 p-2 text-blue rounded-xl bg-grey border-grey gap-2">
              <FaBluetooth />
              {bluetooth.toFixed(1)}
            </div>
            <div className="flex justify-center items-center text-xl border-2 p-2 text-blue rounded-xl bg-grey border-grey gap-2">
              <BsBatteryFull className="-rotate-90" />
              {batteryLife}h
            </div>
            <div className="flex justify-center items-center text-xl border-2 p-2 text-blue rounded-xl bg-grey border-grey gap-2">
              <BsFillMicFill />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <h5 className="font-bold">Quantity:</h5>
            <Quantity />
          </div>
          <h3 className="font-bold drop-shadow-glow">${price}</h3>
          <div className="flex justify-between lg:justify-start items-center w-full lg:items-start lg:gap-6 ">
            <ButtonFull
              buttonText="Add to Cart"
              onClick={() => addItemToCart(product, qty)}
              className="p-4 w-40 "
            />
            <ButtonOutline buttonText="Buy Now" />
          </div>
        </div>
      </div>

      <div className="w-full border-y-2 border-grey flex items-center justify-center gap-12">
        <p className={mainDescClass}>Description</p>
        <p className={mainDescClass}>Spec</p>
        <p className={mainDescClass}>Reviews</p>
      </div>
      <div className="min-h-[500px]">
        <p className="text-sm">{longDesc}</p>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
        slug {
            current
        }
    }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: {
      product,
      products,
    },
  };
};

export default ProductDetails;
