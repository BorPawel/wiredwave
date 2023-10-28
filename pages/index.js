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

  return (
    <>
      {/* <HeadingText /> */}
      <Banner banner={banner[0]} />
      {/* <div className="w-full overflow-hidden">
        <Categories products={products} />
      </div> */}

      {/* <div className="min-h-[700px] flex items-center  md:justify-around lg:justify-between lg:flex-wrap flex-col md:flex-row gap-6 p-4">
        {products.map((product, index) => {
          // const slug_slice =
          // category.toLowerCase() === product.slug.current.split("-")[0];

          return (
            category === product.category && (
              <Product key={index} product={product} />
            )
          );
        })}
      </div> */}
      <div className="flex md:hidden flex-col gap-20">
        <ProductList products={products} category="Wireless" />
        <ProductList products={products} category="Gaming" />
        <ProductList products={products} category="Earphones" />
        <ProductList products={products} category="Speakers" />
        <ProductList products={products} category="Watches" />
      </div>

      <div className="hidden md:flex flex-col gap-20">
        <ProductSwiper products={products} category="Wireless"/>
      </div>
      {/* <LogosMarquee logos={logos} /> */}

      <SaleBanner sale={sale} />

      <HotSales products={products} />
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
