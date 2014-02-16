
$(document).ready(function () {
    if (localStorage.getItem('MyPosition') != null) {
        var MyPosition = localStorage.getItem('MyPosition');
        //alert(MyPosition);
        $('#MyPosition').val(MyPosition);
        $('#MyPositionStorage').html('Attualmente la posizione è settata su <br/> <i>' + MyPosition + '</i>'); 
    }

    if (localStorage.getItem('Position') != null) {
        var Position = localStorage.getItem('Position');
        if (Position == 'AUTO') {
            $('#MyPositionStorage').html('Attualmente la posizione viene letta <br/> in automatico'); 
            $("#radio-mini-1").attr("checked", true);
            $("#radio-mini-2").attr("checked", false);
        }
        else {
            $("#radio-mini-1").attr("checked", false);
            $("#radio-mini-2").attr("checked", true);
        }
    }



    /*Location*/
    $('#radio-mini-1').change(function () {
        if ($("#radio-mini-1").attr("checked")) {
            localStorage.setItem('Position', 'AUTO');
            $('#MyPosition').val('');
        }
    });
    $('#radio-mini-2').change(function () {
        if ($("#radio-mini-2").attr("checked")) {
            localStorage.setItem('Position', 'NOAUTO');
            if (localStorage.getItem('MyPosition') != null) {
                var MyPosition = localStorage.getItem('MyPosition');
                $('#MyPosition').val(MyPosition);
            }
        }
    });

    $('#SearchPosition').click(function () {
        //alert('SearchPosition');
        var geocoder = new google.maps.Geocoder();
        var address = $('#MyPosition').val();
        address = address + ' ,Italia';
        geocoder.geocode({ 'address': address }, function (results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
                // do something with the geocoded result
                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();
                localStorage.setItem('lat', lat);
                localStorage.setItem('lng', lng);
                localStorage.setItem('MyPosition', address);
                


                var latlng = new google.maps.LatLng(lat, lng);
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {

                        if (results[1]) {
                            alert("Luogo trovato: " + results[1].formatted_address);
                            $('#MyPositionStorage').html('Attualmente la posizione è settata su <br/> <i>' + address + '</i>'); 
                        }
                    } else {
                        alert("-");
                    }
                });


            }
            else {
                alert('Posizione non trovata su Google Map');
            }
        });

    });



    /*Transition*/
    $('#radio-mini-flip').change(function () {
        if ($("#radio-mini-flip").attr("checked")) {
            localStorage.setItem('Transition', 'flip');
            $('#MyTransitionStorage').html('Attualmente l effetto di transizione è settato su <br/> <i>flip</i>'); 
        }
    });

    $('#radio-mini-pop').change(function () {
        if ($("#radio-mini-pop").attr("checked")) {
            localStorage.setItem('Transition', 'pop');
            $('#MyTransitionStorage').html('Attualmente l effetto di transizione è settato su <br/> <i>pop</i>'); 
        }
    });

    $('#radio-mini-turn').change(function () {
        if ($("#radio-mini-turn").attr("checked")) {
            localStorage.setItem('Transition', 'turn');
            $('#MyTransitionStorage').html('Attualmente l effetto di transizione è settato su <br/> <i>turn</i>'); 
        }
    });

    $('#radio-mini-flow').change(function () {
        if ($("#radio-mini-flow").attr("checked")) {
            localStorage.setItem('Transition', 'flow');
            $('#MyTransitionStorage').html('Attualmente l effetto di transizione è settato su <br/> <i>flow</i>'); 
        }
    });

    $('#radio-mini-none').change(function () {
        if ($("#radio-mini-none").attr("checked")) {
            localStorage.setItem('Transition', 'none');
            $('#MyTransitionStorage').html('Attualmente l effetto di transizione è settato su <br/> <i>nessuno</i>'); 
        }
    });


    if (localStorage.getItem('Transition') != null) {

        var Transition = localStorage.getItem('Transition');

        $('#MyTransitionStorage').html('Attualmente l effetto di transizione è settato su <br/> <i>' + Transition + '</i>'); 
        if (Transition == 'flip') {
            $("#radio-mini-flip").attr("checked", true);
            $("#radio-mini-pop").attr("checked", false);
            $("#radio-mini-turn").attr("checked", false);
            $("#radio-mini-flow").attr("checked", false);
            $("#radio-mini-none").attr("checked", false);
        }
        if (Transition == 'pop') {
            $("#radio-mini-flip").attr("checked", false);
            $("#radio-mini-pop").attr("checked", true);
            $("#radio-mini-turn").attr("checked", false);
            $("#radio-mini-flow").attr("checked", false);
            $("#radio-mini-none").attr("checked", false);
        }
        if (Transition == 'turn') {
            $("#radio-mini-flip").attr("checked", false);
            $("#radio-mini-pop").attr("checked", false);
            $("#radio-mini-turn").attr("checked", true);
            $("#radio-mini-flow").attr("checked", false);
            $("#radio-mini-none").attr("checked", false);
        }
        if (Transition == 'flow') {
            $("#radio-mini-flip").attr("checked", false);
            $("#radio-mini-pop").attr("checked", false);
            $("#radio-mini-turn").attr("checked", false);
            $("#radio-mini-flow").attr("checked", true);
            $("#radio-mini-none").attr("checked", false);
        }
        //        if (Transition == 'none') {
        //            $("#radio-mini-flip").attr("checked", false);
        //            $("#radio-mini-pop").attr("checked", false);
        //            $("#radio-mini-turn").attr("checked", false);
        //            $("#radio-mini-flow").attr("checked", false);
        //            $("#radio-mini-none").attr("checked", true);
        //        }
    }

});

