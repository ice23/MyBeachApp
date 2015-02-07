

$('#Splash').live('pageshow', function (event, ui) {
    $.mobile.showPageLoadingMsg("a", "Caricamento in corso...");
    SetWeather();

    ReadXmlBeach();
    //alert('Splash live');
    window.location.href = "#main";
});

