import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Home(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  return <div>Home</div>;
}
export default Home;
