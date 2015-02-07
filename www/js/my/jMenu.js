
$(document).ready(function () {
    var mytransition = 'none';
    if (localStorage.getItem('Transition') != null) {
        mytransition = localStorage.getItem('Transition');
    }

    $('#main1').click(function () {
        changeP('#main');
    });
    $('#gmap1').click(function () {

        alreadyReadyMap = 0;
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
    $('#search1').click(function () {
        changeP('#search');
        if (navigator != null && navigator.notification != null) {
            navigator.notification.activityStart("caricamento", "Ricerca spiagge in corso...");
        }
        Search('-');
        if (navigator != null && navigator.notification != null) {
            navigator.notification.activityStop();
        }
    });

    $('#main2').click(function () {
        changeP('#main');
    });
    $('#gmap2').click(function () {
        alreadyReadyMap = 0;
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
    $('#search2').click(function () {
        changeP('#search');
        if (navigator != null && navigator.notification != null) {
            navigator.notification.activityStart("caricamento", "Ricerca spiagge in corso...");
        }
        Search('-');
        if (navigator != null && navigator.notification != null) {
            navigator.notification.activityStop();
        }
    });


    $('#main3').click(function () {
        changeP('#main');
    });
    $('#gmap3').click(function () {
        alreadyReadyMap = 0;
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
    $('#search3').click(function () {
        changeP('#search');
        if (navigator != null && navigator.notification != null) {
            navigator.notification.activityStart("caricamento", "Ricerca spiagge in corso...");
        }
        Search('-');
        if (navigator != null && navigator.notification != null) {
            navigator.notification.activityStop();
        }
    });
    $('#like1').click(function () {

        changeP('#search');
        Search('like');
    });
    $('#like2').click(function () {

        changeP('#search');
        Search('like');
    });
    $('#like3').click(function () {

        changeP('#search');
        Search('like');
    });

    function SearchgRedirect(id) {
        alert('SearcgRedirect : ' + id);
    }

    function like() {
        var sugList = $("#likesBeach");
        //$.mobile.showPageLoadingMsg("a", "Caricamento in corso...");
        if (navigator != null && navigator.notification != null) {
            navigator.notification.activityStart("caricamento", "Caricamento in corso...");
        }
        // $("#searchField").on("input", function (e) {
        var str = '';
        for (var i = 0; i < sites.length; i++) {
            var info = sites[i];
            var nome = info[0];
            var id = info[8];
            var photo = info[13];
            //alert(i + ' '  + nome);
            var photoArray = photo.split(';');
            var gallery = '';
            if (localStorage.getItem('like_beach_' + id) != null) {
                if (photo.toUpperCase().indexOf(';') != -1) {
                    gallery = ' <img style="height:50px;width:50px"  alt="" src="' + photoArray[0] + '" />'

                }
                //href = "javascript:alert('ciao');"
                str += '<li><a id="test' + id + '" name="' + id + ' " >' + gallery + ' ' + info[0] + '</a></li>';
            }
        }
        //$.mobile.hidePageLoadingMsg();
        if (navigator != null && navigator.notification != null) {
            navigator.notification.activityStop();
        }
        //alert('popolato ' + sites.length);
        sugList.html(str);
        sugList.listview("refresh");
    }

    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    function Search(mode) {



        var str = '';
        for (var i = 0; i < sites.length; i++) {
            var info = sites[i];
            var nome = info[0];
            var id = info[8];
            var photo = info[13];
            //alert(i + ' '  + nome);
            var photoArray = photo.split(';');
            var gallery = '';
            var imgurl = 'http://www.icesoft.it/SardiniaBeachXml/SPIAGGE/SpiaggiaSArenaScoada1.jpg';
            gallery = ' <img style="height:50px;width:50px"  alt="" src="http://www.icesoft.it/SardiniaBeachXml/SPIAGGE/SpiaggiaSArenaScoada1.jpg" />'
            if (photo.toUpperCase().indexOf(';') != -1) {
                gallery = ' <img style="height:50px;width:50px"  alt="" src="' + photoArray[0] + '" />'
                imgurl = photoArray[0];
            }
            //gallery = '';



            var href = '#div_redirect?id=' + id;
            //href = "javascript:alert('ciao');"
            str += '<li><a href="' + href + '" style="color:Black" id="test' + id + '" name="' + id + '" >' + gallery + ' ' + info[0] + '</a></li>';

            var keyTitle = "f" + i;
            var keyImage = "i" + i;
            var keyli = "li" + i;

           // $('#' + keyTitle).html(nome);
            $('#' + keyTitle).attr("href", "#Beach?id=" + id);
            $('#' + keyImage).attr("src", imgurl);
            $('#' + keyli).find("label").html(nome);

            if (mode == 'like') {
                if (localStorage.getItem('like_beach_' + i) != null) {
                    $('#' + keyli).show();
                    alert(imgurl);
                }
                else {
                    $('#' + keyli).hide();
                }
            }
        }
        //alert('x');
        //$.mobile.hidePageLoadingMsg();
        //alert('popolato ' + sites.length);
        //sugList.html(str);
        //sugList.listview("refresh");
    }



    function changeP(page) {
        $.mobile.changePage(page, { transition: mytransition });
    }
});

