//$('#Beach').live("pagebeforecreate", function (event) {
//  alert( "This page was just inserted into the dom!" );
//});


$(document).ready(function () {

    //    $('#img_nextbeach').click(function () {

    //        var Beach_ID = getURLParameter('id');
    //        // alert('next ' + id);
    //        Beach_ID = parseInt(Beach_ID) + 1;

    //        window.location.href = "#Beach?id=" + Beach_ID;
    //        window.location.reload();
    //    });
    //    $('#img_prevbeach').click(function () {
    //        var Beach_ID = getURLParameter('id');
    //        Beach_ID = parseInt(Beach_ID) - 1;
    //        //alert('prev ' + Beach_ID);
    //        window.location.href = "#Beach?id=" + Beach_ID;
    //        window.location.reload();

    //    });
    $('#img_parcheggio').click(function () {
        alertify.alert("Ampio Parcheggio");
    });
    $('#img_bar').click(function () {
        alertify.alert("Prensenza di un bar");
    });
    $('#img_bambini').click(function () {
        alertify.alert('Adatta ai bambini');
    });
    $('#img_disabili').click(function () {
        alertify.alert('Attrezzata per i disabili');
    });
    $('#img_attrezzata').click(function () {
        alertify.alert('Possibilità di noleggio sdraio e ombrelloni');
    });
    $('#img_camper').click(function () {
        alertify.alert('Adatta ai camper');
    });
    $('#img_attivsub').click(function () {
        alertify.alert('Possibilità di fare attivita subacquee');
    });
    $('#img_densita').click(function () {
        var densita = $('#hdd_densita').val();
        alertify.alert('Livello di densità ' + densita);
    });







    $('#likethisbeach').click(function () {
        var Beach_ID = getURLParameter('id');
        if (localStorage.getItem('like_beach_' + Beach_ID) != null) {
            localStorage.removeItem('like_beach_' + Beach_ID);
            $('#likethisbeach').attr('src', 'images/notlike.png');
            alertify.alert("Spiaggia rimossa dalle preferite");
        }
        else {
            localStorage.setItem('like_beach_' + Beach_ID, 'like');
            $('#likethisbeach').attr('src', 'images/like.png');
            alertify.alert("Spiaggia aggiunta alle preferite");
        }
    });

});

$('#Beach').live('pageshow', function (event, ui) {
    var Beach_ID = getURLParameter('id');
   // $.mobile.showPageLoadingMsg("b", "Caricamento in corso...");


    $('#likethisbeach').attr('src', 'images/notlike.png');
    if (localStorage.getItem('like_beach_' + Beach_ID) != null) {
        $('#likethisbeach').attr('src', 'images/like.png');
    }

    //alert(Beach_ID);
    if (sites.length == 0) {
        ReadXmlBeachById(Beach_ID);
    }
    var photo = "";
    for (var i = 0; i < sites.length; i++) {
        var info = sites[i];


        var parking = info[6];
        var bar = info[7];
        var id = info[8];
        var disabili = info[9];
        var xbambini = info[10];
        var surf = info[11];
        var rent = info[12];

        var camper = info[14];
        var attivsub = info[15];
        var densita = info[16];
        // var beach = [nome, lat, lon, 1, descrizione, windNO, parking, bar, id, disabili, xbambini, surf, rent, photo, camper, attivsub, densita]

        if (Beach_ID == id) {
            //Info
            //alert(info);
            //alert('Beach_ID ' + Beach_ID + ' - 6:' + info[6] + ' - 7:' + info[7] + ' - 8:' + info[8] + ' - 9:' + info[9] + ' - 10:' + info[10] + ' - ');
            ThisBeachLat = info[1];
            ThisBeachLon = info[2];
 localStorage.setItem('ThisBeachLat', ThisBeachLat);
 localStorage.setItem('ThisBeachLon', ThisBeachLon);
 
            var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + ThisBeachLat + "&lon=" + ThisBeachLon + "&mode=json&lang=it&units=metric";
            // alert(url);
            $.getJSON(url, showCurrentweather).error(errorWeather);


           

            photo = info[13];
            var nome = info[0];
            var ds = info[4];
            localStorage.setItem('ThisBeachName', nome);
            $("#forecast_title").html(localStorage.getItem('ThisBeachName'));
            //alert('forecast_title4');
//            alert('info1 ' + info);
            $('#beach_Name').html(nome);
            $('#beach_Ds').html(ds);

            //alert('parking:' + parking);

            //Img
            if (parking == '1') {
                $('#td_parcheggio').show();
            }
            else {
                $('#td_parcheggio').hide();
            }
            if (bar == '1') {
                $('#td_bar').show();
            }
            else {
                $('#td_bar').hide();
            }
            if (disabili == '1') {
                $('#td_disabili').show();
            }
            else {
                $('#td_disabili').hide();
            }
            if (xbambini == '1') {
                $('#td_xbambini').show();
            }
            else {
                $('#td_xbambini').hide();
            }
            if (rent == '1') {
                $('#td_attrezzata').show();
            }
            else {
                $('#td_attrezzata').hide();
            }
            if (attivsub == '1') {
                $('#td_attivsub').show();
            }
            else {
                $('#td_attivsub').hide();
            }
            if (camper == '1') {
                $('#td_camper').show();
            }
            else {
                $('#td_camper').hide();
            }
            $('#td_densita').hide();
            if (densita == 'B') {
                $('#img_densita').attr('src', 'images/icone/densitab.png');
                $('#td_densita').show();
                $('#hdd_densita').val('Bassa');
            }
            if (densita == 'M') {
                $('#img_densita').attr('src', 'images/icone/densita.png');
                $('#td_densita').show();
                $('#hdd_densita').val('Medio');
            }
            if (densita == 'A') {
                $('#img_densita').attr('src', 'images/icone/densita.png');
                $('#td_densita').show();
                $('#hdd_densita').val('Alta');
            }



            //Direzione
            localStorage.setItem("mylat", mylat);
            localStorage.setItem("mylng", mylng);
            var start = mylat + "," + mylng;
            var end = info[1] + "," + info[2];
            //alert(start + '\n' + end);
            //var distanceInput = document.getElementById("distance");

            var directionDisplay;
            var directionsService = new google.maps.DirectionsService();
            var map_dir;

            directionsDisplay = new google.maps.DirectionsRenderer();
            var mypos = new google.maps.LatLng(mylat, mylng);
            //alert(mylat + ' ' +mylng);
            var myOptions = {
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: mypos
            }
            //alert(map_dir);
            map_dir = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
            directionsDisplay.setMap(map_dir);
            //alert(map_dir);

            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.DirectionsTravelMode.DRIVING
            };

            directionsService.route(request, function (response, status) {
                //alert('status:' + status);
                count_tmp_beach = count_tmp_beach + 1;
                //alert(count_tmp_beach +'/' + sites.length);
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                    //alert(response.routes[0].legs[0].distance.value / 1000);
                    distancekm = response.routes[0].legs[0].distance.value / 1000;
                    var origins = request.origin.split(',');
                    var destinations = request.destination.split(',');

                    var myRoute = response.routes[0].legs[0];
                    var instr = '<b> Distanza Totale : ' + distancekm + 'km <b/></br>';
                    for (var i = 0; i < myRoute.steps.length; i++) {
                        var km = myRoute.steps[i].distance.text;
                        instr = instr + '<br/> ' + km + ' - ' + myRoute.steps[i].instructions;
                    }


                    $('#beach_Drive').html(instr);
                    $.mobile.hidePageLoadingMsg();
                }

            });
        }
    }



    //alert(Beach_ID + ' = ' + sites.length);
    $("div[class$='slidein-panel']").animate({ 'left': -$("div[class$='slidein-panel']").outerWidth() });
    status = 'close';

    //window.location.reload();

});

function errorWeather(e) {
    alert('status : ' + e.status + ' Status.text ' + e.statusText);
 
}

function showCurrentweather(d) {
    //alert('showCurrentCity :' + d.main.temp);
   
    $('#city_tempg').html('' + Math.round((d.main.temp) * 100) / 100 + '°C');
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
    $('#city_last_upd').html(" <i>Ult. agg. :" + day + ' ' + hr + ':' + mn + '</i>');
    $('#forecast_beach').attr('href', '#forecast?force=1');

    //$("#forecast_title").html(d.name + ', ' + d.sys.country);
    //alert('forecast_title5');
    localStorage.setItem('forceMeteo', '1');

    $('#city_nameg').html(d.name.toUpperCase() + ', ' + d.sys.country.toUpperCase());
    WindDir = '';
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
    var KM_HR = Math.round(d.wind.speed * 3.6);
    var nod = Math.round(d.wind.speed / 0.514444);
    $('#city_windg').html();
    $('#city_cloudsg').html();
    $('#city_pressureg').html();
    Hpa = d.main.pressure;

    $('#city_wind_lblg').html('' + KM_HR + 'Km/hr  (' + nod + 'nodi) ' + d.wind.deg + '° (' + WindDir + ')');
    $('#city_clouds_lblg').html('' + d.clouds.all + ' %');
    $('#city_pressure_lblg').html('' + d.main.pressure + ' hpa');
    $('#city_humidity_lblg').html('' + d.main.humidity + ' %');
    if (d.weather[0]) {
        //$('li.picture').css('background', "#fff url(http://openweathermap.org/img/w/" + d.weather[0].icon + ".png) no-repeat");
        $('img.pictureg').attr("src", "images/" + d.weather[0].icon + ".png");
        //$('img.picture').css('background', "#fff url(images/" + d.weather[0].icon + ".png) no-repeat");
        $('#city_weatherg').html('<b>' + d.weather[0].description + '</b>');
    }
}

$('#Beach').live("pageshow", function (event) {
    var Beach_ID = getURLParameter('id');
    $('#TotDist').html('calcolo in corso...');

    //alert(Beach_ID + ' - ' + sites.length);
    if (sites.length == 0) {
        ReadXmlBeachById(Beach_ID);
    }
    var photo = "";
    for (var i = 0; i < sites.length; i++) {
        var info = sites[i];

        var parking = info[6];
        var bar = info[7];
        var id = info[8];
        var disabili = info[9];
        var xbambini = info[10];
        var surf = info[11];
        var rent = info[12];

        var camper = info[14];
        var attivsub = info[15];
        var densita = info[16];

        //var beach=[nome, lat,lon, 1, descrizione,windNO,parking,bar,id,disabili,xbambini,surf,rent,photo]
        if (Beach_ID == id) {
            //Info
            //alert(info);
            photo = info[13];
            var nome = info[0];
            var ds = info[4];
            //alert('info2 ' + info[0]);
            $('#beach_Name').html(nome);
            $('#beach_Ds').html(ds);





            //Direzione
            localStorage.setItem("mylat", mylat);
            localStorage.setItem("mylng", mylng);
            var start = mylat + "," + mylng;
            var end = info[1] + "," + info[2];
            //alert(start + '\n' + end);
            //var distanceInput = document.getElementById("distance");

            var directionDisplay;
            var directionsService = new google.maps.DirectionsService();
            var map_dir;

            directionsDisplay = new google.maps.DirectionsRenderer();
            var mypos = new google.maps.LatLng(mylat, mylng);
            //alert(mylat + ' ' +mylng);
            var myOptions = {
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: mypos
            }
            //alert(map_dir);
            map_dir = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
            directionsDisplay.setMap(map_dir);
            //alert(map_dir);

            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.DirectionsTravelMode.DRIVING
            };

            directionsService.route(request, function (response, status) {
                //alert('status:' + status);
                count_tmp_beach = count_tmp_beach + 1;
                //alert(count_tmp_beach +'/' + sites.length);
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                    //alert(response.routes[0].legs[0].distance.value / 1000);
                    distancekm = response.routes[0].legs[0].distance.value / 1000;
                    var origins = request.origin.split(',');
                    var destinations = request.destination.split(',');

                    var myRoute = response.routes[0].legs[0];
                    var DistTot = '<b> Distanza Totale : ' + distancekm + 'km <b/></br>'
                    var instr = '';
                    for (var i = 0; i < myRoute.steps.length; i++) {
                        var km = myRoute.steps[i].distance.text;
                        instr = instr + '<br/> ' + km + ' -' + myRoute.steps[i].instructions;
                    }

                    $('#TotDist').html(DistTot);
                    $('#beach_Drive').html(instr);
                }

            });
        }
    }


    //alert('photos : ' + photo);
    //alert(lastBeachID + " - " + Beach_ID);
    $("#MyGallery1").html('');
    if (photo != null && photo.length > 0) {
        // <a href="#Gallery"> <img class="rotating-item swipe" alt="" src="images/beach/imagestest.jpg" /></a>

        //alert('photo : ' + photo);
        var photoArray = photo.split(';');
        var gallery = "";
        for (var i = 0; i < photoArray.length; i++) {
            var beachphoto = photoArray[i];
            gallery = gallery + '<a href="#Gallery" class="ui-link"> <img class="rotating-item swipe" alt="" src="' + beachphoto + '" /></a>'

        }

        //alert('append');
        $("#MyGallery1").html(gallery);

        /* Swipe Variables */
        $.fn.cycle.transitions.scrollHorzTouch = function ($cont, $slides, opts) {
            $cont.css('overflow', 'hidden').width();
            opts.before.push(function (curr, next, opts, fwd) {

                if (opts.rev)
                    fwd = !fwd;

                positionNext = $(next).position();
                positionCurr = $(curr).position();

                $.fn.cycle.commonReset(curr, next, opts);
                if ((positionNext.left > 0 && fwd) || (positionNext.left < 0 && !fwd)) {
                    opts.cssBefore.left = positionNext.left;
                }
                else {
                    opts.cssBefore.left = fwd ? (next.cycleW - 1) : (1 - next.cycleW);
                }
                if ((positionCurr.left > 0 && fwd) || (positionCurr.left < 0 && !fwd)) {
                    opts.animOut.left = positionCurr.left;
                }
                else {
                    opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
                }

            });
            opts.cssFirst.left = 0;
            opts.cssBefore.top = 0;
            opts.animIn.left = 0;
            opts.animOut.top = 0;
        };
        var currenSlide = null;
        var slideNumber = 0;
        var currentLeft = 0;
        var leftStart = 0;
        var sliderExpr;
        var slideFlag = false;


        $('#rotating-item-wrapperBeach').cycle({
            fx: 'scrollHorzTouch',
            timeout: 1000,
            pager: '#nav',
            speedIn: 400,
            speedOut: 400,
            slideExpr: 'img',
            next: '#nextBt',
            prev: '#prevBt',
            startingSlide: 0
        });


        $('#rotating-item-wrapperBeach').swipe({ swipeMoving: function (pageX) {

            if (slideFlag) return;

            var newLeft = currentLeft - pageX;

            currenSlide.css('left', newLeft + 'px');

            var $slides = $(sliderExpr, $('#rotating-item-wrapperBeach'));
            var scrollSlide;

            nextSlideLeft = newLeft > 0 ? newLeft - currenSlide.width() : newLeft + currenSlide.width();
            flag = newLeft > 0 ? -1 : 1;
            scrollSlide = slideNumber + flag;
            if (scrollSlide < 0 || scrollSlide > ($slides.length - 1)) {
                scrollSlide = scrollSlide < 0 ? $slides.length - 1 : 0;
            }

            $slides.eq(scrollSlide).css('left', nextSlideLeft + 'px');
            $slides.eq(scrollSlide).show();
        },
            swipeLeft: function () { $('#rotating-item-wrapperBeach').cycle('next'); },
            swipeRight: function () { $('#rotating-item-wrapperBeach').cycle('prev'); }


        });



    }
    else {
        //alert('no foto');
    }


    //alert(Beach_ID + ' = ' + sites.length);
    $("div[class$='slidein-panel']").animate({ 'left': -$("div[class$='slidein-panel']").outerWidth() });
    status = 'close';

});

function getURLParameter(name) {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars[name];
}
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(document).on("pageshow", "#div_redirect", function (event) {
    $(document).ready(function () {
        alert('div_redirect');
//        alert(getUrlVars()["id"]);
        //        $("a[id^='test']").click(function () {
        //            //             alert('..this.val()');
        //            var id = $(this).attr('name');
        //            var name = $(this).attr('id');
        //            alert('..id' + id);
        //            window.location.href = "#Beach?id=" + id;
        //            // $.mobile.changePage("#Beach?id=" + id);
        //        });


    });
});
$(document).on("pageshow", "#search", function (event) {

    $(document).ready(function () {
        //alert('pageshow');
//        $("a[id^='test']").click(function () {
//            //             alert('..this.val()');
//            var id = $(this).attr('name');
//            var name = $(this).attr('id');
//            alert('..id' + id);
//            window.location.href = "#Beach?id=" + id;
//            // $.mobile.changePage("#Beach?id=" + id);
//        });


    });
});

//$('#search').on('pageshow', function (event, ui) {
//    //alert('search');
//    $(document).ready(function () {

//        $("a[id^='test']").click(function () {
//            alert('this.val()');
//            var id = $(this).attr('name');
//            var name = $(this).attr('id');
//            alert('id' + id );
//            window.location.href = "#Beach?id=" + id;
//            // $.mobile.changePage("#Beach?id=" + id);
//        });


//    });

//});


$('#likes').on('pageshow', function (event, ui) {
    //alert('search');
    $(document).ready(function () {

        $("a[id^='test']").click(function () {
            //alert('this.val()');
            var id = $(this).attr('name');
            var name = $(this).attr('id');
            // alert('id' + id + name);
            window.location.href = "#Beach?id=" + id;
            // $.mobile.changePage("#Beach?id=" + id);
        });


    });

});