import Banner from "@/components/banner/Banner";
import HeadingText from "@/components/heading/HeadingText";
import React from "react";
import { client } from "../sanity/lib/client";
import { useStateContext } from "@/context/StateContext";
import SaleBanner from "@/components/sale_banner/SaleBanner";
import HotSales from "@/components/hotSales/HotSales";
import CategoriesHomepage from "@/components/categoriesHomepage/CategoriesHomepage";

const Home = ({ banner, products, sale }) => {
  return (
    <>
      <Banner banner={banner && banner[0]} />

      <CategoriesHomepage products={products && products} />

      <SaleBanner sale={sale && sale} />

      <HotSales products={products && products} text="Check out our hot selling products" />
    </>
  );
};

export const getServerSideProps = async () => {
  try {
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

        sale,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    // Handle the error appropriately
    // Option 1: Return default empty data
    return {
      redirect: {
            destination: '/error',
            permanent: false,
          },
    };
  }
};
export default Home;
