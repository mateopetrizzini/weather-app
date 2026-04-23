import { useEffect, useState, useRef } from 'react';
import { getWeatherByCity } from './services/weatherApi';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import WeatherCard from './components/WeatherCard';
import { getWeatherByCoords } from './services/weatherApi';
import { getCitySuggestions } from './services/weatherApi';

function App() {

  const [cities, setCities] = useState([]);

  const [query,setQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const searchRef = useRef();


  useEffect(()=>{

    const handleClickOutside = (event) =>{
      if(searchRef.current && !searchRef.current.contains(event.target)){
        setSuggestions([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () =>{
      document.removeEventListener("click",handleClickOutside);
    };

  },[]);

  const handleAddCity = async ()=>{

    if(!query) return;

    const data = await getWeatherByCity(query);

    if(data.cod !==200){
      alert("Ciudad no encontrada");
      return;
    }

    setCities((prev) => [...prev, data]);

    setQuery("");
  };


  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat=position.coords.latitude;
        const lon=position.coords.longitude;

        const data = await getWeatherByCoords(lat,lon);

        setCities((prev) => [...prev,data]);
      },
      (error) =>{
        console.error(error);
        alert("No se pudo obtener la ubicacion");
      }
    );
  };

  return (
    <div className="app">

      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>


      <div className="header">
      <h1>Weather App</h1>

      <div className="search-container" ref={searchRef}>

      

      <input 
      type="text"
      placeholder="Buscar ciudad..."
      value={query}
      onKeyDown={(e)=> {
        if(e.key=== "Enter") handleAddCity();
        searchRef.current?.querySelector("input")?.blur();
      }}

      onChange={ async (e) => {

        const value = e.target.value;
        setQuery(value);

        if(value.length>2){
          const results = await getCitySuggestions(value);
          setSuggestions(results);
        }else{
          setSuggestions([]);
        }
      } }

      />

      {suggestions.length > 0 &&(
        <ul className="suggestions">
          {suggestions.map((city,index)=>(
            <li
            key={index}
            onClick={async ()=> {
            const data = await getWeatherByCoords(city.lat, city.lon);
            setCities((prev)=> [...prev, data]);
            setSuggestions([]);
            setQuery("");

            searchRef.current?.querySelector("input")?.blur();
          }}>
            {city.name}, {city.country} 
          </li>
          ))}
        </ul>
      )}
      

      </div>


      <div className="buttons">
      <button onClick={handleAddCity}>
        Agregar 
      </button>

      <button onClick={handleGetLocation}>
        Usar mi ubicacion
      </button>
      </div>

      </div>

      <AnimatePresence>
      <div className="cards-container">
      {cities.map((city, index) =>(
        <WeatherCard key={index} weather={city}/>
      ))}
      </div>
      </AnimatePresence>

    </div>

  )

}

export default App;
