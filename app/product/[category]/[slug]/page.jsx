import BackButton from "@/components/product_details/BackButton/BackButton";
import ProductDetails from "@/components/product_details/ProductDetails/ProductDetails";
import ProductHeader from "@/components/product_details/ProductHeader/ProductHeader";
import Switch from "@/components/product_details/Switch/Switch";

import { ProductGallery } from "@/components/product_details/productGallery/ProductGallery";
import { SpecTable } from "@/components/product_details/spec_table/SpecTable";

import { getDataWithParams } from "@/lib/getData/getData";
import { client } from "@/sanity/lib/client";

const Page = async ({ params }) => {
  const product = await getDataWithParams(params);
  return (
    <div className="flex flex-col gap-32 mt-24 m-auto min-h-[500px]  text-white">
      <BackButton />

      <div className="flex  flex-col lg:flex-row  gap-8 justify-center mt-12 lg:mt-4 ">
        <ProductHeader product={product} />
        {product?.colorImageArray ? (
          <ProductGallery images={product?.colorImageArray} />
        ) : null}

        <ProductDetails product={product} />
      </div>

     {product.specs ? <div className="w-full max-w-[1500px] mx-auto text-xl text-white flex justify-center items-center">
      <table className={`w-full `}>
      <thead>
        <tr className={`flex gap-6 lg:text-3xl`}>
          <th className="flex-1 text-right">Specification</th>
          <th  className="flex-1 text-left">Feature</th>
        </tr>
      </thead>
      <tbody>
       { product.specs.specifications.map((spec, index) => {

        return (
          <tr key={index} className={`${index % 2 === 0 ? 'bg-grey' : 'bg-dark'} gap-6 flex  text-sm  p-2`}>
            <td  className="flex-1 text-right">{spec.specName}</td>
            <td  className="flex-1 text-left">{spec.specValue}</td>
          </tr>
        );
       })}

      </tbody>
    </table>
      </div> : null}
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
