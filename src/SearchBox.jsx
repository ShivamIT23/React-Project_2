import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({update}) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "3ffd0cef084cca526bd8b7312318010a";

  let [city, setCity] = useState("");

  async function getWeatherInfo() {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let data = await response.json();
    let result = {
        city : city,
        temp : data.main.temp,
        tempMin : data.main.temp_min,
        tempMax : data.main.temp_max,
        humidity : data.main.humidity,
        feelsLike : data.main.feels_like,
        description : data.weather[0].description ,
    }
    return result;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCity("");
  }

  function cityChange(e) {
    setCity(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city-name"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={cityChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit" onClick={()=> update(getWeatherInfo) }>
          {" "}
          Search
        </Button>
      </form>
    </div>
  );
}