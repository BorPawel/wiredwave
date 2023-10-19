import React, { useState } from "react";
import { client, urlFor } from "@/sanity/lib/client";
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import Quantity from "@/components/reusable/Quantity";
import ButtonOutline from "@/components/reusable/button/ButtonOutline";
import ButtonFull from "@/components/reusable/button/ButtonFull";
import { FaBluetooth } from "react-icons/fa";

import { BsBatteryFull, BsFillMicFill } from "react-icons/bs";

import { Reviews } from "@/components/product_details/reviews/Reviews";
import { ProductGallery } from "@/components/product_details/productGallery/ProductGallery";
import { Specs } from "@/components/product_details/first_specs/Specs";
import { Navigation } from "@/components/product_details/navigation/Navigation";
import { Description } from "@/components/product_details/description/Description";
import { Colors } from "@/components/product_details/colors/Colors";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
const ProductDetails = ({ product, products }) => {
  const { incQty, decQty, qty, addItemToCart, setProductColor, color } =
    useStateContext();
  
    const [tabToggle, setTabToggle] = useState('Description');


  return (
    <div className="flex flex-col gap-4 mt-4 ">
      {/* <Link href="/" className="z-10 flex items-center gap-4">
        <IoIosArrowBack className="text-3xl text-blue cursor-pointer" />
        Back
      </Link> */}
      <div className="flex  flex-col md:flex-row  gap-8 justify-center ">
        <div className="flex flex-col justify-start w-full md:hidden pl-6">
          <h3 className="text-4xl font-medium lg:text-5xl">{product?.name}</h3>
          <div className="flex items-center gap-4">
            <AiFillStar className="text-4xl md:text-5xl text-blue" />
            <span className="text-xl md:text-2xl">{product?.stars}</span>
            <span>({product?.reviews} reviews)</span>
          </div>
        </div>

        <ProductGallery image={product?.image} />
        <div className="w-full lg:w-5/12 flex flex-col items-start gap-2 lg:mt-8 p-2">
          <h3 className="hidden md:block text-4xl font-medium lg:text-5xl">
            {product?.name}
          </h3>
          <Reviews stars={product?.stars} reviews={product?.reviews} />
          <p className="hidden md:block text-sm md:w-3/4 pr-2 my-6">
            {product?.shortDesc}
          </p>

          <span className="h-[2px] w-full md:w-3/4 mb-8 md:mt-3 bg-grey"></span>

          <div className="flex flex-col items-start mb-4 ">
            {product?.colors && (
              <Colors
                colors={product?.colors}
                setProductColor={setProductColor}
              />
            )}
            <div className="flex justify-center items-center gap-2">
              <p>Quantity:</p>
              <Quantity />
            </div>
          </div>

          <p className="block md:hidden text-sm md:w-3/4 pr-2 mb-8 ">
            {product?.shortDesc}
          </p>

          <div className="flex flex-col gap-8">
            <p className="font-bold  text-5xl">${product?.price}</p>
            <div className="flex justify-between lg:justify-start items-center w-full lg:items-start gap-6  ">
              <ButtonFull
                buttonText="Add to Cart"
                onClick={() => addItemToCart(product, qty, color)}
                className="p-4 w-40 "
              />
              <ButtonOutline buttonText="Buy Now" />
            </div>
          </div>

          <span className="h-[2px] w-full md:w-3/4 my-8 bg-grey"></span>

          <div className="w-full grid grid-cols-2 place-items-center md:place-items-start gap-4">
            <p>Free Shipping</p>
            <p>24h delivery</p>
            <p>All time security</p>
            <p>Support help</p>
          </div>
        </div>
      </div>

      <Navigation />


      {/* <Description product={product} /> */}

      <div className="w-full p-2"></div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product" ]{
    category,
        slug {
            current
        },
      

    }`;
  const products = await client.fetch(query);

  const paths = products.map((product) => {
    return {
      params: {
        category: product.category,
        slug: product.slug.current,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params: { slug, category } }) => {
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
