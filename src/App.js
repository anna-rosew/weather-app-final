import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.annarosewain.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anna-Rose Wain{" "}
          </a>
          and{" "}
          <a
            href="https://github.com/anna-rosew/weather-app-final"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
