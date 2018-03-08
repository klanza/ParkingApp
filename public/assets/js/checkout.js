$(document).ready(function() {
    let location = window.location.pathname;
    let locationArray = location.split('/');
    let spaceId = locationArray[locationArray.length - 1];
    let space;
    $.get('/api/space/' + spaceId, function(data) {
        space = data;
    }).then(function(space) {
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 20,
            center: {lat: space.location_lat, lng: space.location_lng}, // Destination cordinates
            mapTypeId: google.maps.MapTypeId.HYBRID, // to add lables in satellite map
            labels: true,
        });
        let infowindow = new google.maps.InfoWindow();
        let geocoder = new google.maps.Geocoder;
        /**
         * Function to load map in file
         */
        function loadmap() {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(space.location_lat, space.location_lng),
                map: map,
                label: {
                    databseId: space.id,
                },

            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {// on clicking on marker
                return function() {
                    let a = new google.maps.LatLng({lat: 32.2319, lng: -110.9501}); // destination
                    let b = new google.maps.LatLng({lat: space.location_lat, lng: space.location_lng}); // lat long of marker
                    geocoder.geocode({'location': b}, function(results) {
                        address = space.address;
                        id = space.id;
                    });
                };
            })(marker, i));
        }// loadmap ends
        loadmap();
    });
    $('#book').on('click', function handleFormBook(event) {
        event.preventDefault();
        let dt = new Date();
        let time = dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();
        let updateValues = {
            id: id,
            availability: false,
            bookedBy_username: $('#inputEmail').val(),
            time_booked: time,
        };
        $.ajax({
            method: 'PUT',
            url: '/api/space',
            data: updateValues,
        });
        $('#inputEmail').hide();
        $('#email-label').hide();
        $('#email').hide();
        $('#book').hide();
        $('#confirmation').html('<strong> Thank you for booking a parking space using Park Place! </strong>');
    });
});
