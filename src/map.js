// Initialize Leaflet map
var map = L.map('map').setView([59.665939, 10.780280], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Create a custom icons
const sheep_icon = L.icon({
    iconUrl: '/images/sheep_icon_scaled.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});

const farmer_icon = L.icon({
    iconUrl: '/images/farmer_icon_scaled.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});

// Add sheep location to the map
var sheep_marker = L.marker([59.665939, 10.780280], { icon: sheep_icon }).addTo(map);

// Add user location to the map
var user_marker = L.marker([59.665939, 10.780280], { icon: farmer_icon }).addTo(map);


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
    map.setView([location.latitude, location.longitude], 16);
    user_marker.bindPopup("Your position").openPopup();
}


// Get user location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(get_user_initial_pos);
    navigator.geolocation.watchPosition(update_user_pos);
} else {
    console.log("Geo Location not supported by browser");
}