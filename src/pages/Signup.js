import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../services';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
function Signup(props) {
  const navigate = useNavigate();
  const r1 = useRef();
  const r2 = useRef();
  const r3 = useRef();
  const r4 = useRef();
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const hs = () => {
    const payload = {
      name: r1.current.value,
      email: r2.current.value,
      phone: r3.current.value,
      password: r4.current.value,
    };
    signup(payload).then((d) => {
      if (d.status) {
        // signup success
        navigate('/login');
      } else {
        // signup failed
      }
      // console.log("after signup",d)
    });
  };

  return (
    <div className='login'>
      <h1>Signup</h1>
      <input ref={r1} placeholder="name" />
      <input ref={r2} placeholder="email" />
      <input ref={r3} placeholder="phone" />
      <input ref={r4} placeholder="password" />
      <Button variant="contained" onClick={hs}>Signup</Button>
    </div>
  );
}
export default Signup;
