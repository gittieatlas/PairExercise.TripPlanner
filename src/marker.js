const mapboxgl = require('mapbox-gl');

const iconUrls = {
  hotels: 'url(http://i.imgur.com/D9574Cu.png)',
  activities: 'url(http://i.imgur.com/WbMOfMl.png)',
  restaurants: 'url(http://i.imgur.com/cqR6pUI.png)'
};

const buildMarker = (type, coords) => {
  if (!iconUrls.hasOwnProperty(type)) {
    type = 'activities';
  }
  const markerDomEl = document.createElement('div');

  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `${iconUrls[type]}`;

  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;
