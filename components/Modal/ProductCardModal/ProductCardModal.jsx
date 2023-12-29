import ModalProductGallery from "./ModalProductGallery/ModalProductGallery";

import ProductDetailsModal from "./ProductDetailsModal/ProductDetailsModal";

const ProductCardModal = ({ product }) => {
  return (
    <div className="flex w-full flex-col md:flex-row relative ">
      
      <ModalProductGallery image={product?.colorImageArray} />
      <ProductDetailsModal product={product} />
    </div>
  );
};

export default ProductCardModal;
