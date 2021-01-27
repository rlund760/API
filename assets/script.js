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
})

   
}
