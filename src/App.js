import logo from "./logo.svg";
import "./App.css";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Menu from "./Menu";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Introduction />
      </header>
      <main>
        <Skills />
      </main>
    </div>
  );
}

export default App;
