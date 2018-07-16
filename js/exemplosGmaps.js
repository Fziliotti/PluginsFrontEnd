// SITE PLUGIN http://hpneo.github.io/gmaps/
map = new GMaps({
    div: '#map',
    zoom: 16,
    lat: -12.043333,
    lng: -77.028333
    // click: function(e) {
    //   alert('click');
    // },
    // dragend: function(e) {
    //   alert('dragend');
    // }
  });
//   map.addMarker({
//   lat: -12.043333,
//   lng: -77.028333,
//   title: 'MARCADOR',
//   click: function(e) {
//     alert('Você clicou no marcador!!');
//   }
// });

//   map.drawOverlay({
//   lat: -12.043333,
//   lng: -77.028333,
//   content: '<div class="overlay">Lima</div>'
// });



map2 = new GMaps({
    div: '#map2',
    zoom: 16,
    lat: -12.043333,
    lng: -77.028333
    // click: function(e) {
    //   alert('click');
    // },
    // dragend: function(e) {
    //   alert('dragend');
    // }
  });

map2.drawRoute({
  origin: [-12.044012922866312, -77.02470665341184],
  destination: [-12.090814532191756, -77.02271108990476],
  travelMode: 'driving',
  strokeColor: '#131540',
  strokeOpacity: 0.6,
  strokeWeight: 6
});
//   map.addMarker({
//   lat: -12.043333,
//   lng: -77.028333,
//   title: 'MARCADOR',
//   click: function(e) {
//     alert('Você clicou no marcador!!');
//   }
// });

//   map.drawOverlay({
//   lat: -12.043333,
//   lng: -77.028333,
//   content: '<div class="overlay">Lima</div>'
// });