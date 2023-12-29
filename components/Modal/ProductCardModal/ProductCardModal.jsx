import { ProductGallery } from "@/components/product_details/productGallery/ProductGallery";
import React from "react";
import ModalProductGallery from "./ModalProductGallery/ModalProductGallery";
import Quantity from "@/components/reusable/Quantity";
import Button from "@/components/reusable/button/Button";

const ProductCardModal = ({ product }) => {
  console.log(product.colorImageArray);
  return (
    <div className="flex w-full">
      <ModalProductGallery image={product?.colorImageArray} />
      <div className="flex text-white w-1/2 justify-start gap-6 flex-col items-center px-4 ">
        <h4 className="mt-12">{product.name}</h4>
        <p className="text-sm text-center">{product.shortDesc}</p>
        <span className="w-full h-[1px] bg-grey "></span>
        <div className="flex  items-center  gap-4 flex-col">
          <p className="text-white">Colors:</p>
          <div className="flex gap-4">
            {product?.colorImageArray.map((item, index) => (
              <div
                key={index}
                className="rounded-full"
                style={{
                  backgroundColor: item.color.hex,
                  width: "50px",
                  height: "50px",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <p>Quantity: </p>
          <Quantity />
        </div>

        <div className="w-full h-[1px] bg-grey "></div>
        <div className="flex h-full justify-center items-center gap-4">
          <Button buttonText="Add to Card" />
          <Button buttonText="Go to product" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardModal;
