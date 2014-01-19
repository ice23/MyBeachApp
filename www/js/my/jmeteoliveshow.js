$('#meteo').live('pageshow', function (event, ui) {


    $("div[class$='slidein-panel']").animate({ 'left': -$("div[class$='slidein-panel']").outerWidth() });
    status = 'close';

    isDeviceOnline = 'YES';
    if (isDeviceOnline == 'YES') {
        if (navigator != null && navigator.notification != null) {
            navigator.notification.activityStart("caricamento", "Caricamento meteo in corso...");
        }

        $('#city_wind_lbl').html('0');
        var units = 'metric';
        if (get_cookie('units') == 'imperial') units = 'imperial';
        //            if ('metric' == 'imperial') units = 'imperial';
        //alert(current_city_id);
        current_city_id = '3172087';
        $('#city_wind_lbl').html('1');
        //alert(current_city_id);

        //http://api.openweathermap.org/data/2.5/weather?callback=?&id=3172087&units=metric&lang=it
        //http://api.openweathermap.org/data/2.5/weather?callback=?&id=3172087&units=metric


        var lang = 'it';
        if (get_cookie('lang') == 'en') lang = 'en';
        $('#city_wind_lbl').html('2');

        // alert(current_city_id + '1');
        if (current_city_id)
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?callback=?&id=" + current_city_id + '&units=' + units, showCurrentCity).error(errorHandler);
        else
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?callback=?&id=auto" + '&units=' + units, showCurrentCity).error(errorHandler);


    }
    else {
        alert('no connection');
    }



    function showCurrentCity(d) {


        current_city_id = d.id;
        if (navigator != null && navigator.notification != null) {
            navigator.notification.activityStop();
        }
        $('#city_name').html(d.name + ', ' + d.sys.country);
        $('#city_temp').html('Temperature ' + Math.round((d.main.temp) * 100) / 100 + '°C');
        //	$('#city_temp').html( 'Temperature  17 °C' );

        $("#forecast_title").html("Forecast for " + d.name + ', ' + d.sys.country);

        var dt = new Date(d.dt * 1000);
        var hr = dt.getHours();
        if (hr < 10) hr = '0' + hr;
        var mn = dt.getMinutes();
        if (mn < 10) mn = '0' + mn;
        var mon = dt.getMonth() + 1;
        if (mon < 10) mon = '0' + mon;
        var day = dt.getDate();
        if (day < 10) day = '0' + day;
        var year = dt.getFullYear();
        $("#date_m").html(year + '.' + mon + '.' + day + ' ' + hr + ':' + mn);

        WindDir = '';
        /*
        N        348.75 - 11.25
        NNE      11.25 - 33.75
        NE       33.75 - 56.25
        ENE      56.25 - 78.75
        E        78.75 - 101.25
        ESE      101.25 - 123.75
        SE       123.75 - 146.25
        SSE      146.25 - 168.75
        S        168.75 - 191.25
        SSW      191.25 - 213.75
        SW       213.75 - 236.25
        WSW      236.25 - 258.75
        W        258.75 - 281.25
        WNW      281.25 - 303.75
        NW       303.75 - 326.25
        NNW      326.25 - 348.75
        */
        WindSpeed = d.wind.speed;
        if (d.wind.deg >= 348.75 || d.wind.deg < 11.25) {
            WindDir = 'N';
        }
        if (d.wind.deg >= 11.25 && d.wind.deg < 33.75) {
            WindDir = 'NNE';
        }
        if (d.wind.deg >= 33.75 && d.wind.deg < 56.25) {
            WindDir = 'NE';
        }
        if (d.wind.deg >= 56.25 && d.wind.deg < 78.75) {
            WindDir = 'ENE';
        }
        if (d.wind.deg >= 78.75 && d.wind.deg < 101.25) {
            WindDir = 'E';
        }
        if (d.wind.deg >= 101.25 && d.wind.deg < 123.75) {
            WindDir = 'ESE';
        }
        if (d.wind.deg >= 123.75 && d.wind.deg < 146.25) {
            WindDir = 'SE';
        }
        if (d.wind.deg >= 146.25 && d.wind.deg < 168.75) {
            WindDir = 'SSE';
        }
        if (d.wind.deg >= 168.75 && d.wind.deg < 191.25) {
            WindDir = 'S';
        }
        if (d.wind.deg >= 191.25 && d.wind.deg < 213.75) {
            WindDir = 'SSW';
        }
        if (d.wind.deg >= 213.75 && d.wind.deg < 236.25) {
            WindDir = 'SW';
        }
        if (d.wind.deg >= 236.25 && d.wind.deg < 258.75) {
            WindDir = 'WSW';
        }
        if (d.wind.deg >= 258.75 && d.wind.deg < 281.25) {
            WindDir = 'W';
        }
        if (d.wind.deg >= 281.25 && d.wind.deg < 303.75) {
            WindDir = 'WW';
        }
        if (d.wind.deg >= 303.75 && d.wind.deg < 326.25) {
            WindDir = 'NW';
        }
        if (d.wind.deg >= 348.75 && d.wind.deg < 326.25) {
            WindDir = 'NW';
        }
        //alert(d.wind.deg + '° -->' + WindDir);
        var lang = 'it';
        if (get_cookie('lang') == 'en') lang = 'en';

        $('#city_wind').html(d.wind.speed + ' m/s   ' + d.wind.deg + '° (' + WindDir + ')');
        $('#city_clouds').html(d.clouds.all + ' %');
        $('#city_pressure').html(d.main.pressure + ' hpa');
        Hpa = d.main.pressure;
        $('#city_humidity').html(d.main.humidity + ' %');

        if (lang == 'en') {
            $('#city_wind_lbl').html('Wind: ');
            $('#city_clouds_lbl').html('Cloudiness: ');
            $('#city_pressure_lbl').html('Atmospheric pressure: ');
            $('#city_humidity_lbl').html('Humidity:');
        }
        else {
            $('#city_wind_lbl').html('Vento: ');
            $('#city_clouds_lbl').html('Nuvolosità: ');
            $('#city_pressure_lbl').html('Pressione Atmosferica: ');
            $('#city_humidity_lbl').html('Umidità:');
        }

        if (d.weather[0]) {
            //$('li.picture').css('background', "#fff url(http://openweathermap.org/img/w/" + d.weather[0].icon + ".png) no-repeat");
            $('img.picture').attr("src", "images/" + d.weather[0].icon + ".png");
            //$('img.picture').css('background', "#fff url(images/" + d.weather[0].icon + ".png) no-repeat");
            $('#city_weather').html(d.weather[0].description);
        }


    }

});