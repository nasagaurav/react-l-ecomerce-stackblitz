import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../services";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function ProductCard(props) {
  const [value, setValue] = React.useState(2);

  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const { loggedin, token } = state;

  // props._id,
  // props._title,
  // props.description,
  // props.old,
  // props.new,
  // props.rating,
  // props.discount,
  // props.tags,
  // props.image,

  const atc = () => {
    addToCart(props._id, token).then((d) => {
      // console.log('after add to cart', d);
      dispatch({ type: "add-to-cart", payload: d });
    });
  };

  return (
    <Grid item xs={2}>
      <Card sx={{ maxWidth: 150 }}>
        <div>
          <img width="150" height="150" src={props.image} />
        </div>
        <CardContent>
          <Typography>{props.title}</Typography>
          <Typography>{props.new}</Typography>
          <Typography>
            <Rating
              name="simple-controlled"
              value={props.rating}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Typography>
          <Typography>{props.discount}</Typography>
          <Typography>{props.tags}</Typography>
          {loggedin && (
            <Button variant="contained" onClick={atc}>
              <ShoppingCartIcon />
            </Button>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProductCard;
