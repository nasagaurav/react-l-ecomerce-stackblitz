import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import Grid from '@mui/material/Grid'
function MyProducts(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const { products } = state;
  return (
    <Grid container spacing={2}>
      {products.map((x) => (
        <ProductCard key={x._id} {...x} />
      ))}
    </Grid>
  );
}
export default MyProducts;
