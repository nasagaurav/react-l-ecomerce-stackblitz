import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Header(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  return <div>Header</div>;
}
export default Header;
