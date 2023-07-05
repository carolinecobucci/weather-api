import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
// components
import NavBar from "./components/NavBar.tsx";
import City from "./components/City.tsx";
import Temperature from "./components/Temperature.tsx";
import ClimateInfo from "./components/ClimateInfo.tsx";

interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

function App() {
  const lat = 44.34;
  const lon = 10.99;
  const apiID = "49152378eb34f3c5a0cad3bb944c413b";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiID}`;
  const [data, setData] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  //  OPTIONAL CHANING data?. significa que o objeto pode retornar null
  return (
    <div>
      <NavBar />
      <City />
      <Temperature temperature={data?.main.temp} description={data?.weather[0].description} />
      <ClimateInfo />
    </div>
  );
}

export default App;
