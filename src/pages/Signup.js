import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Signup(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  return <div>Signup</div>;
}
export default Signup;
