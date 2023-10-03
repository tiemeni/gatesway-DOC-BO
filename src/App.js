import { Provider } from "react-redux";
import "./App.css";
import Routeur from "./RouterWrapper";
import store from "./REDUX/setup/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routeur />
      </Provider>
    </div>
  );
}

export default App;
