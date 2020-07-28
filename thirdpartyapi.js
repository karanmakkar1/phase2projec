

let map;
let infoWindow;
let maploc = document.getElementById('map');
let park = {
    lat:43.6665735,
    lng:-79.7796558
};

function initMap() {


    map = new google.maps.Map(maploc,{
        center: { lat:43.6665735, lng:-79.7796558},
    zoom:18,
    

});
infoWindow = new google.maps.InfoWindow;

// geolocation tried
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
        let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent('location found.');
        infoWindow.open(map);
        map.setCenter(pos);

    }, function(){
        handleLocationError(true, infoWindow, map.getCenter());

    });
} else{
    handleLocationError(false, infoWindow, map.getCenter());


}
}
function handleLocationError(browserHasGeolocation,infoWindow,pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? ' Error :  the geolocatiion service has failed.': 'Error : your browser doesnot support geolocation');
    infoWindow.open(map);
}