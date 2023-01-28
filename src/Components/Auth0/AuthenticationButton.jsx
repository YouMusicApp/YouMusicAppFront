
import { useAuth0 } from '@auth0/auth0-react';
import { AvatarUser } from '../AvatarUser/AvatarUser';
import LoginAuth0Button from './LoginAuthButton';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <AvatarUser /> : <LoginAuth0Button />;
};

export default AuthenticationButton;