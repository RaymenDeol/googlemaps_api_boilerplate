var options = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 0
  };

function createMap(lat, long) {
    var crds = {lat: lat, lng: long};
    var map = new google.maps.Map(document.getElementById('map'), {center: crds, zoom:7});
    var marker = new google.maps.Marker({position: crds, map:map});
}

function success(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude
    createMap(lat, long);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}


function initMap() {    
    navigator.geolocation.getCurrentPosition(success, error, options);        
}