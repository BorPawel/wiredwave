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
import HotSales from "@/components/hotSales/HotSales";
import { Navigation } from "@/components/product_details/navigation/Navigation";
import ProductList from "@/components/products/productsList/ProductList";
import ProductSwiper from "@/components/productSwiper/ProductSwiper";

const Home = ({ banner, products, logos, sale }) => {
  const { showCart, category } = useStateContext();

  const categoryArr = [
    "Wireless",
    "Gaming",
    "Earphones",
    "Speakers",
    "Watches",
  ];
  return (
    <>
      {/* <HeadingText /> */}
      <Banner banner={banner[0]} />

      <div className="flex md:hidden flex-col gap-20">
        {categoryArr.map((item, index) => (
          <>
            <ProductList key={index} products={products} category={item} />
          </>
        ))}
      </div>

      <div className="hidden md:flex flex-col gap-36">
        {categoryArr.map((item, index) => (
          <>
            <ProductSwiper key={index} products={products} category={item} />
            {/* <span className="bg-blue w-full h-[1px] drop-shadow-outer"> </span> */}
          </>
        ))}
      </div>
      {/* <LogosMarquee logos={logos} /> */}

      <SaleBanner sale={sale} />

      <HotSales products={products} text="Check out our hot selling products"/>
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

  const saleQuery = '*[_type == "sale"]';
  const sale = await client.fetch(saleQuery);

  return {
    props: {
      banner,
      products,
      logos,
      sale,
    },
  };
};
export default Home;
