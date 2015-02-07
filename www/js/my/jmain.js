
$('#main').live('pageshow', function (event, ui) {
    if (localStorage.getItem('rfh') != null) {
        localStorage.removeItem('rfh');


    }

    if (navigator != null && navigator.notification != null) {
        navigator.notification.activityStart("caricamento", "Ricerca delle spiagge più vicine in corso...");
    }
    UpdateMyPosition();


    if (navigator != null && navigator.notification != null) {
        navigator.notification.activityStop();
    }
});

