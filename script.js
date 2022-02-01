weather={
    apiKey:"d72c2582c3b119e2fd59a8b6fac30dec",
    fetchWeather : function (city){
        fetch("api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apiKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
}

