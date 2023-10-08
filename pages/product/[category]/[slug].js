import React from "react";
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
import { ProductGallery } from "@/components/product_details/product_gallery/ProductGallery";
import { Specs } from "@/components/product_details/first_specs/Specs";
import { Navigation } from "@/components/product_details/navigation/Navigation";
import { Description } from "@/components/product_details/description/Description";
import { Colors } from "@/components/product_details/colors/Colors";
import Link from "next/link";
const ProductDetails = ({ product, products }) => {
  const { incQty, decQty, qty, addItemToCart } = useStateContext();

  return (
    <div className="flex flex-col gap-12 mt-4 ">
      <Link href="/" className="z-10 flex items-center gap-4">
        <AiOutlineArrowLeft className="text-3xl text-blue cursor-pointer" />
        Back to Homepage
      </Link>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-start">
        <ProductGallery image={product?.image} />
        <div className="w-full lg:w-6/12 flex flex-col items-start justify-evenly gap-6 lg:gap-8 p-2">
          <h3 className="text-4xl font-medium lg:text-5xl">{product?.name}</h3>
          <Reviews stars={product?.stars} reviews={product?.reviews} />
          <p className="text-sm md:w-3/4 pr-2">{product?.shortDesc}</p>

          <Specs
            batteryLife={product?.batteryLife}
            bluetooth={product?.bluetooth}
            micro={product?.micro}
          />
          {product?.colors && <Colors colors={product?.colors} />}
          <div className="flex justify-center items-center gap-2">
            <h5 className="font-bold">Quantity:</h5>
            <Quantity />
          </div>
          <h3 className="font-bold drop-shadow-glow">${product?.price}</h3>
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

      <Navigation />
      <Description product={product} />
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
