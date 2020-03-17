// get date
var today = new Date();
var weekDay = '';
switch (today.getDay()) {
    case 0:
        weekDay = 'Sun';
        break;
    case 1:
        weekDay = 'Mon';
        break;
    case 2:
        weekDay = 'Tue';
        break;
    case 3:
        weekDay = 'Wed';
        break;
    case 4:
        weekDay = 'Thu';
        break;
    case 5:
        weekDay = 'Fri';
        break;
    case 6:
        weekDay = 'Sat';
        break;
}
var date = weekDay + String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(160) + today.getDate() + '-'+ (today.getMonth() + 1) + '-' + today.getFullYear();
var hour = today.getHours();
var time = hour + ':' + today.getMinutes();

// Fill current date time
$('.date').text(date);
$('.time').text(time);

// set bg color and sun's position depend on time
var bgColor = '#feefc7';
if (hour > 5 && today.getHours() <= 7) {
    bgColor = '#efa18b';
    $('.sun').css('transform', 'rotate(-150deg) translate(40vw) rotate(-150deg)');
} else if (hour <= 10) {
    bgColor = '#e3c498';
    $('.sun').css('transform', 'rotate(-120deg) translate(40vw) rotate(-120deg)');
} else if (hour <= 14) {
    bgColor = '#f6e9d2';
    $('.sun').css('transform', 'rotate(-90deg) translate(40vw) rotate(-90deg)');
} else if (hour <= 16) {
    bgColor = '#e3c498';
    $('.sun').css('transform', 'rotate(-60deg) translate(40vw) rotate(-60deg)');
    $('.weather').css('left', '10%');
} else if (hour <= 17) {
    bgColor = '#efa18b';
    $('.weather').css('left', '10%');
    $('.sun').css('transform', 'rotate(-30deg) translate(40vw) rotate(-30deg)');
} else if (today.getHours() >= 18 || today.getHours() <= 5) {
    bgColor = '#010a3d';
    $('.sun').css('transform', 'rotate(-90deg) translate(40vw) rotate(-90deg)');
    $('.sun').css('background-color', '#e6dde4');
    $('.date').css('color', '#e6dde4');
    $('.time').css('color', '#e6dde4');
    $('.google a').css('color', '#e6dde4');
    $('.google path').css('fill', '#e6dde4');
}
$('.container').css('background-color', bgColor);

// icon set: https://www.iconfinder.com/iconsets/weather-color-2
var cloudy = '<img src="images/cloudy.png">';
var foggy = '<img src="images/foggy.png">';
var heavy_rain = '<img src="images/heavy_rain.png">';
var light_rain = '<img src="images/light_rain.png">';
var light_sun = '<img src="images/light_sun.png">';
var moderate_rain = '<img src="images/moderate.png">';
var rainy_sun = '<img src="images/rainy_sun.png">';
var snowy = '<img src="images/snowy.png">';
var storm = '<img src="images/storm.png">';
var sun_foggy = '<img src="images/sun_foggy.png">';
var sunny = '<img src="images/sunny.png">';
var sun_windy = '<img src="images/sun_windy.png">';
var tornado = '<img src="images/tornado.png">';
var thunder = '<img src="images/thunder.png">';
var windy = '<img src="images/windy.png">';
var hail_rain = '<img src="images/hail_rain.png">';

// get weather
$(document).ready(function() {
    var city = '';
    var weather = [];
    const actions = new Map([
        [200, [thunder, 'add_thunder_rain_descrease_font']],
        [201, [thunder, 'add_thunder_rain_descrease_font']],
        [202, [thunder, 'add_thunder_heavy_rain_descrease_font']],
        [210, [thunder, 'add_thunder']],
        [211, [thunder, 'add_thunder']],
        [212, [thunder, 'add_thunder_decrease_font']],
        [221, [thunder, 'add_thunder_decrease_font']],
        [230, [thunder, 'add_thunder_rain_decrease_font']],
        [231, [thunder, 'add_thunder_rain_decrease_font']],
        [232, [thunder, 'add_thunder_rain_decrease_font']],

        [300, [light_rain, 'add_rain_decrease_font']],
        [301, [light_rain, 'add_rain']],
        [302, [light_rain, 'add_rain_decrease_font']],
        [310, [light_rain, 'add_rain_decrease_font']],
        [311, [light_rain, 'add_rain']],
        [312, [light_rain, 'add_rain_decrease_font']],
        [313, [light_rain, 'add_rain_decrease_font']],
        [314, [light_rain, 'add_rain_decrease_font']],
        [321, [light_rain, 'add_rain']],

        [500, [light_rain, 'add_rain']],
        [501, [moderate_rain, 'add_rain']],
        [502, [heavy_rain, 'increase_rain_width_descrease_font']],
        [503, [heavy_rain, 'increase_rain_width']],
        [504, [heavy_rain, 'increase_rain_width']],
        [511, [heavy_rain, 'increase_rain_width']],
        [520, [heavy_rain, 'increase_rain_width_descrease_font']],
        [521, [heavy_rain, 'increase_rain_width']],
        [522, [heavy_rain, 'increase_rain_width_descrease_font']],
        [531, [heavy_rain, 'increase_rain_width_descrease_font']],

        [/^[600-622]$/, [snowy, 'add_snow']],

        [701, [windy, 'add_mist']],
        [702, [windy, 'add_mist']],
        [703, [windy, 'add_mist']],
        [704, [windy, 'add_mist']],
        [731, [foggy, 'add_fog']],
        [741, [foggy, 'add_fog']],
        [771, [hail_rain, 'increase_rain_width']],
        [781, [tornado, 'increase_rain_width']],

        [800, [sunny, '']],
        [801, [light_sun, '']],
        [802, [cloudy, '']],
        [803, [cloudy, '']],
        [804, [cloudy, '']],

        ['default', [sunny, '']]
    ]);
    function icon(icon_name) {
        $('.weather .icon').html(icon_name);
    }
    function doWeather(action) {
        switch (action) {
            case 'add_thunder_rain_descrease_font':
                $('.lightning').css('display', 'block');
                $('.layer-1 .rain-drop').css('display', 'block');
                $('.weather .description').css('font-size', '1.5em');
                break;
            case 'add_thunder_rain':
                $('.lightning').css('display', 'block');
                $('.layer-1 .rain-drop').css('display', 'block');
                break;
            case 'add_thunder_heavy_rain_descrease_font':
                $('.thunder').css('display', 'block');
                $('.rain-drop').css('display', 'block');
                $('.rain-drop').css('width', '2px');
                $('.weather .description').css('font-size', '1.5em');
                break;
            case 'add_thunder_heavy_rain':
                $('.thunder').css('display', 'block');
                $('.rain-drop').css('display', 'block');
                $('.rain-drop').css('width', '2px');
                break;
            case 'add_thunder':
                $('.thunder').css('display', 'block');
                break;
            case 'add_rain_decrease_font':
                $('.layer-1 .rain-drop').css('display', 'block');
                $('.weather .description').css('font-size', '1.5em');
                break;
            case 'add_rain':
                $('.layer-1 .rain-drop').css('display', 'block');
                break;
            case 'increase_rain_width_descrease_font':
                $('.rain-drop').css('display', 'block');
                $('.rain-drop').css('width', '2px');
                $('.weather .description').css('font-size', '1.5em');
                break;
            case 'increase_rain_width': 
                $('.rain-drop').css('display', 'block');
                $('.rain-drop').css('width', '2px');
                break;
            case 'add_snow':
                $('.snowflakes .snowflake').css('display', 'block');
                break;
            case 'add_mist':
                $('.fog').css('display', 'block');
                break;
            case 'add_fog':
                $('.fog').css('display', 'block');
                $('.fog').css('filter', 'blur(20px)');
                break;
            default:
                $('.sakuras .snowflake').css('display', 'block');
        }
    }

    function checkWeather(status) {
        let action = actions.get(status) || actions.get('default');
        icon(action[0]);
        doWeather(action[1]);
    }
    $.ajax({
        type: 'GET',
        dataType: 'json',
        data: {},
        url: 'https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=8abd04009b0b784352dd637c0ecb8668&units=metric',
        success: function(data)
        {
            weather.date = moment.unix(data.dt).format('MM/DD/YYYY');
            weather.time = moment.unix(data.dt).format('HH:MM');
            weather.city = data.name;
            weather.weather = data.weather[0].description;
            weather.weather_id = data.weather[0].id;
            checkWeather(weather.weather_id);
            weather.temp = data.main.temp;
            weather.feels_like = data.main.feels_like;
            weather.maxTemp = data.main.temp_max;
            weather.minTemp = data.main.temp_min;
            $('.weather .city').html(weather.city);
            $('.weather .curr-temp span').html(weather.temp);
            $('.weather .description').html(weather.weather);
            $('.weather .feel').html(weather.feels_like);
            $('.weather .max a').html(weather.maxTemp);
            $('.weather .min a').html(weather.minTemp);
        }
    });
});
