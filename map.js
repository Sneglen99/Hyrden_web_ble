// Initialize Leaflet map
var map = L.map('map').setView([59.665939, 10.780280], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Add user location to the map
var user = L.circle([59.665939, 10.780280], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 0.5,
    radius: 20
}).addTo(map);
    

//function that gets the location and returns it
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geo Location not supported by browser");
    }
}
//function that retrieves the position
function showPosition(position) {
    var location = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
    }
    console.log(location)

    // Set user location
    user.setLatLng([location.latitude, location.longitude]);
    user.bindPopup("Your position").openPopup();
    map.setView([location.latitude, location.longitude], 15);

}
//request for location
getLocation();