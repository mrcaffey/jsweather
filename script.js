

var city = "Salt Lake City"; //dynamic

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=02b816fc00079e0951a8c5f97f1c4009", 
function(data){
  console.log(data);

  var icon = 
    "https://openweathermap.org/img/w" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;
  var wind = data.weather[0].speed;

  $('.icon').attr('src', icon);
  $('.weather').append(weather);
  $('.temp').append(temp);
  $('.wind').append(wind);

});