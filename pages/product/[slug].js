import React from "react";
import { client, urlFor } from "@/sanity/lib/client";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import Quantity from "@/components/reusable/Quantity";
const ProductDetails = ({ product, products }) => {
  const { incQty, decQty, qty, addItemToCart } = useStateContext();
  const { image, name, details, price, stars, reviews } = product;
  return (
    <div className=" w-full min-h-[500px] flex flex-col lg:flex-row gap-8">
      <div className="flex flex-row lg:w-1/2 gap-2">
        <div className="order-2 flex ">
          <img
            src={urlFor(image && image[0])}
            alt=""
            className="rounded-[20px] bg-grey"
          />
        </div>
        <div className="w-28 lg:w-32 flex flex-col justify-between order-1">
          {image?.map((img) => (
            <img
              src={urlFor(img && img)}
              alt=""
              className="bg-grey p-2 rounded-[20px]"
            />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-evenly">
        <h3 className="text-4xl font-medium lg:text-5xl">{name}</h3>
        <div className="flex items-center gap-4">
          <AiFillStar className="text-4xl md:text-5xl text-blue" />
          <span className="text-xl md:text-2xl">{stars}</span>
          <span>({reviews} reviews)</span>
        </div>
        <div>
          <h5 className="font-bold">Details</h5>
          <p className="text-sm md:w-3/4 pr-2">{details}</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <h5 className="font-bold">Quantity:</h5>
          <Quantity />
        </div>
        <h4 className="font-bold drop-shadow-glow">${price}</h4>
        <button className="p-4 w-40 bg-blue rounded-[30px]" onClick={() => addItemToCart(product, qty)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
        slug {
            current
        }
    }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);

  const products = await client.fetch(productsQuery);

  return {
    props: {
      product,
      products,
    },
  };
};

export default ProductDetails;
