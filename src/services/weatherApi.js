const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeatherByCity(city){

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data= await response.json();
    return data;
}

export async function getWeatherByCoords(lat, lon){
    const API_KEY = import.meta.env.VITE_API_KEY;

    const response = await fetch(
     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`   
    );

    const data = await response.json();
    return data;
}


export async function getCitySuggestions(query){
    const API_KEY = import.meta.env.VITE_API_KEY;

    const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`        
    );

    const data = await response.json();
    return data;
}

export async function getForecast(lat, lon) {
    const apiKey = API_KEY;
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    )

    return res.json();
}