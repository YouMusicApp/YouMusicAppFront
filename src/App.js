import { Header } from "./Components/Header/Header";
import AppRouter from "./routes/AppRouter";
import { Helper } from "./Components/Helper/Helper";
import Player from "./Components/Player/Player";
import { useSelector } from "react-redux";

function App() {

  const { isLogged } = useSelector(state => state.userSlice)

  return (
    <>

      <Helper />
      <Header />
      <AppRouter />
      {isLogged ? <Player /> : null}

    </>
  );
}

export default App;
