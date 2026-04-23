function WeatherExtra({ weather }) {

  return (

    <div className="extra-grid">

        <div className="extra-item">
            <span>Sensación</span>
            <strong> {Math.round(weather.main.feels_like)}°C </strong>
        </div>

        <div className="extra-item">
            <span>Humedad</span>
            <strong> {weather.main.humidity}% </strong>
        </div>

        <div className="extra-item">
            <span>Viento</span>
            <strong> {weather.wind.speed} km/h</strong>
        </div>

    </div>
  );
}

export default WeatherExtra;