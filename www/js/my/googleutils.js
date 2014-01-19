var directionsService = new google.maps.DirectionsService();
var distancekm = 0.0;
function calcRoute(lat, long) {
    var start = mylat + "," + mylng;
    var end = lat + "," + long;
    //alert(start + '\n' + end);
    //var distanceInput = document.getElementById("distance");

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
            //directionsDisplay.setDirections(response);
            //alert(response.routes[0].legs[0].distance.value / 1000);
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

                //alert('dist1 ' + distancekm);
            }

            showSteps(response);
        }

        if (count_tmp_beach == sites.length) {
            PopulateFirstBeachByDistance();
        }

    });
}

function PopulateFirstBeachByDistance() {
    for (var i = 0; i < sites.length; i++) {
        var info = sites[i];
        if (info[1] == lat1 && info[2] == lngt1) {
            $('#b1_descr').html(dist1 + 'km) ' + info[0]);
            $('#lnkBeachID1').attr("href", "#Beach?id=" + info[8]);
        }
        if (info[1] == lat2 && info[2] == lngt2) {
            $('#b2_descr').html(dist2 + 'km) ' + info[0]);
            $('#lnkBeachID2').attr("href", "#Beach?id=" + info[8]);
        }
        if (info[1] == lat3 && info[2] == lngt3) {
            $('#b3_descr').html(dist3 + 'km) ' + info[0]);
            $('#lnkBeachID3').attr("href", "#Beach?id=" + info[8]);
        }
        if (info[1] == lat4 && info[2] == lngt4) {
            //                         alert('piaggia1 ' + dist1 + ' coordinate ' + lat1+ ' , ' + lngt1 + '\n' +
            //                        'piaggia2 ' + dist2 + ' coordinate ' + lat2+ ' , ' + lngt2 + '\n' +
            //                        'piaggia3 ' + dist3 + ' coordinate ' + lat3+ ' , ' + lngt3 + '\n' +
            //                        'piaggia4 ' + dist4 + ' coordinate ' + lat4+ ' , ' + lngt4 + '\n' +
            //                        'piaggia5 ' + dist5 + ' coordinate ' + lat5+ ' , ' + lngt5 );
            $('#b4_descr').html(dist4 + 'km) ' + info[0]);
            $('#lnkBeachID4').attr("href", "#Beach?id=" + info[8]);
        }
        //                    if(info[1]==lat5 && info[2]==lngt5)
        //                    {
        //                         $('#b5_descr').html(dist5 + 'km) ' + info[0]);
        //                    }
    }

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