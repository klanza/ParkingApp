
// Uploads Parking Space to database

// Clicking any spot on the map will make the Spot upload Window appear.
// This just changes what is currently on that location in the sidebar.

//sidebar inputs for upload:
// location Coordinates: loaded from click location
// Address: Entered by user in form
// Price Per hour: entered by user in form
// username owner:  entererd by user in form
$(".create-space").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newSpace = {
        gpsCoordinates: $("#whatever gps needs from google").val().trim(),
        address: $("#newSpaceAddress").val().trim(),
        price: $("#newSpacePrice").val().trim(),
        ownerName: $("#newSpaceOwnerName").val().trim()
    };

    // Send the POST request.
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