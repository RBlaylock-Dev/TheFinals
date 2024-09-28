import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../utils/apis";

const ProductDetails = () => {
  // const [state, setState] = useState()
  const [productDetails, setProductDetails] = useState({});
  // syntax for object destructuring: const { property, names } = useParams()
  const { id } = useParams();

  useEffect(() => {
    getProductDetail(id).then((data) => {
      console.log(data);
      setProductDetails(data);
    });
  }, []);

  return (
    <div>
      <h2>{productDetails.title}</h2>
      <img src={productDetails.image} alt="" width={150} />
      <p>{productDetails.description}</p>
    </div>
  );
};

export default ProductDetails;