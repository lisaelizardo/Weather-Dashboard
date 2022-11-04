fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=47442d983b570f5f60f2fd483ddea261')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
});

