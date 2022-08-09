import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyTags from '../components/MyTags';
import MyProducts from '../components/MyProducts';
function Home(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <div>
      <MyTags />
      <MyProducts />
    </div>
  );
}
export default Home;
