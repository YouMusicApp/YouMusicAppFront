

import { useAuth0 } from '@auth0/auth0-react';
import LoginAuth0Button from './LoginAuthButton';
import LogoutAuthButton from './LogoutAuthButton';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutAuthButton /> : <LoginAuth0Button />;
};

export default AuthenticationButton;