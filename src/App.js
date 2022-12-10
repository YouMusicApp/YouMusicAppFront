import { Header } from "./Components/Header/Header";
import AppRouter from "./routes/AppRouter";
import { Helper } from "./Components/Helper/Helper";
import Player from "./Components/Player/Player";
import { useSelector } from "react-redux";
import { Aside } from "./Components/Aside/Aside";
import './assets/css/styles.css'
import MediaQuery from 'react-responsive'

function App() {

  const { isLogged } = useSelector(state => state.userSlice)

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
