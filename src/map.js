// Initialize Leaflet map
var map = L.map('map').setView([59.665939, 10.780280], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Create a custom icons
const sheep_icon = L.icon({
    iconUrl: 'logo_no_background.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});

// const farmer_icon = L.icon({
//     iconUrl: 'farmer_icon.png',
//     iconSize: [30, 30],
//     iconAnchor: [15, 15],
//     popupAnchor: [0, -15]
// });


// Add user location to the map
var user_marker = L.marker([59.665939, 10.780280]).addTo(map);


// Update user position
function update_user_pos(position) {
    var location = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
    }
    
    // Update user location
    user_marker.setLatLng([location.latitude, location.longitude]);
    
}

// Set the initial position of the user and change the view of the map
function get_user_initial_pos(position) {
    var location = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
    }
    
    // Set user position
    user_marker.setLatLng([location.latitude, location.longitude]);
    map.setView([location.latitude, location.longitude], 15);
    user_marker.bindPopup("Your position").openPopup();
}


// Get user location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(get_user_initial_pos);
    navigator.geolocation.watchPosition(update_user_pos);
} else {
    console.log("Geo Location not supported by browser");
}