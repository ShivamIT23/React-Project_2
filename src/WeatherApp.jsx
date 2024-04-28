import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "ShivamLand",
    feels_like: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    description: "haze",
  });

    async function updateInfo(newData) {
    let Info = await newData();
    setWeatherInfo((prevData) => {
      return {
        ...prevData,
        city: Info.city ,
        feels_like: Info.feelsLike,
        temp: Info.temp,
        tempMin: Info.tempMin,
        tempMax: Info.tempMax,
        humidity: Info.humidity,
        description: Info.description,
      };
    });
  }

  return (
    <div>
      <h1>Weather App By Shivam</h1>
      <SearchBox update={updateInfo} />
      <InfoBox WeatherInfo={weatherInfo} />
    </div>
  );
}
