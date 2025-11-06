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
        alert('Logout Successful');
      } catch (e) {
        // ignore
      }
    }
    // navigate to login after logout
    navigate('/');
  }, []);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default LogoutComp;
