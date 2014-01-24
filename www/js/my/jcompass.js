var surface;
var android;
var angle = 0;

function drawCanvas() {
    surface = document.getElementById("myCanvas");

    if (surface.getContext) {
        android = new Image();
        android.onload = loadingComplete;
        android.src = "../../images/compass.png";
    }
}

function loadingComplete(e) {
    var surfaceContext = surface.getContext('2d');
    surfaceContext.fillStyle = "rgb(255,255,255)";
    surfaceContext.fillRect(0, 0, surface.width, surface.height);
    surfaceContext.save();
    surfaceContext.translate(android.width * 0.5, android.height * 0.5);
    surfaceContext.rotate(angle * 0.0174532925199432957);
    surfaceContext.translate(-android.width * 0.5, -android.height * 0.5);
    surfaceContext.drawImage(android, 0, 0);
    surfaceContext.restore();
}


var watchID = null;
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    bussola();
}

function bussola() {
    alert('bussola');
    var options = { frequency: 300 };
    watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}

function onSuccess(heading) {
    alert('onSuccess bussola');
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
    angle = heading.magneticHeading;
    drawCanvas();

}

function onError(compassError) {
    alert('Compass error: ' + compassError.code);
}