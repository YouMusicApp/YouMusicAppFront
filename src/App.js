import { Header } from "./Components/Header/Header";
import AppRouter from "./routes/AppRouter";
import { Helper } from "./Components/Helper/Helper";
import Player from "./Components/Player/Player";
import { useSelector } from "react-redux";
import { Aside } from "./Components/Aside/Aside";
import './assets/css/styles.css'
import MediaQuery from 'react-responsive'
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { isLogged } = useSelector(state => state.userSlice)

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello {user.name}{' '}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    );
  } else {
    // return <button onClick={loginWithRedirect}>Log in</button>;
  }



// movidita conflicto return-


return (
  <>
    <Helper />

    <div className="wrapper">
      <MediaQuery minWidth={600} >
        <Aside />
      </MediaQuery>
      <div id="content">
        <Header />
        <main className="main">
          <AppRouter />
        </main>
        {isLogged ? <Player /> : null}
      </div>
    </div>


  </>

);
}

export default App;
