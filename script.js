var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=47442d983b570f5f60f2fd483ddea261'
var searchButton = document.getElementById('button');
var searchInput = document.getElementById('search-input');
var today = moment();
var currentTime = moment().hour();

$("#currentDay").text(today.format("MMM Do, YYYY"));

searchButton.addEventListener("click")
    
fetch(requestUrl) {
    .then(function (response){
    if (response.status === 200)
    return response.json();
}
    .then(function(data){
    console.log(data);
})
}


//fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=47442d983b570f5f60f2fd483ddea261')
//.then(function(response){
//    return response.json();
//})
//.then(function(data){
//    console.log(data);
//});