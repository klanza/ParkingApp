// Establishes map
let map;
let locationLat;
let locationLng;

/**
 * Function to generate map for Google Maps api
 */
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.2319, lng: -110.9501},
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.HYBRID, // to add lables in satellite map
    labels: true,
});

// Click listener
google.maps.event.addListener(map, 'click', function(space) {
    placeMarkerAndStoreLocation(space.latLng);
});
}
let marker;

function placeMarkerAndStoreLocation(location) {
    if (marker == null) {
   marker = new google.maps.Marker({
      position: location,
      map: map,
  });
} else {
marker.setPosition(location);
}

locationLat = location.lat();
locationLng = location.lng();
console.log(locationLat, locationLng);
$('#newCoordinate').val(locationLat +' '+ locationLng);
}

$('#submit').on('click', function() {
// $("#submit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log('accepts click');

    let newSpace = {
        location_lat: locationLat,
        location_lng: locationLng,
        address: $('#newSpaceAddress').val().trim(),
        price: $('#newSpacePrice').val().trim(),
        owner_username: $('#InputEmail').val().trim(),
    };

    console.log(newSpace);

    // Send the POST request.
    $.ajax('/api/space', {
        type: 'POST',
        data: newSpace,
    }).then(
        function() {
            console.log('created new new space');
            // Reload map to show new space
        },
        clearValues()
    );
});

let clearValues = function() {
    $('#newSpaceAddress').val('');
    $('#newSpacePrice').val('');
    $('#InputEmail').val('');
    $('#newCoordinate').val('');
};


// other values will be blank or automatic
