const key="c7885044fefaaa6cb2a9949df89d14ce";
const URL ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let wind= document.querySelector(".wind");
let humidity= document.querySelector(".humidity");
let weathericon=document.querySelector(".weather-img");
let temp= document.querySelector(".temp");
const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");



async function checkWeather(city){
    const response = await fetch(URL+ city +`&appid=${key}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display ="none";
    }else{
        var data= await response.json();
        console.log(data);
        let place= document.querySelector(".city");
        place.innerHTML=data.name;
        wind.innerHTML=data.wind.speed+"km/h";
        humidity.innerHTML=data.main.humidity+"%";
        temp.innerHTML=Math.round(data.main.temp)+"°c";
    
        if(data.weather[0].main =="Clear"){
            weathericon.src="weather-app-img/images/clear.png";
        }else if(data.weather[0].main=="Clouds"){
               weathericon.src="weather-app-img/images/clouds.png";
        }else if(data.weather[0].main=="Drizzle"){
            weathericon.src="weather-app-img/images/drizzle.png";
        }else if(data.weather[0].main=="Mist"){
            weathericon.src="weather-app-img/images/mist.png";
        }else if(data.weather[0].main=="Snow"){
            weathericon.src="weather-app-img/images/snow.png";
        }else if(data.weather[0].main=="Rain"){
            weathericon.src="weather-app-img/images/rain.png";
        }
    
        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display="none";
    }
   
     
}
btn.addEventListener("click",()=>{
    checkWeather(search.value);
});