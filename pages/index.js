import Banner from "@/components/banner/Banner";
import HeadingText from "@/components/heading/HeadingText";
import React from "react";
import { client,  } from "../sanity/lib/client";
import { useStateContext } from "@/context/StateContext";
import SaleBanner from "@/components/sale_banner/SaleBanner";
import HotSales from "@/components/hotSales/HotSales";
import CategoriesHomepage from "@/components/categoriesHomepage/CategoriesHomepage";

const Home = ({ banner, products, sale }) => {


  return (
    <>
      <Banner banner={banner[0]} />

      <CategoriesHomepage products={products} />

      <SaleBanner sale={sale} />

      <HotSales products={products} text="Check out our hot selling products" />
    </>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const banner = await client.fetch(bannerQuery);

  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

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
