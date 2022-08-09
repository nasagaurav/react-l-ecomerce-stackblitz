import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Logout(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hl = () => {
    localStorage.clear();
    dispatch({ type: 'logout' });
    navigate('/login');
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={hl}>click here to logout </button>
    </div>
  );
}
export default Logout;
