var apiKey='690097894ed6a6d3934f6f0a9b88b7f7'
$('#cityapi').on('click', function(){
    var userInput=$('#city').val()
    console.log(`City ${userInput}`)
    currentData(userInput)
})
function currentData(city){
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
$.ajax({
    'url':url, 
    'method':'GET'
}).then(function(weather){
    console.log(weather)
    $("#current").html(`
    <h3>${city}</h3>
    <p>Temp: ${weather.main.temp}</p>
    <img src='http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png' />
    <p>Description: ${weather.weather[0].description}</p>
    <p>Humidity: ${weather.main.humidity}</p>
    <p>Wind Speed: ${weather.wind.speed}</p>
    `)
    var lon= weather.coord.lon
    var lat= weather.coord.lat
    uvIndex(lat,lon)
})

   
}
function uvIndex(lat,lon){
    var url=`https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`
$.ajax({
    'url':url, 
    'method':'GET'
}).then(function(weather){
    console.log(weather)
    $('#current').append(`uv index:${weather.value}`)
})
}
