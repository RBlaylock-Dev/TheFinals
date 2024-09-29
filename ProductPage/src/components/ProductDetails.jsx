import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../utils/apis";
// import '../styles.css'

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getProductDetail(id).then((data) => {
      console.log(data);
      setProductDetails(data);
    });
  }, []);

  return (
    <div>
      <h1>{productDetails.title}</h1>
      <img src={productDetails.image} alt="" width={150} />
      <h4>{productDetails.description}</h4>
    </div>
  );
};

export default ProductDetails;
