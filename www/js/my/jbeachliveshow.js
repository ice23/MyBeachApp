//$('#Beach').live("pagebeforecreate", function (event) {
//  alert( "This page was just inserted into the dom!" );
//});

$(document).ready(function () {
    $('#img_parcheggio').click(function () {
        alert('Ampio Parcheggio');
    });
    $('#img_bar').click(function () {
        alert('Prensenza di un bar');
    });
    $('#img_bambini').click(function () {
        alert('Adatta ai bambini');
    });
    $('#img_disabili').click(function () {
        alert('Attrezzata per i disabili');
    });
    $('#img_attrezzata').click(function () {
        alert('Possibilità di noleggio sdraio e ombrelloni');
    });
    $('#img_camper').click(function () {
        alert('Adatta ai camper');
    });
    $('#img_attivsub').click(function () {
        alert('Possibilità di fare attivita subacquee');
    });
    $('#img_densita').click(function () {
        var densita = $('#hdd_densita').val();
        alert('Livello di densità ' + densita);
    });
});

$('#Beach').live('pageshow', function (event, ui) {
    var Beach_ID = getURLParameter('id');


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
        // var beach = [nome, lat, lon, 1, descrizione, windNO, parking, bar, id, disabili, xbambini, surf, rent, photo, camper, attivsub, densita]

        if (Beach_ID == id) {
            //Info
            //alert(info);
            //alert('Beach_ID ' + Beach_ID + ' - 6:' + info[6] + ' - 7:' + info[7] + ' - 8:' + info[8] + ' - 9:' + info[9] + ' - 10:' + info[10] + ' - ');
            photo = info[13];
            var nome = info[0];
            var ds = info[4];
            //alert('info1 ' + info);
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
                $('#img_densita').attr('src', 'images/densitaB.gif');
                $('#td_densita').show();
                $('#hdd_densita').val('Bassa');
            }
            if (densita == 'M') {
                $('#img_densita').attr('src', 'images/densitaM.gif');
                $('#td_densita').show();
                $('#hdd_densita').val('Medio');
            }
            if (densita == 'A') {
                $('#img_densita').attr('src', 'images/densitaB.gif');
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
                }

            });
        }
    }



    //alert(Beach_ID + ' = ' + sites.length);
    $("div[class$='slidein-panel']").animate({ 'left': -$("div[class$='slidein-panel']").outerWidth() });
    status = 'close';

    //window.location.reload();

});

$('#Beach').live("pageshow", function (event) {
    var Beach_ID = getURLParameter('id');


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
                    var instr = '<b> Distanza Totale : ' + distancekm + 'km <b/></br>';
                    for (var i = 0; i < myRoute.steps.length; i++) {
                        var km = myRoute.steps[i].distance.text;
                        instr = instr + '<br/> ' + km + ' -' + myRoute.steps[i].instructions;
                    }


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
        alert('no foto');
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

