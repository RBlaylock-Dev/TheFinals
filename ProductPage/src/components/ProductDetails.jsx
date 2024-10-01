import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductDetail } from "../utils/apis";

// import Header from "./Header";
// import '../styles.css'

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

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
      <h2>Product Description: {productDetails.description}</h2>
      <h3>Price: ${productDetails.price}</h3>
      <button className="back-btn" onClick={goBack}>
        Back
      </button>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
