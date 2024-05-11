function updateTime(){


//berlin
    let berlinElement = document.querySelector("#berlin");
let berlinDateElement = berlinElement.querySelector(".date-city");
let berlinTimeElement = berlinElement.querySelector(".time-city");
let berlinTime = moment().tz("Europe/Berlin");


berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
berlinTimeElement.innerHTML = berlinTime.format("h:mm:ss[<span>]A[</span>]");




//bogota 
   let bogotaElement = document.querySelector("#bogota");
let bogotaDateElement = bogotaElement.querySelector(".date-city");
let bogotaTimeElement = bogotaElement.querySelector(".time-city");
let bogotaTime = moment().tz("America/Bogota");


bogotaDateElement.innerHTML = bogotaTime.format("MMMM Do YYYY");
bogotaTimeElement.innerHTML = bogotaTime.format("h:mm:ss[<span>]A[</span>]");
}
updateTime();
setInterval(updateTime, 1000);



function updateCity(event){
    let cityTz = event.target.value;
    let cityName = cityTz.replace("_"," ").split("/")[1];
    let cityTime = moment().tz(cityTz);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = 
    `
    <div class="city" id="berlin">
        <div class="city-name">${cityName}</div>
        <div class="date-city">${cityTime.format("MMMM Do YYYY")}</div>
        <div class="time-city"${cityTime.format("h:mm:ss[<span>]A[</span>]")}></div>
    </div>
    `;
}


let citySelectElement = document.querySelector("#select-city");

citySelectElement.addEventListener("change", updateCity);

