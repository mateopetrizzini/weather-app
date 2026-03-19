import {motion} from "framer-motion";

function WeatherCard({weather}) {

    const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    const getLocalTime = () =>{
      const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
      const localTime = new Date(utc + weather.timezone * 1000);

      return localTime.toLocaleTimeString();
    };

  return (

    <motion.div 
    className="card"
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

    <h1>{Math.round(weather.main.temp)}°C</h1>
    <p>Temp</p>

    <p>Clima: {weather.weather[0].description}</p>

    <p className="time">{getLocalTime()}</p>

    </div>

    </motion.div>

  );
}

export default WeatherCard;