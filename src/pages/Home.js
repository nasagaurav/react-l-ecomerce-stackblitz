import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyTags from '../components/MyTags';
import MyProducts from '../components/MyProducts';
import Container from '@mui/material/Container'
function Home(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <Container>
      <br/>
      <MyTags />
      <br/>
      <br/>
      <MyProducts />
    </Container>
  );
}
export default Home;
