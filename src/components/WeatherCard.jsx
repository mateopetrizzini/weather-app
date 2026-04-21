import {motion} from "framer-motion";
import"./WeatherCard.css"
import { useState } from "react";
import { getForecast } from "../services/weatherApi";
import {WiHumidity, WiStrongWind, WiBarometer} from "react-icons/wi"
import { Clock } from "lucide-react";

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

     <div className="main-info">
    <img src={icon} alt="icon"/>
    <p>Temp</p>
    <h1>{Math.round(weather.main.temp)}°C</h1>
      <Clock size={16}/>
    <span className="time">{getLocalTime()}</span>

    </div>

         <p className="weather-desc">Clima: {weather.weather[0].description}</p>


    {expanded &&(
      <motion.div
      className="extra"
      initial={{opacity:0}}
      animate={{opacity:1}}
      >

        <div className="extra-grid">

          <div className="extra-item">
            <span>Sensación</span>
            <strong>{Math.round(weather.main.feels_like)}°C</strong>
          </div>

          <div className="extra-item">
            <WiHumidity size={20}/>
            <span>Humedad</span>
            <strong>{weather.main.humidity}%</strong>
          </div>

          <div className="extra-item">
            <WiStrongWind size={20}/>
            <span>Viento</span>
            <strong>{weather.wind.speed} km/h</strong>
          </div>

          <div className="extra-item">
            <WiBarometer size={20}/>
            <span>Presión</span>
            <strong>{weather.main.pressure} hPa</strong>
          </div>

          <div className="extra-item">
            <span>Visibilidad</span>
            <strong>{weather.visibility / 1000} km</strong>
          </div>

        </div>

        



        <div className="sun-section">        
        <p>Amanecer: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Atardecer: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>

        {forecast && (
          <div className="forecast-container">

            <h3 className="forecast-title">Pronóstico próximas horas</h3>

            <div className="forecast">
              {forecast.list.slice(0, 5).map((item, i) =>{
                const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`

                return (
                  <div key={i} className="forecast-item">
                    <p className="hour">
                      {new Date(item.dt * 1000).getHours()}:00
                    </p>

                    <img src={icon} alt="icon" />

                    <p className="temp">
                      {Math.round(item.main.temp)}°C
                    </p>
                  </div>
                )
              })}

            </div>

          
          </div>
        )}

        </motion.div>
    )}

    </motion.div>

  );
}

export default WeatherCard;