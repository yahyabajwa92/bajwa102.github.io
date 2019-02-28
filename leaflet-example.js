/*
 the script mus be loaded after the map div is defined.
 otherwise this will not work (we would need a listener to
 wait for the DOM to be fully loaded).
 Just put the script tag below the map div.
 The source code below is the example from the leaflet start page.
 */

 var map = L.map('map').setView([33.720983, 73.096655], 13);

 L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
     maxZoom: 18,
     id: 'mapbox.streets',
     accessToken: 'pk.eyJ1IjoieWFoeWFiYWp3YSIsImEiOiJjanBvNzFtZHcwYXNtNDhtbDBzZXc5dzYyIn0.oGuxYDWHlYoq9x-4Du8iIQ'
 }).addTo(map);

 L.marker([33.720983, 73.096655]).addTo(map)
 		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
 		.openPopup();
