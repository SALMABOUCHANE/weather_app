let weather ={
    "apikey": '0a7ccca76fe9a2190f588ef29a3cf5f2',
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apikey
        )
        .then((Response) => Response.json())
        .then((data)=> this.displtyweather(data));
    },
    displtyweather : function(data){
        const {name}=data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector('.city').innerText='weather in : '+  name;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/'+icon+'.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + '°C';
        document.querySelector('.humidity').innerText = 'humidity : ' + humidity + '%';
        document.querySelector('.wind').innerText = 'wind : ' + speed +"km/h";
        
    },
    search :function(){
        this.fetchWeather(document.querySelector('.search-bar').value);
    },

};

document
.querySelector('.search button')
.addEventListener('click',function(){
    weather.search();
});