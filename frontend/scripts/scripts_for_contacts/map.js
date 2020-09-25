let keyformap = 'pk.eyJ1IjoibmFzdHlhZHJha29zaGEiLCJhIjoiY2thb2J0MDgwMGRibTJ4bnlqbnBqMjc0eCJ9._LIREwW4EyAU3LZEXid95Q';
mapboxgl.accessToken = `${keyformap}`;
let start = ['27.630283', '53.876483'];
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: start,
  zoom: 10,
});

let marker = new mapboxgl.Marker()
  .setLngLat(['27.630283', '53.876483'])
  .addTo(map);

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());

map.flyTo({
  center: start,
  zoom: 16,
  speed: 0.3,
  curve: 1,
  easing(t) {
    return t;
  },
});
