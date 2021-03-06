/**
 * Titulo do ponto, LatLng e zIndex para os pontos do mapa. novos
 */
var locations = [ 
  ['VIA EPTG / S.I.A TRECHO 01 PRÓXIMO A CAESB FACE PISTA (SENTIDOS: TAGUATINGA e PLANO PILOTO)', -47.965149879455566,-15.807387804083593],
  ['VIA EPTG ANTES DA ENTRADA PARKWAY, ÁGUAS CLARAS SENTIDO S.I.A, GUARÁ, PLANO PILOTO.', -48.017898201942444,-15.820105466464135],
  ['VIA EPTG APÓS ENTRADA DO JOCKEY CLUBE SENTIDO VICENTE PIRES, PARKWAY, ÁGUAS CLARAS, TAGUATINGA.', -48.003376722335815,-15.813493826997247],
  ['VIA EPTG APÓS VIADUTO DE ACESSO A ESTRUTURAL NO SENTIDO PARA VICENTE PIRES, PARKWAY, ÁGUAS CLARAS, TAGUATINGA, CEILÂNDIA.', -48.004374504089355,-15.813684798537484],
  ['VIA EPTG ANTES DA ENTRADA PARKWAY, ÁGUAS CLARAS NO SENTIDO PARA TAGUATINGA, CEILÂNDIA.', -48.00883769989014,-15.816822899645958],
  ['VIA EPTG APÓS A SAÍDA DO PARKWAY, ÁGUAS CLARAS NO SENTIDO PARA GUARÁ, S.I.A, PARKSHOPPING, PLANO PILOTO.', -48.009159564971924,-15.816822899645958],
  ['VIA EPTG APÓS VIADUTO DE ACESSO A ESTRUTURAL NO SENTIDO PARA VICENTE PIRES, PARKWAY, ÁGUAS CLARAS, TAGUATINGA, CEILÂNDIA.', -48.00529718399048,-15.813973836201418],
  ['AV. ELMO SEREJO (VIA ESTÁDIO) PRÓXIMO A ESTAÇÃO JACARÉ (METRÔ) SENTIDO CEILÂNDIA.', -48.09134244918823,-15.836372998387729],
  ['AV. ELMO SEREJO (VIA ESTÁDIO) PRÓXIMO A RODOVIARIA SENTIDO TAGUATINGA CENTRO.', -48.08374643325806,-15.835547266897322],
  ['AV. ELMO SEREJO (VIA ESTÁDIO) APÓS CHÁCARA ONOYAMA SENTIDO ESTÁDIO, CEILÂNDIA.', -48.07291030883789,-15.834597671510526],
  ['AV. SANDU NORTE FRENTE AO FORUM DE TAGUATINGA.', -48.0666446685791,-15.819403538415697],
  ['AV. SANDU SUL QSB 06 FACE PISTA.', -48.05801868438721,-15.83864374258055],
  ['PISTÃO SUL PRÓXIMO COLÉGIO OBJETIVO ANTES ENTRADA ÁGUAS CLARAS SENTIDO TAGUATINGA SHOPPING, TAGUATINGA CENTRO.', -48.036861419677734,-15.857944037073212],
  ['AV. ELMO SEREJO (VIA ESTÁDIO) PRÓXIMO ACADEMIA DE POLICIA, RODOVIÁRIA NO SENTIDO PARA QNL, SAMAMBAIA, TAGUATINGA CENTRO.', -48.08632135391235,-15.836104636023594],
  ['VIA DE LIGAÇÃO PARKWAY, NÚCLEO BANDEIRANTE SENTIDO GUARÁ II e I PRÓX. POLO DE MODAS.', -47.97502040863037,-15.855384531992245],
  ['SAÍDA DO GUARÁ II APÓS BALÃO NO SENTIDO PARA PARKSHOPPING, ZOOLÓGICO, AEROPORTO, PLANO PILOTO.', -47.96611547470093,-15.83624913887935],
  ['ENTRADA DO GUARÁ II PRÓXIMO AO BALÃO NO SENTIDO PARA O GUARÁ I, ESTAÇÃO DO METRÔ, FEIRA DO GUARÁ.', -47.96577215194702,-15.836290425390581],
  ['AV. CENTRAL DO GUARÁ I APÓS POSTO DE GASOLINA, FRENTE AO BANCO DO BRASIL NO SENTIDO PARA GUARÁ I, SESC, PÃO DE AÇUCAR, MCDONALD´S.', -47.98225164413452,-15.820332560311076],
  ['AV. CENTRAL DO GUARÁ I ANTES DO POSTO GASOLINA, FRENTE AO BANCO DO BRASIL NO SENTIDO PARA GUARÁ II, ESTAÇÃO DO METRÔ, FEIRA DO GUARÁ.', -47.98255205154419,-15.81994030714254],
  ['CRUZEIRO VELHO FRENTE AO COMÉRCIO LOCAL PRÓXIMO AO BANCO DO BRASIL.', -47.93950796127319,-15.786410173434362],
  ['CEILÂNDIA NORTE QNM 32 PRÓXIMO LYONS CLUBE FACE PISTA.', -48.12610387802124,-15.805736100967758],
  ['CEILÂNDIA NORTE QNM 30 PROXIMO A FACEB FACE PISTA.', -48.12333583831787,-15.81290026565368],
  ['AV. HÉLIO PRATES PRÓXIMO BALÃO FUNDAÇÃO BRADESCO SENTIDO CEILÂNDIA.', -48.11945199966431,-15.824647294940494],
  ['AV. HÉLIO PRATES PRÓXIMO IGREJA DE SANTO EXPEDITO SENTIDO CEILÂNDIA CENTRO.', -48.09468984603882,-15.811723460623503],
  ['AV. HÉLIO PRATES PASSARELA PRÓXIMO AO CEMITERIO SENTIDO ESTRUTURAL, PISTÃO NORTE, TAGUATINGA.', -48.08572053909302,-15.80922530795971],
  ['AV. HÉLIO PRATES APÓS CEMITERIO PRÓXIMO COMPER SENTIDO CEILÂNDIA CENTRO.', -48.0877161026001,-15.808956909557702],
  ['AV. HÉLIO PRATES ESQUINA DO HOSPITAL NO SENTIDO PARA TAGUATINGA, PISTÃO SUL, VIA ESTRUTURAL, PLANO PILOTO.', -48.097500801086426,-15.813994481733033],
  ['AV. HÉLIO PRATES ESQUINA DO HOSPITAL NO SENTIDO CEILÂNDIA CENTRO.', -48.097264766693115,-15.813891254053866],
  ['AV. HELIO PRATES PRÓXIMO AO CEMITÉRIO NO CRUZAMENTO QNJ NO SENTIDO PARA TAGUATINGA, PISTÃO SUL, VIA ESTRUTURAL, PLANO PILOTO.', -48.08372497558594,-15.80856463432978],
  ['AV. HELIO PRATES PRÓXIMO AO CEMITERIO NO CRUZAMENTO DA QNJ SENTIDO PARA CEILÂNDIA CENTRO, QNL.', -48.08348894119263,-15.808420111685708],
  ['LAGO SUL ENTRE QI 29 E SETOR DE CONDOMINIOS DO LAGO SUL SENTIDO ESAF, SÃO SEBASTIAO, LAGO SUL, PARANOÁ.', -47.791407108306885,-15.814593201233455],
  ['S.I.A TRECHO 04 PRÓXIMO ONOGÁS SENTIDO S.I.A, VIA EPTG.', -47.97203779220581,-15.796424372506415],
  ['S.I.A TRECHO 04 PRÓXIMO ONOGÁS SENTIDO CIDADE AUTOMOVEL, VIA ESTRUTURAL.', -47.97188758850098,-15.796568903714322],
  ['S.I.A TRECHO 04 PRÓXIMO A CIMFEL NO SENTIDO PARA O S.I.A, VIA EPTG, VIA EPIA.', -47.950215339660645,-15.80104931999568],
  ['S.I.A TRECHO 04 PRÓXIMO A CIMFEL NO SENTIDO PARA FEIRA DOS IMPORTADOS, CEASA, CRUZEIRO.', -47.95006513595581,-15.801255788402495],
  ['VIA ESTRUTURAL ANTES DO POSTO DA POLICIA RODOVIÁRIA SENTIDO CIDADE AUTOMOVEL, PLANO PILOTO.', -48.019137382507324,-15.790085545229019],
  ['VIA ESTRUTURAL ANTES DO POSTO DA POLICIA RODOVIÁRIA SENTIDO TAGUATINGA.', -48.014888763427734,-15.787814255921392],
  ['VIA ESTRUTURAL (VIA PARALELA) APÓS POSTO DA POLICIA RODOVIARIA NO SENTIDO PARA TAGUATINGA, CEILÂNDIA, BRAZLANDIA, ÁGUAS LINDAS.', -48.04316997528076,-15.791572193534773],
  ['VIA ESTRUTURAL (VIA PARALELA) ANTES DO POSTO DA POLICIA RODOVIARIA NO SENTIDO PARA CIDADE DO AUTOMOVEL, S.I.A, CRUZEIRO, PLANO PILOTO.', -48.04342746734619,-15.791551545716326],
  ['VIA ESTRUTURAL APÓS POSTO DA POLICIA RODOVIARIA NO SENTIDO PARA TAGUATINGA, CEILANDIA, BRAZLANDIA, ÁGUAS LINDAS.', -48.04147481918335,-15.791076645311596],
  ['VIA ESTRUTURAL ANTES DO POSTO DA POLICIA RODOVIÁRIA NO SENTIDO PARA CIDADE AUTOMOVEL, S.I.A, VIADUTO AIRTON SENNA, PLANO PILOTO.', -48.04171085357666,-15.791097293178439],
  ['VIA ESTRUTURAL ANTES DO VIADUTO AIRTON SENNA NO SENTIDO PARA CRUZEIRO, PARKSHOPPING, AEROPORTO, EIXO MONUMENTAL, PLANO PILOTO.', -47.94924974441528,-15.788598886015095],
  ['VIA ESTRUTURAL APÓS O VIADUTO AIRTON SENNA NO SENTIDO PARA CIDADE AUTOMOVEL, TAGUATINGA, CEILÂNDIA, BRAZLANDIA, ÁGUAS LINDAS.', -47.948949337005615,-15.788474997254912],
  ['VIA EPNB ANTES DO SETOR POSTOS E MOTEIS DO NÚCLEO BANDEIRANTE NO SENTIDO PARA NÚCLEO BANDEIRANTE, PARSHOPPING, AEROPORTO, PLANO PILOTO.', -47.97857165336609,-15.872815357285768],
  ['VIA EPNB APÓS SETOR DE POSTOS E MOTEIS DO NÚCLEO BANDEIRANTE NO SENTIDO PARA PARKWAY, ÁGUAS CLARAS, TAGUATINGA, RIACHO FUNDO, SAMAMBAIA.', -47.978432178497314,-15.872763758487919],
  ['VIA EPIA - SMPW QD.02 SENTIDO NÚCLEO BANDEIRANTE, AEROPORTO, CATETINHO, GAMA, VALPARAISO.', -47.957961559295654,-15.867892772480287],
  ['VIA EPIA - PARKWAY AEROPORTO ANTES DA PASSARELA NO SENTIDO PARA PARKSHOPPING, AEROPORTO, LAGO SUL, PLANO PILOTO.', -47.96030044555664,-15.885848790310167],
  ['VIA EPNB DESCIDA DO RIACHO FUNDO I SENTIDO NÚCLEO BANDEIRANTE, PARKSHOPPING, PLANO PILOTO.', -47.99228310585022,-15.87682970325308],
  ['SAÍDA NÚCLEO BANDEIRANTE PRÓXIMO CAIC SENTIDO AEROPORTO, VIA EPIA, PLANO PILOTO.', -47.96388387680054,-15.876200209559105],
  ['SAÍDA DO RIACHO FUNDO I APÓS BATALHÃO POLICIA MILITAR SENTIDO NÚCLEO BANDEIRANTE, PLANO PILOTO.', -48.01572561264038,-15.878212518559296],
  ['ENTRADA DO RIACHO FUNDO I BAIRRO TELEBRASILIA - ADE.', -48.000855445861816,-15.877892614369774],
  ['ENTRADA DO RIACHO FUNDO I APÓS CORPO DE BOMBEIROS LADO FORÚM.', -48.01051139831543,-15.8828562318311],
  ['PARKWAY - AEROPORTO FRENTE AO COMÉRCIO DE FLORES SENTIDO AEROPORTO, LAGO SUL, PLANO PILOTO.', -47.94014096260071,-15.86700524963915],
  ['SMPW QD.05 PRÓXIMO POSTO POLICIA MILITAR SENTIDO ÁGUAS CLARAS, GUARÁ, NÚCLEO BANDEIRANTE.', -47.99903154373169,-15.847251695510558],
  ['SMPW QD.03 PRÓXIMO BALÃO ACESSO LAR DOS VELHINHOS SENTIDO PARKWAY, ÁGUAS CLARAS, GUARÁ, NÚCLEO BANDEIRANTE.', -47.98078179359436,-15.865157951194764],
  ['AV. VEREDA DA CRUZ SENTIDO AREAL, PISTÃO SUL.', -48.027623891830444,-15.849068195031153],
  ['ENTRADA DE ÁGUAS CLARAS PELA AV. DAS CASTANHEIRAS PRÓXIMO A ADMINISTRAÇÃO NO SENTIDO PARA ESTAÇÃO DO METRÔ, SHOPPING, VIA EPTG.', -48.006166219711304,-15.83433962851454],
  ['SAÍDA DE ÁGUAS CLARAS PELA AV. DAS ARAUCARIAS LADO CENTRO EDUCACIONAL YPÊ NO SENTIDO PARA PARKWAY, VIA EPTG, GUARÁ.', -48.00908446311951,-15.8378076988244],
  ['ENTRADA DE SANTA MARIA NA AV. ALAGADOS PRÓXIMO AO SUPERMERCADO BARATUDO.', -47.98948287963867,-16.003761368417283],
  ["DF-180 PRÓXIMO AO RESTAURANTE RODA D'ÁGUA FACE PISTA", -48.198909759521484,-15.709108708749437], 
  ['CEILÂNDIA NORTE QNM 10/16 SENTIDO SETOR "O", BR-070.', -48.11983823776245,-15.799480153223275],
  ['CEILÂNDIA NORTE QNM 10/16 SENTIDO TAGUATINGA, CEILÂNDIA.', -48.119999170303345,-15.799376918140856],
  ['VIA EPIA - PARKWAY AEROPORTO APÓS A PASSARELA NÚCLEO BANDEIRANTE NO SENTIDO PARA CATETINHO, GAMA, SANTA MARIA, VALPARAISO.', -47.960171699523926,-15.88563208929342],
  ['BR-020 PRÓXIMO AO POSTO ITIQUIRA SENTIDO PLANALTINA.', -47.6797091960907,-15.60082085510885],
  ['BR-020 PRÓXIMO A ENTRADA DE SOBRADINHO SENTIDO SOBRADINHO, PLANALTINA.', -47.813862562179565,-15.669548247162327],
  ['BR-020 APÓS COLORADO FRENTE AO POSTO DA POLICIA RODOVIÁRIA SENTIDO LAGO NORTE, PLANO PILOTO.', -47.87200212478638,-15.693946493533053],
  ['DF-150 SENTIDO SOBRADINHO II, FERCAL, LAGO NORTE, PLANO PILOTO.', -47.844364643096924,-15.675539619296297],
  ['BALÃO DO POSTO COLORADO ACESSO AOS CONDOMINIOS SOBRADINHO II.', -47.86099433898926,-15.687893686714215],
  ['BR-020 APÓS O POSTO DA POLICIA RODOVIÁRIA ANTES DA PONTE DO RIO TORTO SENTIDO LAGO NORTE, PLANO PILOTO.', -47.890992164611816,-15.70553515472286],
  ['BR-060 CHEGADA Á BRASILIA VINDO DE GOIÂNIA FRENTE A SAMAMBAIA.', -48.117499351501465,-15.900501365401865],
  ['ENTRADA DE SAMAMBAIA PRÓXIMO AO CORPO DE BOMBEIROS SENTIDO SAMAMBAIA.', -48.0662477016449,-15.858573587781784],
  ['SAÍDA DE SAMAMBAIA PRÓXIMO A FURNAS SENTIDO ESTAÇÃO DO METRÔ.', -48.06314706802368,-15.8602971017987],
  ['FRENTE AO HOSPITAL DE SAMAMBAIA.', -48.073275089263916,-15.853485523366425],
  ['SAÍDA DE SAMAMBAIA ANTES DO VIADUTO DA QNL SENTIDO TAGUATINGA, CEILÂNDIA.', -48.07497024536133,-15.841306673697897],
  ['SAIDA DO RECANTO DAS EMAS FRENTE A CASTELO FORTE.', -48.097801208496094,-15.91379094700381],
  ['VIA DE ACESSO AO RECANTO DAS EMAS PRÓXIMO A BARREIRA ELETRÔNICA.', -48.05819034576416,-15.891586122856866],
  ['ENTRADA DO RIACHO FUNDO II FACE BALÃO DO RECANTO DAS EMAS.', -48.050808906555176,-15.899861627358941],
  ['DF-005 PRÓXIMO AO BALÃO DE ACESSO AO PARANOÁ.', -47.78409004211426,-15.782672788821062],
  ['SAÍDA DA CIDADE OCIDENTAL ANTES DO TUNEL.', -47.96779990196228,-16.11070967566917],
  ['ENTRADA DA CIDADE OCIDENTAL ANTES DO TUNEL.', -47.96930193901062,-16.111657962088813],
  ['VALPARAISO PRÓXIMO A DELEGACIA', -47.97636151313782,-16.06943421277988],
  ['BR-040 FRENTE AO SHOPPING VALPARAISO.', -47.98698306083679,-16.080166245710455],
  ['BR-040 PRÓXIMO AO SHOPPING VALPARAISO SENTIDO BRASÍLIA.', -47.984933853149414,-16.087825738112997],
  ['BR-040 SAÍDA DO VALPARAISO SENTIDO BRASILIA.', -47.97853946685791,-16.037234640848293],
  ['BR-040 ENTRADA DO VALPARAISO.', -47.98081398010254,-16.041730314824],
  ['ENTRADA DO GAMA PRÓXIMO A PRAINHA', -48.054327964782715,-16.036698452779977],
  ['BALÃO DO NOVO GAMA', -48.031625747680664,-16.04993775154777],
  ['AV. ALFREDO NASSER FRENTE AO RESTAURANTE COMUNITÁRIO.', -47.91592597961426,-16.2475354380977],
  ['BR-040 SAÍDA DE LUZIÂNIA SENTIDO VALPARAISO, BRASÍLIA.', -47.90687084197998,-16.244064190642483],
  ['BR-040 ENTRADA DE LUZIÂNIA PRÓXIMO AO POSTO TEXACO.', -47.90787935256958,-16.244002387461943],
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

