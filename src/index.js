const mapboxgl = require('mapbox-gl');
const markerFactory = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoidGVzc2VsbGF0aW9uIiwiYSI6ImNqa2s1bnV2YzFmcmUzdnVrc2ZuZjAzYngifQ.DDUnOsiSNySrxB0LJaZ71A';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const marker = markerFactory('restaurants', [-74.009, 40.705]);

marker.addTo(map);
