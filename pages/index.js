import Banner from "@/components/banner/Banner";
import HeadingText from "@/components/heading/HeadingText";
import React from "react";
import { client, urlFor } from "../sanity/lib/client";
import Categories from "@/components/categories/Categories";

import Product from "@/components/products/Product";

import { useStateContext } from "@/context/StateContext";
import ShoppingCart from "@/components/shoppingCart/ShoppingCart";

const Home = ({ banner, products, logos }) => {
  const { showCart, category } = useStateContext();
  console.log(logos);
  return (
    <>
      {/* <HeadingText /> */}
      <Banner banner={banner[0]} />
      <Categories />
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
        <div className="w-full h-[200px] bg-grey my-36 flex overflow-hidden ">
          <div className="flex marquee">
            {logos.map((logo, index) => (
              <img key={index} src={urlFor(logo.images)} className="" />
            ))}
          </div>
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
