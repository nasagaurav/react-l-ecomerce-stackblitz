import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyTags from "../components/MyTags";
import MyProducts from "../components/MyProducts";
import Container from "@mui/material/Container";
import CircularProgress from '@mui/material/CircularProgress';

function Home(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <Container>
      <br />
      {state.tagsLoaded ? <MyTags /> : <CircularProgress />}
      <br />
      <br />
      {state.productsLoaded ? <MyProducts /> : <CircularProgress />}
    </Container>
  );
}
export default Home;
