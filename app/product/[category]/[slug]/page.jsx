
import Switch from "@/components/product_details/Switch/Switch";
import { Colors } from "@/components/product_details/colors/Colors";
import { Navigation } from "@/components/product_details/navigation/Navigation";
import { ProductGallery } from "@/components/product_details/productGallery/ProductGallery";
import { Reviews } from "@/components/product_details/reviews/Reviews";
import Quantity from "@/components/reusable/Quantity";
import Button from "@/components/reusable/button/Button";
import FreeShipping from "@/components/svg/FreeShipping";
import { useStateContext } from "@/context/StateContext";
import { client, urlFor } from "@/sanity/lib/client";
import Link from 'next/link'
import { AiFillStar } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { LiaShippingFastSolid } from "react-icons/lia";
const Page = async ({ params }) => {
  const product = await getData(params);

 
  return (
    <div className="flex flex-col gap-4 mt-12 m-auto min-h-[500px] p-24 text-white">
      <Link href="/" className="absolute z-10 flex items-center gap-4">
        <IoIosArrowBack className="text-3xl cursor-pointer" />
      </Link>
      <div className="flex  flex-col lg:flex-row  gap-8 justify-center ">
        <div className="flex flex-col justify-start items-center w-full md:hidden pl-6">
          <h3 className="text-4xl font-medium lg:text-5xl">{product?.name}</h3>
          <div className="flex items-center gap-4">
            <AiFillStar className="text-4xl md:text-5xl text-blue" />
            <span className="text-xl md:text-2xl">{product?.stars}</span>
            <span>({product?.reviews} reviews)</span>
          </div>
        </div>

        <ProductGallery image={product?.image} />
        <div className="w-full lg:w-5/12 flex flex-col items-start gap-2 lg:mt-8 p-4 md:p-2">
          <h3 className="hidden md:block text-4xl font-medium lg:text-5xl">
            {product?.name}
          </h3>
          <Reviews stars={product?.stars} reviews={product?.reviews} />
          <p className="hidden md:block text-sm md:w-3/4 pr-2 my-6">
            {product?.shortDesc}
          </p>

          <span className="h-[2px] w-full lg:w-3/4 mb-8 lg:mt-3 bg-grey"></span>


          <p className="block md:hidden text-sm lg:w-3/4 pr-2 mb-8 ">
            {product?.shortDesc}
          </p>

          <div className="flex flex-col gap-8 w-full  ">
            <p className="font-bold w-1/2 text-5xl">${product?.price}</p>
            <div className="flex justify-around lg:justify-start items-center w-full lg:items-start gap-2  lg:gap-10 flex-wrap ">
              <Button
                buttonText="Add to Cart"
                // onClick={() => addItemToCart(product, qty, color)}
              />
              <Button buttonText="Buy Now" />
            </div>
          </div>

          <span className="h-[2px] w-full lg:w-3/4 my-8 bg-grey"></span>

          <div className="w-full grid grid-cols-2 place-items-center lg:place-items-start gap-4">
            <span className="flex-center gap-3">
              <FreeShipping />
              <p>Free Shipping</p>
            </span>
            <span className="flex-center gap-3">
              <LiaShippingFastSolid className="text-[35px]" />
              <p>24h delivery</p>
            </span>
            <span className="flex-center gap-3">
              {/* <MdOutlineSecurity className="text-[35px]" /> */}
              <p>All time security</p>
            </span>
            <span className="flex-center gap-3">
              <BiSupport className="text-[35px]" />
              <p>Support help</p>
            </span>
          </div>
        </div>
      </div>

 

      <Switch product={product}/>
      
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

const getData = async (params) => {
  const { slug, category } = params;
  try {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const product = await client.fetch(query);

    return product;
  } catch (error) {
    console.error("failed to fetch", error);
  }
};

export default Page;
