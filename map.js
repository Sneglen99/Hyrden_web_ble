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
    
user.bindPopup("Your position").openPopup();


// Retrieves the position of the user
function showPosition(position) {
    var location = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
    }
    console.log(location)
    
    // Update user location
    user.setLatLng([location.latitude, location.longitude]);
    map.setView([location.latitude, location.longitude], 15);
    
}

// Get user location
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
} else {
    console.log("Geo Location not supported by browser");
}