let weather = {
    apiKey : '6a222ca33bc86309fbfda22731800acc',
    fetchWeather: function(city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='
        +city
        +'&units=metric&appid='
        +this.apiKey)
    .then((response) => response.json())
.then((data) => console.log(data));
}
};