function Forecast({ forecast }) {

    if(!forecast) return null;

  return (
    <div className="forecast-container">

    <h3>Pronóstico próximas horas</h3>

    <div className="forecast">

        {forecast.list.slice(0, 5).map((item, i) => {
            const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

            return (
                <div key={i} className="forecast-item">

                    <p>{new Date(item.dt * 1000).getHours()}:00</p>
                    <img src={icon} alt="weather icon"/>
                    <p>{Math.round(item.main.temp)}°C</p>

                </div>
            );
        })}

    </div>

    </div>
  );
}

export default Forecast;