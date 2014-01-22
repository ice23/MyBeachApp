


$('#gmap').live('pageshow', function (event, ui) {

    $("div[class$='slidein-panel']").animate({ 'left': -$("div[class$='slidein-panel']").outerWidth() });
    status = 'close';

    map = null;
    isDeviceOnline = 'YES';
    if (isDeviceOnline == 'YES') {
        if (navigator != null && navigator.notification != null) {
            navigator.notification.activityStart("caricamento", "Caricamento mappa in corso...");
        }
        //alert('centerMap..');
        if (mylat == 0) {
            mylat = 40.931153;
        }
        if (mylng == 0) {
            mylng = 9.483948;
        }
        var centerMap = new google.maps.LatLng(mylat, mylng);
        //alert('centerMap: ' +centerMap);
        var myOptions = {
            zoom: 11,
            center: centerMap,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = null;
        map = new google.maps.Map(document.getElementById("mapmap"), myOptions);

        //alert('map: ' +map);

        setMarkers(map, sites);
        infowindow = new google.maps.InfoWindow({
            content: "loading..."
        });

        //                var bikeLayer = new google.maps.BicyclingLayer();
        //                bikeLayer.setMap(map);


        if (navigator != null && navigator.notification != null) {
            navigator.notification.activityStop();
        }
    }
    else {
        alert('no Connection');
    }

});

function setMarkers(map, markers) {
    //alert('markers.length:' + markers.length);
    google.maps.event.clearListeners(map, 'click');
    var siteLatLng = new google.maps.LatLng(mylat, mylng);
    markerMyPosition = new google.maps.Marker({
        position: siteLatLng,
        map: map,
        title: '',
        zIndex: 1,
        html: ''
    });
    google.maps.event.addListener(markerMyPosition, "click", function () {
        infowindow.setContent('My Position');
        infowindow.open(map, this);
    });

    for (var i = 0; i < markers.length; i++) {


        var sites = markers[i];
        //calcRoute(sites[1], sites[2]);
        //var beach=[nome, lat,lon, 1, descrizione,windNO,parking,bar,id,disabili,xbambini,surf,rent,photo,camper]
        var WindDirNo = sites[5];
        var parking = sites[6];
        var bar = sites[7];
        var child = sites[10];
        var hand = sites[9];
        var rent = sites[12];
        var camper = sites[14];

        var valid = 0;

        var Distance = '';
        if (sites[1] == lat1 && sites[2] == lngt1) {
            Distance = dist1 + 'km';
        }
        if (sites[1] == lat2 && sites[2] == lngt2) {
            Distance = dist2 + 'km';
        }
        if (sites[1] == lat3 && sites[2] == lngt3) {
            Distance = dist3 + 'km';
        }
        if (sites[1] == lat4 && sites[2] == lngt4) {
            Distance = dist4 + 'km';
        }
        if (sites[1] == lat5 && sites[2] == lngt5) {
            Distance = dist5 + 'km';
        }
        
        if (beachfinderby == 'near') {
            //alert('wind');
            if (sites[1] == lat1 && sites[2] == lngt1) {
                valid = 1;
            }
            if (sites[1] == lat2 && sites[2] == lngt2) {
                valid = 2;
            }
            if (sites[1] == lat3 && sites[2] == lngt3) {
                valid = 3;
            }
            if (sites[1] == lat4 && sites[2] == lngt4) {
                valid = 4;
            }
            if (sites[1] == lat5 && sites[2] == lngt5) {
                valid = 5;
            }
        }
        if (beachfinderby == 'wind') {
            //alert('wind');
            if (WindDir == WindDirNo) {
                valid = 1;
            }
        }
        if (beachfinderby == 'parking') {
            if (parking == '1') {
                valid = 1;
            }
        }
        if (beachfinderby == 'bar') {
            if (bar == '1') {
                valid = 1;
            }
        }
        if (beachfinderby == 'child') {
            if (child == '1') {
                valid = 1;
            }
        }
        if (beachfinderby == 'hand') {
            if (hand == '1') {
                valid = 1;
            }
        }
        if (beachfinderby == 'rent') {
            if (rent == '1') {
                valid = 1;
            }
        }
        if (beachfinderby == 'camper') {
            if (camper == '1') {
                valid = 1;
            }
        }

       
        var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
        //alert(sites[8]);
        if (valid == 0) {
            var marker = new google.maps.Marker({
                position: siteLatLng,
                map: map,
                title: sites[0] + '|' + sites[1] + '|' + sites[2] + '|' + Distance,
                zIndex: sites[3],
                url: '#Beach?id=' + sites[8],
                html: '<b>' + sites[0] + '</b> <br/>' + Distance + ' Clicca una seconda volta per avere maggiori informazioni' 
                    , icon: imgWindKO,
                shape: shape
            });


            google.maps.event.addListener(marker, "click", function () {
                var lat2click = this.title.split('|')[1];
                var lng2click = this.title.split('|')[2];
                if (lat1click == lat2click && lng1click == lng2click) {
                    window.location.href = this.url;
                }
                lat1click = lat2click;
                lng1click = lng2click;
                infowindow.setContent(this.html);
                infowindow.open(map, this);
                /*
                if (flipView == 'ds') {
                    window.location.href = this.url;
                }
                else {
                    infowindow.setContent(this.html);
                    infowindow.open(map, this);
                }*/
            });
        }
        else {
            if (beachfinderby == 'near') {
                if (valid == 1) {
                    imgWindOK = {
                        url: 'images/1b.png'
                    };
                }
                if (valid == 2) {
                    imgWindOK = {
                        url: 'images/2b.png'
                    };
                }
                if (valid == 3) {
                    imgWindOK = {
                        url: 'images/3b.png'
                    };
                }
                if (valid == 4) {
                    imgWindOK = {
                        url: 'images/4b.png'
                    };
                }
                if (valid == 5) {
                    imgWindOK = {
                        url: 'images/5b.png'
                    };
                }
            }
            else {
                imgWindOK = {
                    url: 'images/face-smile-big.png'
                };
            }
            
                var marker = new google.maps.Marker({
                    position: siteLatLng,
                    map: map,
                    title: sites[0] + '|' + Distance,
                    zIndex: sites[3],
                    url: '#Beach?id=' + sites[8],
                    html: '<b>' + sites[0] + '</b> <br/>' + Distance + ' Clicca una seconda volta per avere maggiori informazioni'
                            , icon: imgWindOK,
                    shape: shape
                });
            

            //alert(marker.url+'---');
            google.maps.event.addListener(marker, "click", function () {
                var lat2click = this.title.split('|')[1];
                var lng2click = this.title.split('|')[2];
                if (lat1click == lat2click && lng1click == lng2click) {
                    window.location.href = this.url;
                }
                lat1click = lat2click;
                lng1click = lng2click;
                infowindow.setContent(this.html);
                infowindow.open(map, this);
                /*if (flipView == 'ds') {
                    window.location.href = this.url;
                }
                else {
                    infowindow.setContent(this.html);
                    infowindow.open(map, this);
                }*/
            });
        }
        var contentString = "Some content";




    }
}