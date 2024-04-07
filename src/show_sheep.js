// Identify the element you want to observe (replace 'your-element-id' with the actual ID or select it using other methods)
const elementToObserve = document.getElementById('valueContainer');

// Create a new instance of 'MutationObserver' and provide a callback function
const observer = new MutationObserver((mutationsList, observer) => {
    // Check if the 'innerHTML' has changed
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.target === elementToObserve) {
            console.log('innerHTML has changed:', elementToObserve.innerHTML);
            
            // You can perform additional actions here based on the change
            sheep = elementToObserve.innerHTML.split(",");
            // alert(`Sheep ID: ${sheep[0]}\nLatitude: ${sheep[1]}\nLongitude: ${sheep[2]}`);
            
            // Add a marker to the map
            var sheep_marker = L.marker([sheep[1], sheep[2]], {icon:sheep_icon}).addTo(map);
            sheep_marker.bindPopup(`Sheep ID: ${sheep[0]}`).openPopup();
            sheep_marker.setView([sheep[1], sheep[2]], 15);
        }
    }
});

// Configure the observer to watch for changes in the child nodes (including 'innerHTML')
observer.observe(elementToObserve, { childList: true });

// Example: Change the 'innerHTML' of the element (this will trigger the observer)
elementToObserve.innerHTML = 'abc,59.665939,10.780280';

