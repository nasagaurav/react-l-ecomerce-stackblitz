import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Profile(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  return <div>Profile</div>;
}
export default Profile;
