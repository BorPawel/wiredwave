import Banner from "@/components/banner/Banner";
import HeadingText from "@/components/heading/HeadingText";
import React from "react";
import { client } from "../sanity/lib/client";
import Categories from "@/components/categories/Categories";

import Product from "@/components/products/Product";

import { useStateContext } from "@/context/StateContext";
import ShoppingCart from "@/components/shoppingCart/ShoppingCart";

const Home = ({ banner, products }) => {
  const {showCart } = useStateContext();
  return (
    <>
      
      <HeadingText />
      <Banner banner={banner[0]} />
      <Categories />
      <div className="min-h-[700px] flex items-start flex-row justify-evenly">
       
        <div className="flex flex-col gap-20 "> {products.map((product, index) => index%2===0 && <Product key={index} product={product} />)}</div>
        <div className="flex flex-col gap-20  md:pt-36"> {products.map((product, index) => index%2!==0 && <Product key={index} product={product} />)}</div>
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
