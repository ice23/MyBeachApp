
var now = new Date();
var minLast_forecast = 0;  
$('#forecast').live('pageshow', function (event, ui) {
    alert('forecast');
    minLast_forecast = 0; (now - dt_Last_meteo) / 1000 / 60;
     alert(minLast_forecast + ' - ' + minLast_forecast);
    if (minLast_forecast > 10 || forecast_already_open == 0) {
        UpdateForecast();
    }
    
   
});

function UpdateForecast() {
    forecast_already_open = 1;
    dt_Last_forecast = now;
    var units = 'metric';
    if (get_cookie('units') == 'imperial') units = 'imperial';

    var lang = 'it';
    if (get_cookie('lang') == 'en') units = 'en';

    var myhref = "http://api.openweathermap.org/data/2.5/forecast?callback=?&id=" + current_city_id + '&units=' + units + '&lang=' + lang;
    //alert('forecast live');
    //$.mobile.showPageLoadingMsg();
    $.getJSON(myhref, getDataForecast);
}

// Add back button in heder nested list
/*$(':jqmData(url^=forecast)').live('pagebeforecreate',
  function (event) {
      $(this).filter(':jqmData(url*=ui-page)').find(':jqmData(role=header)')
      /*.prepend('<a href="#" data-rel="back" data-icon="back">Back</a>')*/
  });*/

function getDataForecast(JSONobject) {
    //JSONobject = ParseJson(JSONtext);
    //data = JSONobject.list;

    var curdate = new Date() - 45 * 60 * 1000;

    //console.log("time zone" + time_zone);
    var html = ''
    var lastday = 0;

    // 
    var ar_tmin = new Array();
    var ar_tmax = new Array();
    min_cur = 500;
    max_cur = 0;

    rr = new Date(JSONobject.list[0].dt * 1000 + time_zone);
    lastday = rr.getDate();

    for (var i = 0; i < JSONobject.list.length; i++) {
        var dt = new Date(JSONobject.list[i].dt * 1000 + time_zone);
        var day = dt.getDate();

        if (curdate > dt) continue;

        if (day != lastday) {
            lastday = day;
            ar_tmin.push(min_cur);
            ar_tmax.push(max_cur);
            max_cur = 0;
            min_cur = 500;
        }

        if (JSONobject.list[i].main.temp < min_cur)
            min_cur = JSONobject.list[i].main.temp;
        if (JSONobject.list[i].main.temp > max_cur)
            max_cur = JSONobject.list[i].main.temp;
        //console.log(JSONobject.list[i].main.temp);
    }
    ar_tmin.push(min_cur);
    ar_tmax.push(max_cur);

    lastday = 0;

    for (var i = 0; i < JSONobject.list.length; i++) {

        var dt = new Date(JSONobject.list[i].dt * 1000 + time_zone);

        if (curdate > dt) continue;
        var day = dt.getDate();
        var hr = dt.getHours();
        if (hr < 10) hr = '0' + hr;

        if (day != lastday) {
            if (lastday != 0)
                html = html + "</li></ul>";
            html = html + "<li><h3>---" + $.datepicker.formatDate('dd/mmm/yy', dt); +"</h3> \
			<p>Temp. min " + Math.round(ar_tmin.shift()) + " max " +
				Math.round(ar_tmax.shift()) + "°C</p><ul>";
            lastday = day;
        }
        var temp = Math.round(JSONobject.list[i].main.temp);
        var tmin = Math.round(JSONobject.list[i].main.temp_min);
        var tmax = Math.round(JSONobject.list[i].main.temp_max);

        var icon_cod = JSONobject.list[i]['weather'][0]['icon'];

        //var img = '<img src="http://openweathermap.org/img/w/' + icon_cod + '.png">';
        var img = '<img src="images/' + icon_cod + '.png">';
        var wind = JSONobject.list[i].wind.speed;
        var pressure = JSONobject.list[i].main.pressure;
        var cloud = JSONobject.list[i].clouds.all;

        var lang = 'it';
        //if (get_cookie('lang') == 'en') lang = 'en';
        if (lang == 'en') {
            html = html + '<li>' + img + '<h1>' + hr + ':00 </h1> <span class="ui-li-count"><h5>' + temp + '°C</h5></span>' +
'<p><strong>Temp. from---- ' + tmin + ' to ' + tmax + '°C</strong></p><p> Wind ' + wind +
' m/s.</p><p> Clouds ' + cloud + ' % ' + pressure + ' hpa</p></li>';
        }
        else {
            html = html + '<li>' + img + '<h1>' + hr + ':00 </h1> <span class="ui-li-count"><h5>' + temp + '°C</h5></span>' +
'<p><strong>Temp. min ' + tmin + ' max ' + tmax + '°C</strong></p><p> Vento ' + wind +
' m/s.</p><p> Nuvolità ' + cloud + ' % ' + pressure + ' hpa</p></li>';
        }

    }
    html = '<ul data-role="listview" id="forecast_list_data">' + html + '</ul>';

    $("#forecast_list_ul").html(html);
    $("#forecast_list_data").listview();

   // $.mobile.hidePageLoadingMsg();
};