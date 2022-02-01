weather={
    apiKey:"d72c2582c3b119e2fd59a8b6fac30dec",
    fetchWeather : function (city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
        
    },
    displayWeather : function(data) {
       const { name } = data
       const { temp } = data.main
       const { icon } = data.weather[0]
       const { description } = data.weather[0]
       const { humidity } = data.main
       const { speed } = data.wind
       document.querySelector(".city").innerHTML = "Weather in "+name;
       document.querySelector(".temp").innerHTML = temp+" °C";
       document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+".png";
       document.querySelector(".description").innerHTML = description;
       document.querySelector(".humidity").innerHTML = "Humidity : "+humidity+"%";
       document.querySelector(".wind").innerHTML = "Wind speed : "+speed+"m/s";
       document.querySelector(".weather").classList.remove("loading");
       document.body.style.backgroundImage =
       "url('https://source.unsplash.com/1600x900/?" + description + "')";
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        weather.search();
    }
});

// weather.fetchWeather("नई दिल्ली");
