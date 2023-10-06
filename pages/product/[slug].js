import React, { useEffect, useState } from "react";
import { client, urlFor } from "@/sanity/lib/client";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import Quantity from "@/components/reusable/Quantity";
const ProductDetails = ({ product, products }) => {
  const { incQty, decQty, qty, addItemToCart } = useStateContext();
  const { image, name, details, price, stars, reviews } = product;
  const [bigImage, setBigImage] = useState(image[0]);

  const toggleProduct = (image, index) => {
    setBigImage(image);

    const smallImg = document.querySelectorAll(".small_img");
    smallImg.forEach((img) => {
      img.classList.remove("small_img_active");
    });
    smallImg[index].classList.add("small_img_active");
  };
  useEffect(() => {
    document.querySelectorAll(".small_img")[0].classList.add("small_img_active");
   


  }, []);

  return (
    <div className=" w-full flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-start">
      <div className="flex lg:flex-col lg:w-6/12 gap-2">
        <div className="w-28 lg:w-32 flex flex-col lg:flex-row lg:order-2 gap-4">
          {image?.map((img, index) => (
            <img
              src={urlFor(img && img)}
              alt=""
              className="small_img bg-grey rounded-[20px]"
              onMouseEnter={() => toggleProduct(img, index)}
            />
          ))}
        </div>
        <div className=" flex lg:order-1">
          <img
            src={urlFor(bigImage)}
            alt=""
            className="rounded-[20px] bg-grey w-[600px]"
          />
        </div>
      </div>
      <div className="w-full lg:w-6/12 flex flex-col items-start justify-evenly gap-6 lg:gap-8">
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
        <h3 className="font-bold drop-shadow-glow">${price}</h3>
        <button
          className="p-4 w-40 bg-blue rounded-[30px]"
          onClick={() => addItemToCart(product, qty)}
        >
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
