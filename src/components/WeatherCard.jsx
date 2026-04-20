import {motion} from "framer-motion";
import"./WeatherCard.css"
import { useState } from "react";
import { getForecast } from "../services/weatherApi";

function WeatherCard({weather}) {

  const [expanded, setExpanded] = useState(false)
    const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    const getLocalTime = () =>{
      const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
      const localTime = new Date(utc + weather.timezone * 1000);

      return localTime.toLocaleTimeString();
    };

    const [forecast, setForecast] = useState(null);


  return (

    <motion.div 
    className="card"
    onClick={async () => {
      setExpanded(!expanded)

          if (!forecast){
            const data = await getForecast(weather.coord.lat, weather.coord.lon)
            setForecast(data)
          }
        }
      }
    initial={{opacity:0, y:20}}
    animate={{opacity:1, y:0}}
    whileHover={{scale:1.05}}


    >

    <div className="card-header">

        <h2>{weather.name}</h2>
        <h2>{weather.sys.country}</h2>

      </div>

     <div>
    <img src={icon} alt="icon"/>
    <p>Temp</p>
    <h1>{Math.round(weather.main.temp)}°C</h1>

    <p>Clima: {weather.weather[0].description}</p>

 

    </div>

    {expanded &&(
      <motion.div
      className="extra"
      initial={{opacity:0}}
      animate={{opacity:1}}
      >


        <p>Sensación: {Math.round(weather.main.feels_like)}°C</p>
        <p>Humedad: {weather.main.humidity}%</p>
        <p>Viento: {weather.wind.speed} km/h</p>
        
        <p className="time">{getLocalTime()}</p>

        <p>Amanecer: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Atardecer: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
        <p>Presión: {weather.main.pressure} hPa</p>
        <p>Visibildad: {weather.visibility / 1000} km</p>

        {forecast && (
          <div className="forecast">
            {forecast.list.slice(0, 5).map((item,i)=>(
              <div key={i} className="forecast-item">
                <p>{new Date(item.dt * 1000).getHours()}:00</p>
                <p>{Math.round(item.main.temp)}°C</p>
                </div>
            ))}
          </div>
        )}

        </motion.div>
    )}

    </motion.div>

  );
}

export default WeatherCard;