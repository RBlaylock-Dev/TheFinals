import { useState, useEffect } from "react";
import { getProducts } from "../utils/apis";
import { useNavigate } from 'react-router-dom'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import '../App.css'

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
    <div>
      <h1>Product List</h1>
      {products.map((item) => {
        return (
          <Card key={item.id} className="cards" sx={{ maxWidth: 345 }} onClick={() => { navigate("details/" + item.id) }}>
            <CardActionArea>
              <CardMedia
                className="product-img"
                component="img"
                image={item.image}
                alt="product-image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.description}
                </Typography>
              </CardContent>

              <CardContent>
                <Typography>{item.rating.rate}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}

export default GetProductsList;
