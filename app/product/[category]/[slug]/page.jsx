import BackButton from "@/components/product_details/BackButton/BackButton";
import ProductDetails from "@/components/product_details/ProductDetails/ProductDetails";
import ProductHeader from "@/components/product_details/ProductHeader/ProductHeader";
import Switch from "@/components/product_details/Switch/Switch";

import { ProductGallery } from "@/components/product_details/productGallery/ProductGallery";

import { getDataWithParams } from "@/lib/getData/getData";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

import useRouter from 'next/navigation'
const Page = async ({ params }) => {
  const product = await getDataWithParams(params);
  

  return (
    <div className="flex flex-col gap-4 mt-24 m-auto min-h-[500px]  text-white">
      <BackButton />
      <div className="flex  flex-col lg:flex-row  gap-8 justify-center ">
        <ProductHeader product={product} />
       {product.colorImageArray ?  <ProductGallery images={product?.colorImageArray} /> : null}

        <ProductDetails product={product} />
      </div>

      {/* <Switch product={product} /> */}
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
