import "./App.css";
import CakeContainer from "./components/CakeContainer.jsx";
import store from "./redux//cakes/store.js";
import { Provider } from "react-redux";
import HooksCakeContainer from "./components/HooksCakeContainer.jsx";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <p>Hook example</p>
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
