import React from "react";
import { client, urlFor } from "@/sanity/lib/client";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import Quantity from "@/components/reusable/Quantity";
const ProductDetails = ({ product,products }) => {
  const { incQty, decQty, qty, addItemToCart } = useStateContext();
  const { image, name, details, price,stars, reviews } = product;
 console.log(products)
  return (
    <div className=" w-full min-h-[500px] flex flex-col lg:flex-row">
      <div className="flex w-full flex-col lg:flex-row lg:w-1/2">
        <div className="lg:order-2">
          <img src={urlFor(image && image[0])} alt="" />
        </div>
        <div className="w-20 md:w-24 lg:w-32 flex lg:flex-col gap-4 lg:order-1">
          {image?.map((img) => (
            <img src={urlFor(img && img)} alt="" className="" />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <h3>{name}</h3>
        <div className="flex items-center gap-4">
          <AiFillStar className="text-4xl md:text-5xl text-blue" />
          <span className="text-xl md:text-2xl">{stars}</span>
          <span>({reviews} reviews)</span>
        </div>
        <div>
          <h5>Description</h5>
          <p className="text-sm">{details}</p>
        </div>
        <Quantity/>
        <h3 className="font-bold">${price}</h3>
        <button onClick={() => addItemToCart(product, qty)}>
          ADD TO CART
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
