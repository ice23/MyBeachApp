/**
 * menu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
(function () {

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    // from http://stackoverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function (a) { if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    var mytransition = 'flip';
    if (localStorage.getItem('Transition') != null) {
        mytransition = localStorage.getItem('Transition');
        //alert(mytransition);
    }

    var docElem = window.document.documentElement,
    // support transitions
		support = Modernizr.csstransitions,
    // transition end event name
		transEndEventNames = {
		    'WebkitTransition': 'webkitTransitionEnd',
		    'MozTransition': 'transitionend',
		    'OTransition': 'oTransitionEnd',
		    'msTransition': 'MSTransitionEnd',
		    'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
		docscroll = 0,
    // click event (if mobile use touchstart)
		clickevent = mobilecheck() ? 'touchstart' : 'click';

    function init() {
        var showMenu = document.getElementById('showMenu'),
			perspectiveWrapper = document.getElementById('perspective'),
			container = perspectiveWrapper.querySelector('.container'),
			contentWrapper = container.querySelector('.wrapper');


        showMenu.addEventListener(clickevent, function (ev) {
            //alert('showMenu');
            ev.stopPropagation();
            ev.preventDefault();
            docscroll = scrollY();
            // change top of contentWrapper
            contentWrapper.style.top = docscroll * -1 + 'px';
            // mac chrome issue:
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            // add modalview class
            classie.add(perspectiveWrapper, 'modalview');
            // animate..
            setTimeout(function () { classie.add(perspectiveWrapper, 'animate'); }, 25);
        });




        container.addEventListener(clickevent, function (ev) {
            if (classie.has(perspectiveWrapper, 'animate')) {
                //alert('close1');
                var onEndTransFn = function (ev) {
                    if (support && (ev.target.className !== 'container' || ev.propertyName.indexOf('transform') == -1)) return;
                    this.removeEventListener(transEndEventName, onEndTransFn);
                    classie.remove(perspectiveWrapper, 'modalview');
                    // mac chrome issue:
                    document.body.scrollTop = document.documentElement.scrollTop = docscroll;
                    // change top of contentWrapper
                    contentWrapper.style.top = '0px';
                };
                if (support) {
                    perspectiveWrapper.addEventListener(transEndEventName, onEndTransFn);
                }
                else {
                    onEndTransFn.call();
                }
                classie.remove(perspectiveWrapper, 'animate');
            }
        });




        var main1 = document.getElementById('main1');
        var gmap1 = document.getElementById('gmap1');
        var meteo1 = document.getElementById('meteo1');
        var chart1 = document.getElementById('chart1');
        var setting1 = document.getElementById('setting1');

        main1.addEventListener(clickevent, function (ev) {
            close1(ev, '#main');
        });
        gmap1.addEventListener(clickevent, function (ev) {
            close1(ev, '#gmap');
        });
        meteo1.addEventListener(clickevent, function (ev) {
            close1(ev, '#meteo');
        });
        chart1.addEventListener(clickevent, function (ev) {
            close1(ev, '#chart');
        });
        setting1.addEventListener(clickevent, function (ev) {
            close1(ev, '#Setting');
        });
        function close1(ev, page) {
            if (classie.has(perspectiveWrapper, 'animate')) {
                //alert('close1');
                var onEndTransFn = function (ev) {
                    if (support && (ev.target.className !== 'container' || ev.propertyName.indexOf('transform') == -1)) return;
                    this.removeEventListener(transEndEventName, onEndTransFn);
                    classie.remove(perspectiveWrapper, 'modalview');
                    // mac chrome issue:
                    document.body.scrollTop = document.documentElement.scrollTop = docscroll;
                    // change top of contentWrapper
                    contentWrapper.style.top = '0px';
                    //alert(page);
                    //window.location = page;
                    $.mobile.changePage(page, { transition: mytransition });
                };
                if (support) {
                    perspectiveWrapper.addEventListener(transEndEventName, onEndTransFn);
                    //alert('close3');
                }
                else {
                    onEndTransFn.call();
                    //alert('close4');
                }
                classie.remove(perspectiveWrapper, 'animate');
                //alert('close5');
            }
        }


        var showMenugmap = document.getElementById('showMenugmap'),
			perspectiveWrappergmap = document.getElementById('perspectivegmap'),
			containergmap = perspectiveWrappergmap.querySelector('.containergmap');

        showMenugmap.addEventListener(clickevent, function (ev) {
            //alert('showMenugmap');
            ev.stopPropagation();
            ev.preventDefault();
            docscroll = scrollY();
            // change top of contentWrapper
            contentWrapper.style.top = docscroll * -1 + 'px';
            // mac chrome issue:
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            // add modalview class
            classie.add(perspectiveWrappergmap, 'modalview');
            // animate..
            setTimeout(function () { classie.add(perspectiveWrappergmap, 'animate'); }, 25);
        });


        var main2 = document.getElementById('main2');
        var gmap2 = document.getElementById('gmap2');
        var meteo2 = document.getElementById('meteo2');
        var chart2 = document.getElementById('chart2');
        var setting2 = document.getElementById('setting2');

        main2.addEventListener(clickevent, function (ev) {
            close2(ev, '#main');
        });
        gmap2.addEventListener(clickevent, function (ev) {
            close2(ev, '#gmap');
        });
        meteo2.addEventListener(clickevent, function (ev) {
            close2(ev, '#meteo');
        });
        chart2.addEventListener(clickevent, function (ev) {
            close2(ev, '#chart');
        });
        setting2.addEventListener(clickevent, function (ev) {
            close2(ev, '#Setting');
        });
        containergmap.addEventListener(clickevent, function (ev) {
            close2(ev, '#gmap');
        });
        function close2(ev, page) {

            if (classie.has(perspectiveWrappergmap, 'animate')) {

                var onEndTransFn = function (ev) {
                    //alert('closegmap3');
                    if (support && (ev.target.className !== 'containergmap' || ev.propertyName.indexOf('transform') == -1)) return;
                    this.removeEventListener(transEndEventName, onEndTransFn);
                    classie.remove(perspectiveWrappergmap, 'modalview');
                    // mac chrome issue:
                    document.body.scrollTop = document.documentElement.scrollTop = docscroll;
                    // change top of contentWrapper
                    contentWrapper.style.top = '0px';
                    //alert(page);
                    //window.location = page;
                    $.mobile.changePage(page, { transition: mytransition });
                };
                if (support) {
                    // alert('closegmap');
                    perspectiveWrappergmap.addEventListener(transEndEventName, onEndTransFn);
                }
                else {
                    // alert('closegmap2');
                    onEndTransFn.call();
                }
                classie.remove(perspectiveWrappergmap, 'animate');
            }
        }




        var showMenumeteo = document.getElementById('showMenumeteo'),
			perspectiveWrappermeteo = document.getElementById('perspectivemeteo'),
			containermeteo = perspectiveWrappermeteo.querySelector('.containermeteo');

        showMenumeteo.addEventListener(clickevent, function (ev) {
            //alert('showMenugmap');
            ev.stopPropagation();
            ev.preventDefault();
            docscroll = scrollY();
            // change top of contentWrapper
            contentWrapper.style.top = docscroll * -1 + 'px';
            // mac chrome issue:
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            // add modalview class
            classie.add(perspectiveWrappermeteo, 'modalview');
            // animate..
            setTimeout(function () { classie.add(perspectiveWrappermeteo, 'animate'); }, 25);
        });


        var main3 = document.getElementById('main3');
        var gmap3 = document.getElementById('gmap3');
        var meteo3 = document.getElementById('meteo3');
        var chart3 = document.getElementById('chart3');
        var setting3 = document.getElementById('setting3');

        main3.addEventListener(clickevent, function (ev) {
            close2(ev, '#main');
        });
        gmap3.addEventListener(clickevent, function (ev) {
            close3(ev, '#gmap');
        });
        meteo3.addEventListener(clickevent, function (ev) {
            close3(ev, '#meteo');
        });
        chart3.addEventListener(clickevent, function (ev) {
            close3(ev, '#chart');
        });
        setting3.addEventListener(clickevent, function (ev) {
            close3(ev, '#Setting');
        });

        containergmeteo.addEventListener(clickevent, function (ev) {
            close3(ev, '#gmap');
        });
        function close3(ev, page) {

            if (classie.has(perspectiveWrappermeteo, 'animate')) {

                var onEndTransFn = function (ev) {
                    //alert('closegmap3');
                    if (support && (ev.target.className !== 'containermeteo' || ev.propertyName.indexOf('transform') == -1)) return;
                    this.removeEventListener(transEndEventName, onEndTransFn);
                    classie.remove(perspectiveWrappermeteo, 'modalview');
                    // mac chrome issue:
                    document.body.scrollTop = document.documentElement.scrollTop = docscroll;
                    // change top of contentWrapper
                    contentWrapper.style.top = '0px';
                    //alert(page);
                    // window.location = page;
                    $.mobile.changePage(page, { transition: mytransition });
                };
                if (support) {
                    // alert('closegmap');
                    perspectiveWrappermeteo.addEventListener(transEndEventName, onEndTransFn);
                }
                else {
                    // alert('closegmap2');
                    onEndTransFn.call();
                }
                classie.remove(perspectiveWrappermeteo, 'animate');
            }
        }


        perspectiveWrapper.addEventListener(clickevent, function (ev) { return false; });
        perspectiveWrappergmap.addEventListener(clickevent, function (ev) { return false; });
        perspectiveWrappermeteo.addEventListener(clickevent, function (ev) { return false; });
    }

    init();

})();