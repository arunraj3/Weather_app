let weather = {
    "apiKey" : "3c7f6ac6012b1608d90dec2ee7406004",
    fetchWeather : function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + weather.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
            
    },
    displayWeather : function(data){
       const {name} = data;
       const {description,icon} = data.weather[0];
       const {temp,humidity} = data.main;
       const {speed} = data.wind;
       document.querySelector(".city").innerText = "Weather in "+ name;
       document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png" 
       document.querySelector(".wind").innerText = "Wind speed: "+speed+"Km/h";
       document.querySelector(".humidity").innerText = "Humidity: "+humidity+"%";
       document.querySelector(".temp").innerText = temp+"°C";
       document.querySelector(".description").innerHTML = description;
       document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')";
    },
    
    getCity : function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};



document.querySelector(".search button").addEventListener("click",function(){
    weather.getCity();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key === "Enter"){
        weather.getCity();
    }
})

weather.fetchWeather("Bangalore");
