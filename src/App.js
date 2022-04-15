import style from './App.module.css';
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";

function App() {
  return (
    <div className={style.container}>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
