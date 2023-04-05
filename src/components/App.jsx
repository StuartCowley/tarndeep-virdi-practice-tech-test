import "../styles/App.css";
import Search from "./Search";
import nasaLogo from "../assets/nasa-worm-logo.jpg";

function App() {
  return (
    <div className="app">
      <img className="app--nasa-logo" src={nasaLogo} alt="NASA logo" />
      <Search />
    </div>
  );
}

export default App;
