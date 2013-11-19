/**
 * Titulo do ponto, LatLng e zIndex para os pontos do mapa.
 */
var locations = [
  ['Placa EPTG',-48.031625747680664,-15.827682005280142],
  ['Cruzeiro novo', -47.93337106704712,-15.795288766569723],
  ['Entrada lago norte', -47.89412498474121,-15.727264699546955],
  ['Lago norte', -47.87168025970459,-15.727120118986408],
  ['Guará', -47.967467308044434,-15.836063349474387],
  ['Taguatinga Centro', -48.08664321899414,-15.834700888616627]
];

// Map that will keep all markers to cross navigation
window.MAP_MARKERS = {};
window.map = {}
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

  window.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  setMarkers(map, locations);
}

function setMarkers(map, locations) {

  var infowindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();
  var image = image_path('icon_marker.png');    

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
      icon: image
      //zIndex: place[3]      
    });  

    //add to map marker
    window.MAP_MARKERS[place[0]] = marker;

    //centralize map    
    bounds.extend(marker.position);

    var panoramicBoxContainer = '<div id="content" style="width:200px;height:200px;"></div>';    

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {        
        var pointInfo = '<div style="max-width:200px"><h6>' + locations[i][0] + '</h6></div>';

        infowindow.setContent(pointInfo + panoramicBoxContainer);
        infowindow.open(map, marker);

        //creating panoramic view at each point
        var pano = null;
        google.maps.event.addListener(infowindow, 'domready', function() {
          if (pano != null) {
            pano.unbind("position");
            pano.setVisible(false);
          }
          pano = new google.maps.StreetViewPanorama(document.getElementById("content"), {
            navigationControl: false,      
            enableCloseButton: false,
            addressControl: false,
            linksControl: false
          });
          pano.bindTo("position", marker);
          pano.setVisible(true);
        });

        google.maps.event.addListener(infowindow, 'closeclick', function() {
          pano.unbind("position");
          pano.setVisible(false);
          pano = null;
        });

      }
    })(marker, i));  
  }

  //now fit the map to the newly inclusive bounds
  map.fitBounds(bounds);

  //create event to map navigation
  var list = document.getElementsByClassName('mapItem');
  for (var i = 0; i < list.length; i++) {
    google.maps.event.addDomListener(list[i], 'click', showAlert);
  }
  
}


function showAlert(e) {
  
    //Address list item   
  var mapItemKey = $(this.getElementsByClassName("name")).text().trim();

  //get respective map marker
  var marker = window.MAP_MARKERS[mapItemKey]
  google.maps.event.trigger(marker,'click');
}

//initialize map
google.maps.event.addDomListener(window, 'load', initialize);

