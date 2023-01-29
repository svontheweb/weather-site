let weather = {
    apiKey : '6a222ca33bc86309fbfda22731800acc',
    fetchWeather: function(city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='
        +city
        +'&units=metric&appid='
        +this.apiKey)
    .then((response) => response.json())
.then((data) => this.displayWeather(data));
} ,
    displayWeather: function(data) {
        const { name } = data;
        const { country } = data.sys;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed }  = data.wind;
        document.querySelector('.city').innerText = "Weather in " + name + ", " + country;
        document.querySelector('.icon').src = "http://openweathermap.org/img/wn/" + icon + ".png";        
        // document.querySelector('.icon').src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";        
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + "° C";
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText =  "Wind Speed: " + speed + " km/h";
        document.querySelector('.weather').classList.remove('loading');

    },
    search: function() {
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
};

document.querySelector(".search button").addEventListener('click', function() {
    weather.search();
});

document.querySelector("input").
addEventListener('keyup', function(event) {
    if ( event.key == 'Enter' ) {
            weather.search();
    }
});