import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutComp = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    // remove login flag
    localStorage.removeItem('isLoggedIn');
    // call parent handler if provided
    if (typeof props.onLogout === 'function') {
      try {
        props.onLogout();
      } catch (e) {
        // ignore
      }
    }
    // navigate to home after logout
    navigate('/');
  }, [props, navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default LogoutComp;
