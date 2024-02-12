import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a href="https://www.annarosewain.com/">Anna-Rose Wain</a>
          and{" "}
          <a href="https://github.com/anna-rosew/weather-app-final">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
