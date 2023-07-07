import "./App.css";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
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
  const apiID = "49152378eb34f3c5a0cad3bb944c413b";
  const [data, setData] = useState<WeatherResponse | null>(null);
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  useEffect(() => {
    const fetchData = async (lat: number, lon: number): Promise<void> => {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiID}`;
      // nova api nao deu certo, ela que tem a propriedade rain
      // const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiID}`;

      try {
        const response: AxiosResponse<WeatherResponse> = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchData(latitude, longitude);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    fetchLocation();
  }, []);

  console.log(data);
  //  OPTIONAL CHANING data?. significa que o objeto pode retornar null
  return (
    <div>
      <NavBar />
      <City cityName={data?.name} country={data?.sys.country} date={currentDate} />
      <Temperature
        weatherIcon={data?.weather[0].icon}
        temperature={data?.main.temp}
        description={data?.weather[0].description}
      />
      <ClimateInfo
        feelsLike={data?.main.feels_like}
        wind={data?.wind.speed}
        humidity={data?.main.humidity}
      />
    </div>
  );
}

export default App;
