import Banner from "@/components/banner/Banner";
import CategoriesHomepage from "@/components/categoriesHomepage/CategoriesHomepage";
import SaleBanner from "@/components/saleBanner/SaleBanner";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const data = await getData();
 
  return (
    <main className="m-auto w-full max-w-[1600px]">
      <Banner banner={data.banner && data.banner[0]} />
      <CategoriesHomepage products={data.products && data.products} />
      <SaleBanner sale={data.sale && data.sale} />
    </main>
  );
}

const getData = async () => {
  try {
    const bannerQuery = '*[_type == "banner"]';
    const banner = await client.fetch(bannerQuery);

    const productQuery = '*[_type == "product"]';
    const products = await client.fetch(productQuery);

    const saleQuery = '*[_type == "sale"]';
    const sale = await client.fetch(saleQuery);

    return { products, banner, sale };

  } catch (error) {
    console.error("failed to fetch", error);
  }
};
