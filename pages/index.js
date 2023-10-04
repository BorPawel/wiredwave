import Banner from "@/components/banner/Banner";
import HeadingText from "@/components/heading/HeadingText";
import React from "react";
import { client } from "../sanity/lib/client";
import Categories from "@/components/categories/Categories";

import Product from "@/components/products/Product";
const Home = ({ banner, products }) => {
  console.log(products);
  return (
    <>
      <HeadingText />
      <Banner banner={banner[0]} />
      <Categories />
      <div className="min-h-[500px] flex flex-wrap gap-6">
        {products.map((product, index) => <Product key={index} product={product} />)}
        
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const banner = await client.fetch(bannerQuery);

  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);
  return {
    props: {
      banner,
      products,
    },
  };
};
export default Home;
