$('#Beach').live('pageshow', function (event, ui) {
    var Beach_ID = getURLParameter('id');
    //alert(Beach_ID);
    for (var i = 0; i < sites.length; i++) {
        var info = sites[i];
        var parking = info[6];
        var bar = info[7];
        var id = info[8];
        var disabili = info[9];
        var xbambini = info[10];
        var surf = info[11];
        var rent = info[12];
        var photo = info[13];
        var camper = info[14];
        //var beach=[nome, lat,lon, 1, descrizione,windNO,parking,bar,id,disabili,xbambini,surf,rent,photo]
        if (Beach_ID == id) {
            //Info
            var nome = info[0];
            var ds = info[4];
            //alert(info[0]);
            $('#beach_Name').html(nome);
            $('#beach_Ds').html(ds);


            //Img
            if (parking == '1') {
                $('#img_parcheggio').attr('src', 'images/icona-parcheggio_ok.png');
            }
            else {
                $('#img_parcheggio').attr('src', 'images/icona-parcheggio_ko.png');
            }
            if (bar == '1') {
                $('#img_bar').attr('src', 'images/icona-bar_ok.png');
            }
            else {
                $('#img_bar').attr('src', 'images/icona-bar_ko.png');
            }
            if (disabili == '1') {
                $('#img_disabili').attr('src', 'images/icona-hand_ok.png');
            }
            else {
                $('#img_disabili').attr('src', 'images/icona-hand_ko.png');
            }
            if (xbambini == '1') {
                $('#img_bambini').attr('src', 'images/icona-bambini_ok.png');
            }
            else {
                $('#img_bambini').attr('src', 'images/icona-bambini_ko.png');
            }
            if (rent == '1') {
                $('#img_noleggio').attr('src', 'images/icona-noleggio_ok.png');
            }
            else {
                $('#img_noleggio').attr('src', 'images/icona-noleggio_ko.png');
            }


            //Direzione
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
                    var instr = '';
                    for (var i = 0; i < myRoute.steps.length; i++) {
                        var km = myRoute.steps[i].distance.text;
                        instr = instr + '<br/> ' + km + ')' + myRoute.steps[i].instructions;
                    }

                    $('#beach_Drive').html(instr);
                }

            });
        }
    }


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