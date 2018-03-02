// Establishes map
var map;
var locationLat;
var locationLng;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.2319, lng: -110.9501},
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.HYBRID,   //to add lables in satellite map
    labels: true
});

// Click listener 
map.addListener('click', function(space) {
    placeMarkerAndStoreLocation(space.latLng, map);
});
}


function placeMarkerAndStoreLocation(latLng, map) {
    var marker = new google.maps.Marker({
    position: latLng,
    map: map
});
locationLat = latLng.lat();
locationLng = latLng.lng();
console.log(locationLat, locationLng);
$("#newCoordinate").val(locationLat +" "+ locationLng);
}

$("#submit").on("click", function() {
// $("#submit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("accepts click");

    var newSpace = {
        location_lat: locationLat,
        location_lng: locationLng,
        address: $("#newSpaceAddress").val().trim(),
        price: $("#newSpacePrice").val().trim(),
        owner_username: $("#InputEmail").val().trim()
    };

    console.log(newSpace);

    //Send the POST request.
    $.ajax("/api/space", {
        type: "POST",
        data: newSpace
    }).then(
        function() {
            console.log("created new new space");
            // Reload map to show new space
        }
    );
})



// other values will be blank or automatic