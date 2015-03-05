$(document).ready(function () {
  // MAP

    function initialize() {
        var latLng = new google.maps.LatLng(56.18291,15.605322)

        var mapProp = {
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: 'Blekinge sjukhus'
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
});