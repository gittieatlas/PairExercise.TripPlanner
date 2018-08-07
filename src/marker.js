const mapboxgl = require('mapbox-gl');
const buildMarker = (type, coords) => {
const markerDomEl = document.createElement("div");
// Create a new, detached DIV
let backgroundImage;

switch (type) {
  case 'Hotel':
    backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
    break;
  case 'Activity':
    backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
    break;
  case 'Restaurant':
    backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
    break;
  default:
}

markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = backgroundImage;

return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;
