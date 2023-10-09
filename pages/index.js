import Banner from "@/components/banner/Banner";
import HeadingText from "@/components/heading/HeadingText";
import React, { useEffect, useState, useRef } from "react";
import { client, urlFor } from "../sanity/lib/client";
import Categories from "@/components/categories/Categories";

import Product from "@/components/products/Product";

import { useStateContext } from "@/context/StateContext";
import ShoppingCart from "@/components/shoppingCart/ShoppingCart";
import { LogosMarquee } from "@/components/marquee/LogosMarquee";
import SaleBanner from "@/components/sale_banner/SaleBanner";


const Home = ({ banner, products, logos }) => {
  const { showCart, category } = useStateContext();

  return (
    <>
      {/* <HeadingText /> */}
      <Banner banner={banner[0]} />
      <Categories products={products} />
      <div className="min-h-[700px] flex items-center flex-col md:flex-row justify-around flex-wrap gap-6 ">
        {products.map((product, index) => {
          // const slug_slice =
          // category.toLowerCase() === product.slug.current.split("-")[0];

          return (
            category === product.category && (
              <Product key={index} product={product} />
            )
          );
        })}
        <LogosMarquee logos={logos} />
        <SaleBanner />
        <div className="w-full">
         
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const banner = await client.fetch(bannerQuery);

  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);
  const logosQuery = '*[_type == "logos"]';
  const logos = await client.fetch(logosQuery);

  return {
    props: {
      banner,
      products,
      logos,
    },
  };
};
export default Home;
