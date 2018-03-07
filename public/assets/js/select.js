$(document).ready(function () {
    $("#book-data").hide();
    $("#submit").hide();
    $("#book").hide();

    var locations = [];
    $.get("/space-info", function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        if (data[i].availability === true) {
        locations.push(data[i]);
        }
    }

    loadmap();

    });
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14.75,
    center: { lat: 32.2319, lng: -110.9501 }, //Destination cordinates
    mapTypeId: google.maps.MapTypeId.HYBRID,   //to add lables in satellite map
    labels: true

    });
    var infowindow = new google.maps.InfoWindow();
    var geocoder = new google.maps.Geocoder;
    var marker, i;
    var address;

    function loadmap() {
    for (i = 0; i < locations.length; i++) { //for loop for all markers/parking spots in DB
        console.log(locations[i]);

        marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i].location_lat, locations[i].location_lng),
        map: map,
        label: {
            text: "$" + locations[i].price + "/hr",
            color: 'white',
            databseId: locations[i].id,
        }

        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {//on clicking on marker

        return function () {
            var a = new google.maps.LatLng({ lat: 32.2319, lng: -110.9501 }); //destination
            var b = new google.maps.LatLng({ lat: locations[i].location_lat, lng: locations[i].location_lng }); //lat long of marker
            geocoder.geocode({ 'location': b }, function (results) { //geocoder gives address

            infowindow.setContent(results[0].formatted_address);
            infowindow.open(map, marker);
            var distance = Math.round((google.maps.geometry.spherical.computeDistanceBetween(a, b)) * 3.28);
            //calculate distance between two points
            var time = Math.round((distance) / 80.4672);
            //Source: https://www.quora.com/What-is-the-assumed-walking-speed-in-Google-Mapss-time-estimates
            //on click empty all divs and reload data from clicked marker
            $("#book").hide();
            // $('#distance').empty(" ");
            // $('#address').empty(" ");
            // $('#time').empty(" ");
            // $('#price').empty(" ");
            // $('#time').empty(" ");
            $('#initial').hide(" ");
            $("#submit").show();
            $('#distance').html("<strong>" + "Distance from University of Arizona: " + "</strong>" + "<br/>" + distance + " meters" + "<br/>" + "<br/>");
            $('#time').html("<strong>" + "Walk time to University of Arizona: " + "</strong>" + "<br/>" + time + " minutes" + "<br/>" + "<br/>");
            $('#address').html("<strong>" + "Address of Parking Spot: " + "</strong>" + "<br/>" + locations[i].address + "<br/>" + "<br/>");
            $('#price').html("<strong>" + "Price of Parking Spot: " + "</strong>" + "<br/>" + "$" + locations[i].price + "/hr" + "<br/>" + "<br/>");
            //console.log(results);
            address = locations[i].address;
            id = locations[i].id
            });
        }
        })(marker, i));

    }
    }//loadmap ends

    $("#submit").on("click", function handleFormSubmit(event) {
    event.preventDefault();
    $("#book-data").show();
    $("#results").hide();
    $("#book").show();
    $("#submit").hide();

    // Wont submit the post if we are missing a body or a title
    $("#add").append(address);

    });
    $("#book").on("click", function handleFormBook(event) {
    event.preventDefault();
    let updateValues = {
        id: id,
        availability: false,
        bookedBy_username: $('#inputEmail').val()
    }
    $.ajax({
        method: 'PUT',
        url: '/api/space',
        data: updateValues,
    })
    $('#inputEmail').hide()
    $('#email-label').hide()
    $('#email').hide()
    $('#book').hide()
    $('#confirmation').html('<strong> Thank you for booking a parking space using Park Place! </strong>')

    });
});