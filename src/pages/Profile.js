import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePassword } from '../services';
import Button from '@mui/material/Button'
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
    <div className='login'>
      <h1>My Profile</h1>
      <input placeholder="new password" ref={ref} />
      <Button variant="contained" onClick={cp}>update password</Button>
    </div>
  );
}
export default Profile;
