function initialize() {
	var mapDiv = document.getElementById('map-view');
	var mapOptions = {
		center: new google.maps.LatLng(37.9132, -122.3164),
		zoom: 8,
		// map type choices are ROADMAP, SATELLITE, HIBRID, or TERRAIN
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(mapDiv, mapOptions);
	var lox = map.data.loadGeoJson('js/data.json');
	console.log(lox);
};

google.maps.event.addDomListener(window, 'load', initialize);
