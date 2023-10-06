import Banner from "@/components/banner/Banner";
import HeadingText from "@/components/heading/HeadingText";
import React from "react";
import { client } from "../sanity/lib/client";
import Categories from "@/components/categories/Categories";

import Product from "@/components/products/Product";

import { useStateContext } from "@/context/StateContext";
import ShoppingCart from "@/components/shoppingCart/ShoppingCart";

const Home = ({ banner, products }) => {
  const { showCart,category } = useStateContext();
  return (
    <>
      {/* <HeadingText /> */}
      <Banner banner={banner[0]} />
      <Categories />
      <div className="min-h-[700px] flex items-center flex-col md:flex-row justify-around flex-wrap gap-6">
        {products.map((product, index) => {
          const slug_slice = product.slug.current.split('-')[0]
          console.log(slug_slice)
          return slug_slice === category.toLowerCase() && <Product key={index} product={product} />;
        })}
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
