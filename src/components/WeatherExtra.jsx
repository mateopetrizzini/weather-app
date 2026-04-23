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

        <div className="extra-item">
            <span>Presión</span>
            <strong> {weather.main.pressure} hPa</strong>
        </div>

        <div className="extra-item">
            <span>Visibilidad</span>
            <strong> {weather.visibility / 1000} km</strong>
        </div>

    </div>
  );
}

export default WeatherExtra;