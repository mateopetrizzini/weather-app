import {Clock} from "lucide-react";
function WeatherMain({ weather }) {
const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

const getLocalTime = () => {
    const utc= new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    const local = new Date(utc + weather.timezone * 1000);
    return local.toLocaleTimeString();
}

  return (
    <div className="main-info">

        <h2>{weather.name}, {weather.sys.country}</h2>

        <img src={icon} alt="weather icon"/>

        <h1>{Math.round(weather.main.temp)}°C</h1>

        <div className="time">
           <Clock size={16}/>
            <span>{getLocalTime()}</span>
        </div>

        <p className="weather-desc">{weather.weather[0].description}</p>

    </div>
  )
}

export default WeatherMain;