$(document).ready(function() {
    let location = window.location.pathname;
    let locationArray = location.split('/');
    let spaceId = locationArray[locationArray.length - 1];
    let space;
    let hourDiff;
    $.get('/api/space/' + spaceId, function(data) {
        space = data;
    }).then(function(space) {
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 20,
            center: {lat: space.location_lat, lng: space.location_lng}, // Destination cordinates
            mapTypeId: google.maps.MapTypeId.HYBRID, // to add lables in satellite map
            labels: true,
        });
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
            google.maps.event.addListener(marker, 'click', (function(marker) {// on clicking on marker
                return function() {
                    let b = new google.maps.LatLng({lat: space.location_lat, lng: space.location_lng}); // lat long of marker
                    geocoder.geocode({'location': b}, function(results) {
                        address = space.address;
                        id = space.id;
                    });
                };
            })(marker));
            let dt = new Date();
            let time = dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();
            let username = space.bookedBy_username.split('@');
            $('#welcome-message').text(`Welcome ${username[0]}!`);
            $('#price-information').html(`You booked your spot at ${space.address} at <strong>${space.time_booked}</strong>.`);
            $('#time-information').html(`The current time is <strong>${time}</strong>.`);
            let valuestart = space.time_booked;
            let valuestop = time;
            let timeStart = new Date('01/01/2018 ' + valuestart).getHours();
            let timeEnd = new Date('01/01/2018 ' + valuestop).getHours();
            hourDiff = Math.abs(timeEnd - timeStart);
            let total = hourDiff * space.price;
            if (hourDiff <= 1) {
                $('#total').html(`You have been renting this spot for 1 hour. Your total price is $${space.price}.`);
            } else if (hourDiff > 1) {
                $('#total').html(`You have been renting this spot for ${hourDiff} hours. Your total price is $${total}.`);
            };
        }// loadmap ends
        loadmap();
    });
    $('#checkout-button').on('click', function(event) {
        event.preventDefault();
        let dt = new Date();
        let time = dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();
        if (hourDiff < 1) {
            hourDiff = 1;
        }
        let updateValues = {
            id: space.id,
            availability: true,
            bookedBy_username: '',
            time_vacated: time,
        };
        $.ajax({
            method: 'PUT',
            url: '/api/vacate',
            data: updateValues,
        });
        console.log(space);
        let finalTotal = hourDiff * space.price;
        $('#welcome-message').text(`Thank you for booking with Park Place! Please come again!`);
        $('#price-information').empty();
        $('#total').empty();
        $('#time-information').html(`Your receipt: $${finalTotal}!`);
        $('#checkout-button').hide();
    });
});
