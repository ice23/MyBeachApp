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
                //alert(beach);
                sites.push(beach);
            });

            UpdateMyPosition();
        }
    });

}
