import { Header } from "./Components/Header/Header";
import AppRouter from "./routes/AppRouter";
import { Helper } from "./Components/Helper/Helper";
import Player from "./Components/Player/Player";
import { useSelector } from "react-redux";
import { Aside } from "./Components/Aside/Aside";
import './assets/css/styles.css'

function App() {

  const { isLogged } = useSelector(state => state.userSlice)

  return (
    <>
      <Helper />

      <div className="wrapper">
        <Aside />
        <div id="content">
          <Header />
          <main>
            <AppRouter />
          </main>
          {isLogged ? <Player /> : null}
        </div>
      </div>


    </>

  );
}

export default App;
