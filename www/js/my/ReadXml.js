function ReadXml5Beach(mylat,mylong) {
    jQuery.support.cors = true;
    /*http://localhost:52136/Service1.svc/getbeach*/
    /*http://localhost:1844/Service1.svc/beach */
    /*https://igweb.meridiana.it/wcfRestIGWEB/IBookService.svc/Getcompany/IGPAD*/
    var urltmp = 'http://www.icesoft.it/service1.svc' + '/BeachNear/' + mylat + "/" + mylong
    alertdebug('urltmp:' + urltmp);
    //alert('ReadXml5Beachì');
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'text/plain'
        },
        dataType: "jsonp",
        async: false,
        cache: false,
        crossDomain: true,
        url: urltmp,
        jsonpCallback: "localJsonpCallback",
        success: function (msg) {
            // server response
            sites5 = [];
            var i = 0;
            jQuery.each(msg, function (rec) {

                var id = this.ID;
                var nome = this.nome;
                var lat = this.lat;
                var lon = this.lon;
                var descrizione = this.descrizione;
                var windNO = this.windNO;
                var parking = this.parcheggio;
                var bar = this.bar;
                var disabili = this.disabili;
                var xbambini = this.xbambini;
                var surf = this.surf;
                var rent = this.rent;
                var photo = this.foto;
                var camper = this.camper;
                var attivsub = this.attivsub;
                var densita = this.densita;
                var Info1 = this.Info1;
                var Info2= this.Info2;
                var Info3 = this.Info3;
                var Info4 = this.Info4;
                //   
                var beach = [nome, lat, lon, 1, descrizione, windNO, parking, bar, id, disabili, xbambini, surf, rent, photo, camper, attivsub, densita, Info1, Info2, Info3, Info4]
                sites5.push(beach);

                i = i + 1;
                //sites.push(beach);
            });
            //alert('sites5 populated');
            UpdateMyPosition();
        },
        error: function (msg) {
            // debugger;
            //alert('Service call failed: ' + msg.status + ' Type :' + msg.statusText);
        }
    });

  

}

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
//            alert('success : ' + msg);

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
                var parking = this.parcheggio;
                var bar = this.bar;
                var disabili = this.disabili;
                var xbambini = this.xbambini;
                var surf = this.surf;
                var rent = this.rent;
                var photo = this.foto;
                var camper = this.camper;
                var attivsub = this.attivsub;
                var densita = this.densita;
                //   
                var beach = [nome, lat, lon, 1, descrizione, windNO, parking, bar, id, disabili, xbambini, surf, rent, photo, camper, attivsub, densita]
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

    alert('ReadXmlBeachById');
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: 'http://www.icesoft.it/service1.svc' + '/GetBeachByID/' + Beach_ID,
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
                var parking = this.parcheggio;
                var bar = this.bar;
                var disabili = this.disabili;
                var xbambini = this.xbambini;
                var surf = this.surf;
                var rent = this.rent;
                var photo = this.photo;
                var camper = this.camper;
                var attivsub = this.attivsub;
                var densita = this.densita;
                //   


                var ds = descrizione;
                //alert('info3 ' + info[0]);
                $('#beach_Name').html(nome);
                $('#beach_Ds').html(ds);


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
                }
                if (densita == 'M') {
                    $('#img_densita').attr('src', 'images/icone/densita.png');
                    $('#td_densita').show();
                }
                if (densita == 'A') {
                    $('#img_densita').attr('src', 'images/icone/densita.png');
                    $('#td_densita').show();
                }


                //Direzione
                mylat = localStorage.getItem("mylat");
                mylng = localStorage.getItem("mylng");
                var start = mylat + "," + mylng;
                var end = lat + "," + lon;
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

                //                var beach = [nome, lat, lon, 1, descrizione, windNO, parking, bar, id, disabili, xbambini, surf, rent, photo, camper, attivsub, densita]
                //                sites.push(beach);
                //                //alert(beach);
                //                //localStorage.setItem("beachs " + i, beach);
                //                //beach = localStorage.getItem("beachs " + i);
                //                //alert(beach);
                i = i + 1;
                //sites.push(beach);
            });





            UpdateMyPosition();
        }
    });

}

