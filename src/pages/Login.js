import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLogin } from '../services';
function Login(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const r1 = useRef();
  const r2 = useRef();

  const hs = () => {
    const email = r1.current.value;
    const password = r2.current.value;
    const payload = { email, password };
    console.log(email, password);

    getLogin(payload).then((d) => {
      if (d.status) {
        // loggedin
        dispatch({ type: 'login', payload: d });
        // it will send {token:"...",user:"nasa",status:true}
      } else {
        // failed
      }
    });
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
