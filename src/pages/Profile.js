import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePassword } from '../services';
function Profile(props) {
  const ref = useRef();
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const { user, token } = state;

  const cp = () => {
    const pass = ref.current.value;
    changePassword(pass, token).then((d) => {
      console.log('after changePassword', d);
    });
  };

  return (
    <div>
      <h1>My Profile</h1>
      <input placeholder="new password" ref={ref} />
      <button onClick={cp}>update password</button>
    </div>
  );
}
export default Profile;
