import "./App.css";
import CakeContainer from "./components/CakeContainer.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import HooksCakeContainer from "./components/HooksCakeContainer.jsx";
import NewCakeContainer from "./components/NewCakeContainer.jsx";
import UserInformation from "./components/UserInformation.jsx";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <p>Hook example</p>
        <HooksCakeContainer />
        <NewCakeContainer />
      </div>
      <hr />
      <UserInformation />
    </Provider>
  );
}

export default App;
