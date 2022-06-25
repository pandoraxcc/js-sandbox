
function get_time() {
    
    var date = new Date();
    var day_night = date.getHours();

    day_night = (day_night > 18 ? "night" : "day");

    return day_night;

}    

$(document).ready(function()
    {
        var day_night = get_time();
        var imgNight = "./img/background-night.jpeg";
        var imgDay = "./img/backgound-day.jpeg"

        $.ajax({

            type: "GET",
            dataType: "jsonp",
            url: "https://api.openweathermap.org/data/2.5/weather?lat={x}&lon={y}&appid={apikey}",
    
            success: function(data, status, xhr) {
                
                var parsed_data = $.parseJSON(JSON.stringify(data))

                var city = parsed_data.name;
                
                // returned temp in Kelvins
                var current_temp = parsed_data.main.temp;
                var temp_in_f = (current_temp - 273,15) * 9/5 + 32 
                var temp_in_c = (temp_in_f - 32) * 5/9
                var humidity = parsed_data.main.humidity;

                // updating the city, temperature, weather icons && backgrounds 
                $("#city").text("City: " + city);
                $("#temperature").text("Temperature: " + temp_in_c + "C / " + temp_in_f + "F" );

                if (day_night == "day") {
                    $("#weather-icon").attr("src", "./img/day.png")
                    $(".main-widget").css("backgound", 'url(' + imgDay + ')')
                }

                else {
                    $("#weather-icon").attr("src", "./img/night.png")
                    $(".main-widget").css("backgound", 'url(' + imgNight + ')')

                }
            }
        });

    });
