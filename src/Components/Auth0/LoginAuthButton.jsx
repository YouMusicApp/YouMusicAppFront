import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginAuth0Button = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-light btn-sm"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginAuth0Button;
