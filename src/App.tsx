import "./App.css";
import NavBar from "./components/NavBar.tsx";
import City from "./components/City.tsx";
import Temperature from "./components/Temperature.tsx";
import ClimateInfo from "./components/ClimateInfo.tsx";

function App() {
  return (
    <div>
      <NavBar />
      <City />
      <Temperature />
      <ClimateInfo />
    </div>
  );
}

export default App;
