
$(document).ready(function () {
    var mytransition = 'flip';
    if (localStorage.getItem('Transition') != null) {
        mytransition = localStorage.getItem('Transition');
    }

    $('#main1').click(function () {
        changeP('#main');
    });
    $('#gmap1').click(function () {
        changeP('#gmap');
    });
    $('#meteo1').click(function () {
        changeP('#meteo');
    });
    $('#chart1').click(function () {
        changeP('#chart');
    });
    $('#setting1').click(function () {
        changeP('#Setting');
    });

    $('#main2').click(function () {
        changeP('#main');
    });
    $('#gmap2').click(function () {
        changeP('#gmap');
    });
    $('#meteo2').click(function () {
        changeP('#meteo');
    });
    $('#chart2').click(function () {
        changeP('#chart');
    });
    $('#setting2').click(function () {
        changeP('#Setting');
    });


    $('#main3').click(function () {
        changeP('#main');
    });
    $('#gmap3').click(function () {
        changeP('#gmap');
    });
    $('#meteo3').click(function () {
        changeP('#meteo');
    });
    $('#chart3').click(function () {
        changeP('#chart');
    });
    $('#setting3').click(function () {
        changeP('#Setting');
    });


    function changeP(page) {
        $.mobile.changePage(page, { transition: mytransition });
    }
});

