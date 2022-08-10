import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
function Logout(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hl = () => {
    localStorage.clear();
    dispatch({ type: 'logout' });
    navigate('/login');
  };

  return (
    <div className='login'>
      <h1>Logout</h1>
      <Button variant="contained" onClick={hl}>click here to logout </Button>
    </div>
  );
}
export default Logout;
