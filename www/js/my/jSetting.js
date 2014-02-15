
$(document).ready(function () {
    if (localStorage.getItem('MyPosition') != null) {
        var MyPosition = localStorage.getItem('MyPosition');
        //alert(MyPosition);
        $('#MyPosition').val(MyPosition);
    }

    if (localStorage.getItem('Position') != null) {
        var Position = localStorage.getItem('Position');
        if (Position == 'AUTO') {
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
        geocoder.geocode({ 'address': address }, function (results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
                // do something with the geocoded result
                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();
                localStorage.setItem('lat', lat);
                localStorage.setItem('lng', lng);
                localStorage.setItem('MyPosition', address);
                alert("Coordinate Trovate: " + lat + " - " + lng);
            }
            else {
                alert('Position non trovata su Google Map');
            }
        });

    });



    /*Transition*/
    $('#radio-mini-flip').change(function () {
        if ($("#radio-mini-flip").attr("checked")) {
            localStorage.setItem('Transition', 'flip');
        }
    });

    $('#radio-mini-pop').change(function () {
        if ($("#radio-mini-pop").attr("checked")) {
            localStorage.setItem('Transition', 'pop');
        }
    });

    $('#radio-mini-turn').change(function () {
        if ($("#radio-mini-turn").attr("checked")) {
            localStorage.setItem('Transition', 'turn');
        }
    });

    $('#radio-mini-flow').change(function () {
        if ($("#radio-mini-flow").attr("checked")) {
            localStorage.setItem('Transition', 'flow');
        }
    });

    $('#radio-mini-none').change(function () {
        if ($("#radio-mini-none").attr("checked")) {
            localStorage.setItem('Transition', 'none');
        }
    });


    if (localStorage.getItem('Transition') != null) {

        var Transition = localStorage.getItem('Transition');
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

