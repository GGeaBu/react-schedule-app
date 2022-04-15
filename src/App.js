import style from './App.module.css';
import Navbar from "./Navbar.js";
import Main from "./Main.js";

function App() {
  return (
    <div className={style.container}>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
