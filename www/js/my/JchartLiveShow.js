$('#chart').live('pageshow', function (event, ui) {
   
    // date start
    $.mobile.showPageLoadingMsg();
    getWindRose();

});



function getWindRose() {
    //WindDir = 'N';
    //WindSpeed = 10;
    //alert('WindDirect' + WindDir + ' Speed ' + WindSpeed);
    var tbfreq = '';
    tbfreq = tbfreq + '<table id="freq" border="0" cellspacing="0" cellpadding="0">'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#CCCCFF">'
    tbfreq = tbfreq + '<th colspan="9" class="hdr">Table of Frequencies (percent)</th>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#CCCCFF">'
    tbfreq = tbfreq + '<th class="freq">Direction</th>'
    tbfreq = tbfreq + '<th class="freq">&lt; 0.5 m/s</th>'
    tbfreq = tbfreq + '<th class="freq">0.5-2 m/s</th>'
    tbfreq = tbfreq + '<th class="freq">2-4 m/s</th>'
    tbfreq = tbfreq + '<th class="freq">4-6 m/s</th>'
    tbfreq = tbfreq + '<th class="freq">6-8 m/s</th>'
    tbfreq = tbfreq + '<th class="freq">8-10 m/s</th>'
    tbfreq = tbfreq + '<th class="freq">Total</th>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">N</td>'
    if (WindDir == 'N') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 10 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'

    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">NNE</td>'
    if (WindDir == 'NNE') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'

    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">NE</td>'
    if (WindDir == 'NE') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">ENE</td>'
    if (WindDir == 'ENE') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">E</td>'
    if (WindDir == 'E') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">ESE</td>'
    if (WindDir == 'ESE') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">SE</td>'
    if (WindDir == 'SE') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">SSE</td>'
    if (WindDir == 'SSE') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">S</td>'
    if (WindDir == 'S') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">SSW</td>'
    if (WindDir == 'SSW') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">SW</td>'
    if (WindDir == 'SW') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">WSW</td>'
    if (WindDir == 'WSW') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">W</td>'
    if (WindDir == 'W') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">WNW</td>'
    if (WindDir == 'WW') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">NW</td>'
    if (WindDir == 'NW') {
        
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'
    tbfreq = tbfreq + '<tr nowrap bgcolor="#DDDDDD">'
    tbfreq = tbfreq + '<td class="dir">NNW</td>'
    if (WindDir == 'NNW') {
        if (WindSpeed <= 0.5) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 0.5 && WindSpeed <= 3) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 3 && WindSpeed <= 6) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 6 && WindSpeed <= 8) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }
        if (WindSpeed > 8 && WindSpeed <= 30) {
            tbfreq = tbfreq + '<td class="data">' + WindSpeed + '</td>'
        }
        else {
            tbfreq = tbfreq + '<td class="data">0.00</td>'
        }

    }
    else {
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
        tbfreq = tbfreq + '<td class="data">0.00</td>'
    }
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '<td class="data">0.00</td>'
    tbfreq = tbfreq + '</tr>'
    $('#resp').html('');
    $('#resp').append(tbfreq);

    var KM_HR = Math.round(WindSpeed * 3.6);
    var nod = Math.round(WindSpeed / 0.514444);
    var Title = WindDir + ' ' + KM_HR + 'km/h (' + nod + ' nodi)'
   

    $('#chart_container').highcharts({
        data: {
            table: 'freq',
            startRow: 1,
            endRow: 17,
            endColumn: 7
        },
   

        chart: {
            renderTo: 'container',
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                    stops: [
                            [0, 'rgb(48, 48, 96)'],
                            [1, 'rgb(0, 0, 0)']
                         ]
            },
            
            plotBorderWidth: 0,
            polar: true,
            type: 'column',
            height: 350,
            plotheight: 200,
            marginBottom: 30 
            
        },

        title: {
            style: {
             color: 'white',
             font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
          },
            text: Title
        },

        subtitle: {
            text: '..'
        },

        pane: {
            size: '100%'
        },

        legend: {
            enabled: false,
            reversed: false,
            align: 'center',
            verticalAlign: 'top',
            y: 100,
            layout: 'vertical'
        },

        xAxis: {
            tickmarkPlacement: 'on'
        },

        yAxis: {
            min: 0,
            endOnTick: false,
            showLastLabel: true,
            title: {
                text: ''
            },
            labels: {
                formatter: function () {
                    return this.value + '%';
                }
            }
        },

        tooltip: {
            valueSuffix: '%',
            followPointer: true
        },

        plotOptions: {
            series: {
                stacking: 'normal',
                shadow: false,
                groupPadding: 10,
                pointPlacement: 'on'
            }
        }
    });
    $.mobile.hidePageLoadingMsg();
}