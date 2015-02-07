var directionsService = new google.maps.DirectionsService();
var distancekm = 0.0;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function Calcdistance(lat_1, lon_1, lat_2, lon_2, beach) {
    //alert('ciao');
    //alert(lat_1 + ' - ' + lon_1 + '\n>' + lat2 + ' -' + lon2);
    var R = 6371; // km (change this constant to get miles)
    var dLat = (lat_2 - lat_1) * Math.PI / 180;
    var dLon = (lon_2 - lon_1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		    Math.cos(lat_1 * Math.PI / 180) * Math.cos(lat_2 * Math.PI / 180) *
		    Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    // if (d > 1) return Math.round(d) + "km";
    //else if (d <= 1) return Math.round(d * 1000) + "m";

    //alert(' d: ' + d + '\n dist1:' + dist1 + '\n' + beach);

    if (Math.round(d) < dist1 ) {
        dist5 = dist4;
        lat5 = lat4;
        lngt5 = lngt4;
        dist4 = dist3;
        lat4 = lat3;
        lngt4 = lngt3;
        dist3 = dist2;
        lat3 = lat2;
        lngt3 = lngt2;
        dist2 = dist1;
        lat2 = lat1;
        lngt2 = lngt1;

        dist1 = Math.round(d);
        lat1 = lat_1;
        lngt1 = lon_1;
    }
    else if (Math.round(d) < dist2) {
        dist5 = dist4;
        lat5 = lat4;
        lngt5 = lngt4;
        dist4 = dist3;
        lat4 = lat3;
        lngt4 = lngt3;
        dist3 = dist2;
        lat3 = lat2;
        lngt3 = lngt2;
        dist2 = Math.round(d);
        lat2 = lat_1;
        lngt2 = lon_1;
    }
    else if (Math.round(d) < dist3) {
        dist5 = dist4;
        lat5 = lat4;
        lngt5 = lngt4;
        dist4 = dist3;
        lat4 = lat3;
        lngt4 = lngt3;
        dist3 = Math.round(d) ;
        lat3 = lat_1;
        lngt3 = lon_1;
    }
    else if (Math.round(d) < dist4) {
        dist5 = dist4;
        lat5 = lat4;
        lngt5 = lngt4;
        dist4 = Math.round(d) ;
        lat4 = lat_1;
        lngt4 = lon_1;
    }
    else if (Math.round(d) < dist4) {
        dist5 = Math.round(d);
        lat5 = lat_1;
        lngt5 = lon_1;
    }
    //alert('lat2 ' + lat2);
    //alert('d: ' + d + ' dist1:' + dist1);
}

function calcRoute(lat, long) {
    var start = mylat + "," + mylng;
    var end = lat + "," + long;
    alert('calcRoute');
    //var distanceInput = document.getElementById("distance");

    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    //sleep(500);
    directionsService.route(request, function (response, status) {
        //alert('status:' + status);
        count_tmp_beach = count_tmp_beach + 1;
        //alert(count_tmp_beach +'/' + sites.length);
        //if(status == google.maps.DirectionsStatus.OK || status=='OK'
        if (status == google.maps.DirectionsStatus.OK) {
            //directionsDisplay.setDirections(response);
            alert(response.routes[0].legs[0].distance.value / 1000);
            distancekm = response.routes[0].legs[0].distance.value / 1000;
            var origins = request.origin.split(',');
            var destinations = request.destination.split(',');
            //alert(destinations[0] +'-'+ destinations[1] +' == > ' + distancekm + 'km');
            //9 8 10 15 7
            if (distancekm < dist1) {
                dist5 = dist4;
                lat5 = lat4;
                lngt5 = lngt4;
                dist4 = dist3;
                lat4 = lat3;
                lngt4 = lngt3;
                dist3 = dist2;
                lat3 = lat2;
                lngt3 = lngt2;
                dist2 = dist1;
                lat2 = lat1;
                lngt2 = lngt1;

                dist1 = distancekm;
                lat1 = destinations[0];
                lngt1 = destinations[1];

                //alert('lat2 ' + lat2);
            }
           

            //showSteps(response);
        }
        else {
            alert('error dist :' + status);
        }

        if (count_tmp_beach == sites.length) {
            PopulateFirstBeachByDistance();
        }

    });
}
function CleartBeachByDistance() {

    $('#b1_descr').html('Ricerca in corso');
    $('#lnkBeachID4').attr("href", "#");
    $('#b2_descr').html('Ricerca in corso');
    $('#lnkBeachID4').attr("href", "#");
    $('#b3_descr').html('Ricerca in corso');
    $('#lnkBeachID4').attr("href", "#");
    $('#b4_descr').html('Ricerca in corso');
    $('#lnkBeachID4').attr("href", "#");
    $('#lnkBeachID1').slideUp(300).delay(300).fadeIn(400);
    $('#lnkBeachID2').slideUp(300).delay(400).fadeIn(400);
    $('#lnkBeachID3').slideUp(300).delay(500).fadeIn(400);
    $('#lnkBeachID4').slideUp(300).delay(600).fadeIn(400);

}

function PopulateFirstBeachByDistance5() {
    alertdebug('PopulateFirstBeachByDistance5 ' + sites5.length);
    for (var i = 0; i < sites5.length; i++) {
        //sleep(3);
       
        var info = sites5[i];
        if (i==0) {
            lat1 = info[1];
            lngt1 = info[2];
            dist1=info[17];
            $('#b1_descr').html(dist1 + 'km - ' + info[0]);
            $('#lnkBeachID1').attr("href", "#Beach?id=" + info[8]);
            //alert('pop');
        }
        if (i == 1) {
            lat2 = info[1];
            lngt2 = info[2];
            dist2=info[17];
            $('#b2_descr').html(dist2 + 'km - ' + info[0]);
            $('#lnkBeachID2').attr("href", "#Beach?id=" + info[8]);
        }
        if (i == 2) {
            lat3 = info[1];
            lngt3 = info[2];
            dist3=info[17];
            $('#b3_descr').html(dist3 + 'km - ' + info[0]);
            $('#lnkBeachID3').attr("href", "#Beach?id=" + info[8]);
        }
        if (i==3) {
            lat4 = info[1];
            lngt4 = info[2];
            dist4=info[17];
            $('#b4_descr').html(dist4 + 'km - ' + info[0]);
            $('#lnkBeachID4').attr("href", "#Beach?id=" + info[8]);
        }
        if (i == 4) {
            lat5 = info[1];
            lngt5 = info[2];
            dist5=info[17];
            $('#b5_descr').html(dist5 + 'km - ' + info[0]);
            $('#lnkBeachID5').attr("href", "#Beach?id=" + info[8]);
        }



    }


}

function PopulateFirstBeachByDistance() {
//    alertdebug('PopulateFirstBeachByDistance');
    for (var i = 0; i < sites.length; i++) {
        //sleep(3);
        var info = sites[i];
        if (info[1] == lat1 && info[2] == lngt1) {
 
           $('#b1_descr').html(dist1 + 'km - ' + info[0]);
           $('#lnkBeachID1').attr("href", "#Beach?id=" + info[8]);
           //alert('pop');
        }
        if (info[1] == lat2 && info[2] == lngt2) {
            $('#b2_descr').html(dist2 + 'km - ' + info[0]);
            $('#lnkBeachID2').attr("href", "#Beach?id=" + info[8]);
        }
        if (info[1] == lat3 && info[2] == lngt3) {
            $('#b3_descr').html(dist3 + 'km - ' + info[0]);
            $('#lnkBeachID3').attr("href", "#Beach?id=" + info[8]);
        }
        if (info[1] == lat4 && info[2] == lngt4) {

            $('#b4_descr').html(dist4 + 'km - ' + info[0]);
            $('#lnkBeachID4').attr("href", "#Beach?id=" + info[8]);
        }
        //                    if(info[1]==lat5 && info[2]==lngt5)
        //                    {
        //                         $('#b5_descr').html(dist5 + 'km) ' + info[0]);
        //                    }


    }
    
   /* alert('piaggia1 ' + dist1 + ' coordinate ' + lat1 + ' , ' + lngt1 + '\n' +
                                    'piaggia2 ' + dist2 + ' coordinate ' + lat2 + ' , ' + lngt2 + '\n' +
                                    'piaggia3 ' + dist3 + ' coordinate ' + lat3 + ' , ' + lngt3 + '\n' +
                                    'piaggia4 ' + dist4 + ' coordinate ' + lat4 + ' , ' + lngt4 + '\n' +
                                    'piaggia5 ' + dist5 + ' coordinate ' + lat5 + ' , ' + lngt5);*/

}
function showSteps(directionResult) {
    // For each step, place a marker, and add the text to the marker's
    // info window. Also attach the marker to an array so we
    // can keep track of it and remove it when calculating new
    // routes.
    var myRoute = directionResult.routes[0].legs[0];
    var instr = '';
    for (var i = 0; i < myRoute.steps.length; i++) {
        instr = instr + '\n' + myRoute.steps[i].instructions;

        //                var marker = new google.maps.Marker({
        //                  position: myRoute.steps[i].start_location,
        //                  map: map
        //                });
        //                attachInstructionText(marker, myRoute.steps[i].instructions);
        //                markerArray[i] = marker;
    }

    //alert(instr);
}