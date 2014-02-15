function ReadXmlBeach() {
    jQuery.support.cors = true;


    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: 'http://www.icesoft.it/service1.svc' + '/GetBeach',
        data: '',
        dataType: 'jsonp',
        crossDomain: true,
        processdata: false,
        error: function (msg) {
            // debugger;
            alert('Service call failed: ' + msg.status + ' Type :' + msg.statusText);
        },
        success: function (msg) {
            //debugger;
            //alert('success : ' + msg);

            sites = [];
            var i = 0;
            jQuery.each(msg, function (rec) {

                var id = this.ID;
                var nome = this.nome;
                //alert(nome);
                var lat = this.lat;
                var lon = this.lon;
                var descrizione = this.descrizione;
                var windNO = this.windNO;
                var parking = this.parking;
                var bar = this.bar;
                var disabili = this.disabili;
                var xbambini = this.xbambini;
                var surf = this.surf;
                var rent = this.rent;
                var photo = this.foto;
                var camper = this.camper;
                //   
                var beach = [nome, lat, lon, 1, descrizione, windNO, parking, bar, id, disabili, xbambini, surf, rent, photo, camper]
                sites.push(beach);
                //alert(beach);
//                localStorage.setItem("beachs " + i, beach);
//                beach = localStorage.getItem("beachs " + i);
                //alert(beach);
                i = i + 1;
                //sites.push(beach);
            });
            //alert(sites.length);
            //            expires = new Date();
            //            expires.setTime(expires.getTime() + (1000 * 3600 * 24 * 7));
            //            set_cookie('beachs', sites, expires);
            //            localStorage.removeItem("beachs", sites);
            //            localStorage.setItem("beachs", sites);
            //            alert(sites.length);
            //            sites =localStorage.getItem("beachs");
            //            alert(sites.length);
            UpdateMyPosition();
        }
    });

}




function ReadXmlBeachById(Beach_ID) {
    jQuery.support.cors = true;


    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: 'http://www.icesoft.it/service1.svc' + '/GetBeach',
        data: '',
        dataType: 'jsonp',
        crossDomain: true,
        processdata: false,
        error: function (msg) {
            // debugger;
            alert('Service call failed: ' + msg.status + ' Type :' + msg.statusText);
        },
        success: function (msg) {
            //debugger;
            //alert('success : ' + msg);

            sites = [];
            var i = 0;
            jQuery.each(msg, function (rec) {

                var id = this.ID;
                var nome = this.nome;
                //alert(nome);
                var lat = this.lat;
                var lon = this.lon;
                var descrizione = this.descrizione;
                var windNO = this.windNO;
                var parking = this.parking;
                var bar = this.bar;
                var disabili = this.disabili;
                var xbambini = this.xbambini;
                var surf = this.surf;
                var rent = this.rent;
                var photo = this.photo;
                var camper = this.camper;
                //   
                var beach = [nome, lat, lon, 1, descrizione, windNO, parking, bar, id, disabili, xbambini, surf, rent, photo, camper]
                sites.push(beach);
                //alert(beach);
                //localStorage.setItem("beachs " + i, beach);
                //beach = localStorage.getItem("beachs " + i);
                //alert(beach);
                i = i + 1;
                //sites.push(beach);
            });


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
                    mylat = localStorage.getItem("mylat");
                    mylng=localStorage.getItem("mylng");
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
                                instr = instr + '<br/> ' + km + ')' + myRoute.steps[i].instructions;
                            }


                            $('#beach_Drive').html(instr);
                        }

                    });
                }
            }




            UpdateMyPosition();
        }
    });

}

