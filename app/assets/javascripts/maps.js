/**
 * Titulo do ponto, LatLng e zIndex para os pontos do mapa.
 */
var locations = [
  ['Placa EPTG',-48.031625747680664,-15.827682005280142, 4],
  ['Cruzeiro novo', -47.93337106704712,-15.795288766569723, 5],
  ['Entrada lago norte', -47.89412498474121,-15.727264699546955, 3],
  ['Lago norte', -47.87168025970459,-15.727120118986408, 2],
  ['Guará', -47.967467308044434,-15.836063349474387, 1],
  ['Taguatinga Centro', -48.08664321899414,-15.834700888616627, 5]
];


function initialize() {

  var mapOptions = {
    zoom: 12,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  $('#map-canvas').height($(window).height());

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  setMarkers(map, locations);
}

function setMarkers(map, locations) {

  var infowindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();
  var image = {
    url: image_path('icon_marker.png'),
    size: new google.maps.Size(42,62),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(21, 62)
  };

  for (i = 0; i < locations.length; i++) {  
    var place = locations[i];
    var placeLatLng = new google.maps.LatLng(place[2], place[1]),
    marker = new google.maps.Marker({
      draggable: false,
      raiseOnDrag: false,
      icon: image,
      map: map,      
      position: placeLatLng,
      title: place[0],
      //zIndex: place[3]      
    });  

    bounds.extend(marker.position);

    
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));  
  }

  //now fit the map to the newly inclusive bounds
  map.fitBounds(bounds);

}

//initialize map
google.maps.event.addDomListener(window, 'load', initialize);