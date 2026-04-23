import {motion} from "framer-motion";
import"./WeatherCard.css"
import { useState } from "react";
import { getForecast } from "../services/weatherApi";
import {WiHumidity, WiStrongWind, WiBarometer} from "react-icons/wi"
import MoonPhase from "./MoonPhase";
import { getAstronomy } from "../services/weatherApi";
import WeatherMain from "./WeatherMain";
import WeatherExtra from "./WeatherExtra";
import Astronomy from "./Astronomy";
import Forecast from "./Forecast";


function WeatherCard({weather}) {

  const [expanded, setExpanded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [astro, setAstro] = useState(null);

  const handleClick = async () => {
    setExpanded(prev => !prev);

    if(!forecast){
      const data = await getForecast(weather.coord.lat, weather.coord.lon);
      setForecast(data);
    }

    if(!astro){
      const data = await getAstronomy(`${weather.coord.lat},${weather.coord.lon}`);
      setAstro(data);
    }
  };

  return (
    <motion.div className="card" onClick={handleClick}>

      <WeatherMain weather={weather}/>

      {expanded && (
        <>
          <WeatherExtra weather={weather}/>
          <Astronomy astro={astro}/>
          <Forecast forecast={forecast}/>
        </>
      )}
    </motion.div>
  )

  
}

export default WeatherCard;