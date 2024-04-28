import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import hot2 from './images/hot2.png';
import rain from './images/rain.png';
import cold from './images/cold.png';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';
import './InfoBox.css';

export default function InfoBox({WeatherInfo}) {
  const InitImg =
    "https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const RainImg = rain;

  const ColdImg = cold;

  const HotImg = hot2;
    
  return (
    <div className="info-box">
      <h2>Weather Info - {WeatherInfo.description}</h2>
      <div className="cardContainer">
        <Card
          sx={{ maxWidth: 345 }}
          // style={{backgroundImage : `url(${InitImg})`, opacity : '0.6'}}
        >
          <CardMedia
            sx={{ height: 140 }}
            image = {WeatherInfo.humidity > 60 ? RainImg : WeatherInfo.temp > 15 ? HotImg : ColdImg}
            title="green iguana"
          />
          <CardContent>
          
            <Typography gutterBottom variant="h5" component="div">
              {WeatherInfo.city} &nbsp; {WeatherInfo.humidity > 60 ? <ThunderstormRoundedIcon /> : WeatherInfo.temp > 15 ? <WbSunnyRoundedIcon /> : <AcUnitIcon />}
            </Typography> 
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p> Temperature = {WeatherInfo.temp} &deg;C</p>
              <p> Humidity = {WeatherInfo.humidity}</p>
              <p>Min Temp = {WeatherInfo.tempMin} &deg;C</p>
              <p>Max Temp = {WeatherInfo.tempMax} &deg;C</p>
              <p>
                The Weather can be described as <b>{WeatherInfo.description}</b>{" "}
                and feels like = {WeatherInfo.feels_like} &deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
