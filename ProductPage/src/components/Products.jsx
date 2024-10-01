import { useState, useEffect } from "react";
import { getProducts } from "../utils/apis";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "../styles.css";

function GetProductsList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <div>
        <h1>Product List</h1>
      </div>
      <div className="card-container">
        {products.map((item) => {
          return (
            <Card
              key={item.id}
              className="cards"
              // onClick={() => {
              //   navigate("details/" + item.id);
              // }}
            >
                <CardMedia
                  className="product-img"
                  component="img"
                  image={item.image}
                  alt="product-image"
                />
                <CardContent>
                  <Typography className="prod-title"><b><a href="" onClick={() => {
                navigate("details/" + item.id);
              }}>{item.title}</a></b></Typography>
                  <Typography className="prod-desc">
                    Product Description: {item.description}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography>Price: ${item.price}</Typography><Typography className="prod-rating">
                    Product Rating: {item.rating.rate}
                  </Typography>
                </CardContent>
                <CardContent>
                  
                  <button onClick={() => {
                    navigate("/login")
                  }}>Add to Cart</button>
                </CardContent>
              </Card>
          );
        })}
      </div>
    </>
  );
}

export default GetProductsList;
