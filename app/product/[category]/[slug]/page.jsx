import ProductDetails from "@/components/product_details/ProductDetails/ProductDetails";
import ProductHeader from "@/components/product_details/ProductHeader/ProductHeader";
import Switch from "@/components/product_details/Switch/Switch";

import { ProductGallery } from "@/components/product_details/productGallery/ProductGallery";

import { getDataWithParams } from "@/lib/getData/getData";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

import { IoIosArrowBack } from "react-icons/io";

const Page = async ({ params }) => {
  const product = await getDataWithParams(params);

  return (
    <div className="flex flex-col gap-4 mt-12 m-auto min-h-[500px] p-24 text-white">
      <Link href="/" className="absolute z-10 flex items-center gap-4">
        <IoIosArrowBack className="text-3xl cursor-pointer" />
      </Link>
      <div className="flex  flex-col lg:flex-row  gap-8 justify-center ">
        <ProductHeader product={product} />
        <ProductGallery image={product?.image} />

        <ProductDetails product={product} />
      </div>

      <Switch product={product} />
    </div>
  );
};

export const generateStaticParams = async () => {
  const query = `*[_type == "product" ]{
        category,
            slug {
                current
            },
        }`;
  const products = await client.fetch(query);

  const paths = products.map((product) => {
    return {
      params: {
        category: product.category,
        slug: product.slug.current,
      },
    };
  });

  return paths;
};

export default Page;
