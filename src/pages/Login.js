import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Login(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const r1 = useRef();
  const r2 = useRef();

  const hs = () => {
    const email = r1.current.value;
    const password = r2.current.value;

    console.log(email, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="email" ref={r1} />
      <input placeholder="password" ref={r2} />
      <button onClick={hs}>login</button>
    </div>
  );
}
export default Login;
