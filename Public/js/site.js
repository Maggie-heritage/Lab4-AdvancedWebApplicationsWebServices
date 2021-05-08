mapboxgl.accessToken = 'pk.eyJ1IjoibWFwc3RvdXRlIiwiYSI6ImNrbnRqNHlyaTAyeTUyem84dGIzZmx3amEifQ.RLKSEAHW61GbDNLOZJUfRQ';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL  
    center: [-75.7009, 45.4236], // starting position [lng, lat]
    zoom: 12 // starting zoom

});



// add zoom and rotation controls
map.addControl(new mapboxgl.NavigationControl());
// add control to locate the user
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: false
}));

var popup = new mapboxgl.Popup().setHTML("<h2>Heritage College</h2>");
//create the marker
new mapboxgl.Marker({ color: "#F22727" })
    .setLngLat([-75.7648, 45.4552])
    .setPopup(popup)
    .addTo(map);

popup.on('close', function () {
    console.log('popup was closed');
    map.setCenter([-75.7648, 45.4552]);
});

var popup1 = new mapboxgl.Popup().setHTML("<h2>University of Ottawa</h2>");
new mapboxgl.Marker({ color: "#F22727" })
    .setLngLat([-75.6831, 45.4231])
    .setPopup(popup1)
    .addTo(map);

popup1.on('close', function () {
    console.log('popup was closed and recenter the map!');
    map.setCenter([-75.6831, 45.4231]);
});

