var isgeotiles = 'http://tileserver.isgeo.kiev.ua/{z}/{x}/{y}.png'

var mbUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

var Esri_WorldImagery = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'

var Esri_WorldStreetMap = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'

var Esri_WorldTopoMap = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'

var isgeo = L.tileLayer(isgeotiles, {
		id: 'ISGEO',
		attribution: '&copy; Stanyslav Krakovskiy | Тайли надано ISGEO'
	});

var openstreetmap = L.tileLayer(mbUrl, {
		id: 'OpenStreetMap_Mapnik',
		attribution: '&copy; Stanyslav Krakovskiy | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});

Esri_WorldImagery = L.tileLayer(Esri_WorldImagery, {
	id: 'Esri_WorldImagery',
	attribution: '&copy; Stanyslav Krakovskiy |Tiles &copy; Esri'
});

Esri_WorldStreetMap = L.tileLayer(Esri_WorldStreetMap, {
	id: 'Esri_WorldStreetMap',
	attribution: '&copy; Stanyslav Krakovskiy |Tiles &copy; Esri'
});

Esri_WorldTopoMap = L.tileLayer(Esri_WorldTopoMap, {
	id: 'Esri_WorldTopoMap',
	attribution: '&copy; Stanyslav Krakovskiy |Tiles &copy; Esri'
});

var map = L.map('map', {
	center: [49.02750, 31.48278],
	zoom: 6,
	zoomControl: false,
	layers: [openstreetmap]
});


/*
var baselayers = {
	"OpenStreetMap": openstreetmap,
	"ESRI Супутник": Esri_WorldImagery,
	"Thunderforest Ландшафт": Thunderforest_Landscape,
	"ESRI": Esri_WorldStreetMap,
	"ESRI Топографічна": Esri_WorldTopoMap
};

function style1(feature) {
		return {
			weight: 4.5,
			opacity: 0.7,
			color: '#C2267D'
			
		
		};
	}


var border = L.geoJson(ukr, {
     style: style1,
	}).addTo(map);

*/
function getColor(d) {
		return  d > 75  ? 'rgb(195, 185, 96)' :
				d > 70  ? 'rgb(216, 208, 133)' :
				d > 64  ? 'rgb(229, 222, 155)' :
				d > 1   ? 'rgb(245, 241, 195)' :
				d = 0   ? 'black' :
						  'rgb(236, 236, 236)';
	}

	function style(feature) {
		return {
			weight: 0.5,
			opacity: 0.7,
			color: 'black',
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: getColor(feature.properties.Zag)
		};
	}



	function onEachFeature(feature, layer) {


		var popupContent = '<b>Область:</b> ' + '<br>' + feature.properties.state + '<br><b>Загальна захворюваність населення <br> (1 тис. випадків на 100 тис. осіб):</b> ' + '<br>' + feature.properties.Zag;
         var customOptions =
        {
        	 closeOnClick: true,
             autoClose: false,
             'className': 'custom'
        };
		layer.bindPopup(popupContent,customOptions);
	};

var choropleth = L.geoJson(Oblasti, {
     style: style,
     onEachFeature: onEachFeature
	}).addTo(map);

/*
var greenIcon = L.icon({
    iconUrl: 'img/circle.png',

    iconSize:     [60, 60], // size of the icon
    iconAnchor:   [30, 30], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
var mark1 = L.marker([49.964455810748916, 24.575083603517271], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.");

var myGroup = L.layerGroup([mark1]);
myGroup.eachLayer(function(layer) {
    layer.setOpacity(0.6);
});
*/
function onEachFeature2(feature, layer) {


		var popupContent2 = '<b>Область:</b> ' + '<br>' + feature.properties.state + '<br><b>Кількість уперше зареєстрованих випадків захворювань (10 тис. випадків):</b> ' + '<br>' + feature.properties.val;
         var customOptions2 =
        {
        	 closeOnClick: true,
             autoClose: false,
             'className': 'custom'
             
        };
		layer.bindPopup(popupContent2,customOptions2);
	};

var geojsonMarkerOptions1 = {
    radius: 10,
    fillColor: "#6c1baa",
    color: "#000",
    weight: 0.7,
    opacity: 1,
    fillOpacity: 0.7,
    popupAnchor: [80, 80]
};

var geojsonMarkerOptions2 = {
    radius: 15,
    fillColor: "#6c1baa",
    color: "#000",
    weight: 0.7,
    opacity: 1,
    fillOpacity: 0.7,
    popupAnchor: [80, 80]
};

var geojsonMarkerOptions3 = {
    radius: 20,
    fillColor: "#6c1baa",
    color: "#000",
    weight: 0.7,
    opacity: 1,
    fillOpacity: 0.7,
    popupAnchor: [80, 80]
};

var geojsonMarkerOptions4 = {
    radius: 25,
    fillColor: "#6c1baa",
    color: "#000",
    weight: 0.7,
    opacity: 1,
    fillOpacity: 0.7,
    popupAnchor: [80, 80]
};

var geojsonMarkerOptions5 = {
    radius: 30,
    fillColor: "#6c1baa",
    color: "#000",
    weight: 0.7,
    opacity: 1,
    fillOpacity: 0.7,
    popupAnchor: [80, 80]
};

var mark1 = L.geoJSON(mark1, {
	onEachFeature: onEachFeature2,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions1);
    }
}).addTo(map);

var mark2 = L.geoJSON(mark2, {
	onEachFeature: onEachFeature2,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions2);
    }
}).addTo(map);

var mark3 = L.geoJSON(mark3, {
	onEachFeature: onEachFeature2,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions3);
    }
}).addTo(map);

var mark4 = L.geoJSON(mark4, {
	onEachFeature: onEachFeature2,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions4);
    }
}).addTo(map);

var mark5 = L.geoJSON(mark5, {
	onEachFeature: onEachFeature2,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions5);
    }
}).addTo(map);

var diagrams = L.layerGroup([mark1, mark2, mark3, mark4, mark5])

var overlayMaps = {
    "Загальна захворюваність населення": choropleth,
    "Кількість уперше зареєстрованих випадків захворювань": diagrams

};

var layerControl = L.control.layers({
	"OpenStreetMap": openstreetmap,
	"ESRI Супутник": Esri_WorldImagery,
	"ESRI": Esri_WorldStreetMap,
	"ESRI Топографічна": Esri_WorldTopoMap,
	"ISGEO": isgeo
	}, overlayMaps).addTo(map);

var data = [
{lat: 45.33, lng: 34.04, state: "Автономна Республіка Крим", props: [ {name:"Хвороби органів дихання", val: 0},{name:"Хвороби системи кровообігу", val: 0},{name:"Хвороби сечостатевої системи", val: 0},{name:"Хвороби шкіри та підшкірної клітковини", val: 0},{name:"Інші хвороби", val: 0},{name:"F2010", val: 1074712},{name:"F2016", val: 0}]},
{lat: 50.206432550864129, lng: 30.84, state: "Київська", props: [ {name:"Хвороби органів дихання", val:187}, {name:"Хвороби системи кровообігу", val: 21.6}, {name:"Хвороби сечостатевої системи", val: 25.8}, {name:"Хвороби шкіри та підшкірної клітковини", val: 19.4}, {name:"Інші хвороби", val: 127},{name:"F2010", val: 1291919},{name:"F2016", val: 1291784}]},
{lat: 51.59, lng: 31.95, state: "Чернігівська", props: [ {name:"Хвороби органів дихання", val:38}, {name:"Хвороби системи кровообігу", val: 4.1}, {name:"Хвороби сечостатевої системи", val: 3.6}, {name:"Хвороби шкіри та підшкірної клітковини", val: 4.2}, {name:"Інші хвороби", val: 25}, {name:"F2010", val: 801633}, {name:"F2016", val: 748545}]},
{lat: 48.36, lng: 26.17, state: "Чернівецька",  props: [ {name:"Хвороби органів дихання", val:27}, {name:"Хвороби системи кровообігу", val: 3.6}, {name:"Хвороби сечостатевої системи", val: 3.7}, {name:"Хвороби шкіри та підшкірної клітковини", val: 4.2}, {name:"Інші хвороби", val: 20}, {name:"F2010", val: 644181}, {name:"F2016", val: 583346}]},
{lat: 49.250048292313501, lng: 31.361955028653711, state: "Черкаська",  props: [ {name:"Хвороби органів дихання", val:38}, {name:"Хвороби системи кровообігу", val: 4.8}, {name:"Хвороби сечостатевої системи", val: 5.6}, {name:"Хвороби шкіри та підшкірної клітковини", val: 4.9}, {name:"Інші хвороби", val: 31},{name:"F2010", val: 1028420},{name:"F2016", val: 841848}]},
{lat: 49.18, lng: 26.96, state: "Хмельницька",  props: [ {name:"Хвороби органів дихання", val:35}, {name:"Хвороби системи кровообігу", val: 6.7}, {name:"Хвороби сечостатевої системи", val: 4.4}, {name:"Хвороби шкіри та підшкірної клітковини", val: 4.5}, {name:"Інші хвороби", val: 34},{name:"F2010", val: 883138}, {name:"F2016", val: 842740}]},
{lat: 46.83, lng: 33.85, state: "Херсонська",  props: [ {name:"Хвороби органів дихання", val:24}, {name:"Хвороби системи кровообігу", val: 3.0}, {name:"Хвороби сечостатевої системи", val: 4.7}, {name:"Хвороби шкіри та підшкірної клітковини", val: 3.9}, {name:"Інші хвороби", val: 22},{name:"F2010", val: 693876}, {name:"F2016", val: 577016}]},
{lat: 49.51, lng: 36.02, state: "Харківська",  props: [  {name:"Хвороби органів дихання", val:79}, {name:"Хвороби системи кровообігу", val: 14},{name:"Хвороби сечостатевої системи", val: 13},{name:"Хвороби шкіри та підшкірної клітковини", val: 11},{name:"Інші хвороби", val: 70},{name:"F2010", val: 2153670},{name:"F2016", val: 1861034}]},
{lat: 50.817135752107305, lng: 34.161971592844125, state: "Сумська",  props: [ {name:"Хвороби органів дихання", val:26}, {name:"Хвороби системи кровообігу", val: 4.8}, {name:"Хвороби сечостатевої системи", val: 3.7}, {name:"Хвороби шкіри та підшкірної клітковини", val: 3.3}, {name:"Інші хвороби", val: 22},{name:"F2010", val: 602140}, {name:"F2016", val: 604083}]},
{lat: 49.98, lng: 33.33, state: "Полтавська",  props: [{name:"Хвороби органів дихання", val:39}, {name:"Хвороби системи кровообігу", val: 6.0}, {name:"Хвороби сечостатевої системи", val: 5.4}, {name:"Хвороби шкіри та підшкірної клітковини", val: 5.8}, {name:"Інші хвороби", val: 27},{name:"F2010", val: 913229}, {name:"F2016", val: 833685}]},
{lat: 45.88541933452089, lng: 29.368527598180698, state: "Одеська",   props: [ {name:"Хвороби органів дихання", val:72}, {name:"Хвороби системи кровообігу", val: 12},{name:"Хвороби сечостатевої системи", val: 9.9}, {name:"Хвороби шкіри та підшкірної клітковини", val: 10}, {name:"Інші хвороби", val: 59},{name:"F2010", val: 1728273},{name:"F2016", val: 1632492}]},
{lat: 49.30, lng: 38.80, state: "Луганська",  props: [  {name:"Хвороби органів дихання", val:17}, {name:"Хвороби системи кровообігу", val: 2.3}, {name:"Хвороби сечостатевої системи", val: 1.6}, {name:"Хвороби шкіри та підшкірної клітковини", val: 2.1}, {name:"Інші хвороби", val: 11},{name:"F2010", val: 1331470},{name:"F2016", val: 343382}]},
{lat: 48.44, lng: 31.62, state: "Кіровоградська",  props: [ {name:"Хвороби органів дихання", val:30}, {name:"Хвороби системи кровообігу", val: 4.0}, {name:"Хвороби сечостатевої системи", val: 3.5}, {name:"Хвороби шкіри та підшкірної клітковини", val: 3.1}, {name:"Інші хвороби", val: 22},{name:"F2010", val: 632141}, {name:"F2016", val: 629969}]},
{lat: 47.429461390494204, lng: 36.074740109945395, state: "Запорізька",  props: [ {name:"Хвороби органів дихання", val:56}, {name:"Хвороби системи кровообігу", val: 5.1}, {name:"Хвороби сечостатевої системи", val: 7.1}, {name:"Хвороби шкіри та підшкірної клітковини", val: 6.0}, {name:"Інші хвороби", val: 34},{name:"F2010", val: 1070220},{name:"F2016", val: 1087441}]},
{lat: 50.78, lng: 28.70, state: "Житомирська",  props: [ {name:"Хвороби органів дихання", val:38}, {name:"Хвороби системи кровообігу", val: 5.1}, {name:"Хвороби сечостатевої системи", val: 5.1}, {name:"Хвороби шкіри та підшкірної клітковини", val: 4.4}, {name:"Інші хвороби", val: 29},{name:"F2010", val: 874788}, {name:"F2016", val: 817999}]},
{lat: 48.24, lng: 37.97, state: "Донецька",  props: [ {name:"Хвороби органів дихання", val:45}, {name:"Хвороби системи кровообігу", val: 10},{name:"Хвороби сечостатевої системи", val: 6.8}, {name:"Хвороби шкіри та підшкірної клітковини", val: 5.5}, {name:"Інші хвороби", val: 37},{name:"F2010", val: 2847954},{name:"F2016", val: 1056314}]},
{lat: 48.52, lng: 35.35, state: "Січеславська", props: [ {name:"Хвороби органів дихання", val:120},{name:"Хвороби системи кровообігу", val: 19},{name:"Хвороби сечостатевої системи", val: 27},{name:"Хвороби шкіри та підшкірної клітковини", val: 18},{name:"Інші хвороби", val: 105},{name:"F2010", val: 2888252},{name:"F2016", val: 2899711}]},
{lat: 48.88, lng: 29.00, state: "Вінницька",  props: [ {name:"Хвороби органів дихання", val:55}, {name:"Хвороби системи кровообігу", val: 6.8}, {name:"Хвороби сечостатевої системи", val: 5.5}, {name:"Хвороби шкіри та підшкірної клітковини", val: 4.2}, {name:"Інші хвороби", val: 38},{name:"F2010", val: 1412642},{name:"F2016", val: 1097721}]},
{lat: 49.34, lng: 25.66, state: "Тернопільська",  props: [{name:"Хвороби органів дихання", val:35}, {name:"Хвороби системи кровообігу", val: 4.8}, {name:"Хвороби сечостатевої системи", val: 3.7}, {name:"Хвороби шкіри та підшкірної клітковини", val: 5.0}, {name:"Інші хвороби", val: 23},{name:"F2010", val: 760459}, {name:"F2016", val: 724878}]},
{lat: 50.72, lng: 26.48, state: "Рівненська", props: [ {name:"Хвороби органів дихання", val:37}, {name:"Хвороби системи кровообігу", val: 5.1}, {name:"Хвороби сечостатевої системи", val: 4.9}, {name:"Хвороби шкіри та підшкірної клітковини", val: 5.7}, {name:"Інші хвороби", val: 35},{name:"F2010", val: 909326}, {name:"F2016", val: 880668}]},
{lat: 51.047589790312287, lng: 24.552038199696774, state: "Волинська",  props: [ {name:"Хвороби органів дихання", val:37}, {name:"Хвороби системи кровообігу", val: 3.6}, {name:"Хвороби сечостатевої системи", val: 4.1}, {name:"Хвороби шкіри та підшкірної клітковини", val: 4.2}, {name:"Інші хвороби", val: 25},{name:"F2010", val: 793906}, {name:"F2016", val: 734222}]},
{lat: 48.55, lng: 24.87, state: "Івано-Франківська", props: [ {name:"Хвороби органів дихання", val:53}, {name:"Хвороби системи кровообігу", val: 8.5}, {name:"Хвороби сечостатевої системи", val: 6.8}, {name:"Хвороби шкіри та підшкірної клітковини", val: 7.4}, {name:"Інші хвороби", val: 43},{name:"F2010", val: 1215749},{name:"F2016", val: 1191933}]},
{lat: 47.43, lng: 32.35, state: "Миколаївська",  props: [ {name:"Хвороби органів дихання", val:32}, {name:"Хвороби системи кровообігу", val: 8.0}, {name:"Хвороби сечостатевої системи", val: 6.3}, {name:"Хвороби шкіри та підшкірної клітковини", val: 4.2}, {name:"Інші хвороби", val: 27},{name:"F2010", val: 727504}, {name:"F2016", val: 774092}]},
{lat: 48.305186735673118, lng: 23.572608537325642, state: "Закарпатська",  props: [{name:"Хвороби органів дихання", val:35}, {name:"Хвороби системи кровообігу", val: 6.1}, {name:"Хвороби сечостатевої системи", val: 3.0}, {name:"Хвороби шкіри та підшкірної клітковини", val: 3.7}, {name:"Інші хвороби", val: 29},{name:"F2010", val: 817460}, {name:"F2016", val: 767421}]},
{lat: 49.92, lng: 24.24, state: "Львівська",  props: [{name:"Хвороби органів дихання", val:103},{name:"Хвороби системи кровообігу", val: 11},{name:"Хвороби сечостатевої системи", val: 10},{name:"Хвороби шкіри та підшкірної клітковини", val: 12},{name:"Інші хвороби", val: 65},{name:"F2010", val: 2130490},{name:"F2016", val: 2004843}]}
]



	var marker;
	var layer;

	var createLayerGroup = function (name) {
		var layerGroup = new L.LayerGroup();

		
		layerControl.addOverlay(layerGroup, name);

		return layerGroup;
	};

	var addMarkers = function (layerGroupName, markerFunction) {
		

		var layerGroup = createLayerGroup(layerGroupName);


		for (var i = 0; i < data.length; ++i) {
			var thsObj = data[i];
			
			var lng = thsObj.lng;
			var lat = thsObj.lat;
			var props = thsObj.props;
			layerGroup.addLayer(markerFunction(new L.LatLng(lat, lng), props));
		}
	};

	addMarkers('Cтруктура уперше зареєстрованих випадків захворювань', function (latlng, props) {
		var colorValue = 50;
		var options = {
			color: '#000000',
			weight: 1,
			fillColor: 'hsl(' + colorValue + ',100%,50%)',
			radius: 25,
			fillOpacity: 0.7,
			rotation: 0.0,
			position: {
				x: 0,
				y: 0
			},
			offset: 0,
			numberOfSides: 50,
			barThickness: 10
		};
		
		/*options.data = {}
		options.chartOptions = {}
		for (var i = 0; i < props.length; ++i) {
			//props[0].name
			//props[0].val
			options.data['"'+props[i].name+'"']= props[i].val

			options.chartOptions['"'+props[i].name+'"'] = {
					fillColor: '#c21b62',
					minValue: 0,
					maxValue: 100000000,
					maxHeight: 30,
					displayText: function (value) {
						return value.toFixed(2);
					}
			}*/

			options.data = {
			'Інші хвороби': props[4].val,
			'Хвороби системи кровообігу': props[1].val,
			'Хвороби сечостатевої системи': props[2].val,
			'Хвороби шкіри та підшкірної клітковини': props[3].val,
			'Хвороби органів дихання': props[0].val,
			
		
		};

		options.chartOptions = {
			'Хвороби органів дихання': {
				fillColor: 'rgb(100, 200, 255)',
				minValue: 0,
				maxValue: 1000000,
				maxHeight: 100,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'Хвороби системи кровообігу': {
				fillColor: 'rgb(237, 110, 30)',
				minValue: 0,
				maxValue: 1000000,
				maxHeight: 100,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'Хвороби сечостатевої системи': {
				fillColor: 'rgb(255, 255, 0)',
				minValue: 0,
				maxValue: 1000000,
				maxHeight: 100,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'Хвороби шкіри та підшкірної клітковини': {
				fillColor: 'rgb(255, 102, 255)',
				minValue: 0,
				maxValue: 1000000,
				maxHeight: 100,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},
			'Інші хвороби': {
				fillColor: 'rgb(99, 183, 109)',
				minValue: 0,
				maxValue: 1000000,
				maxHeight: 100,
				displayText: function (value) {
					return value.toFixed(2);
				}
			}
		
		}

		var PieChartMarker = new L.PieChartMarker (latlng, options);

		return PieChartMarker;
		
	});


var bardata = [
{lat: 45.33, lng: 34.04, state: "Автономна Республіка Крим", props: [ {name:"Хвороби органів дихання", val: "немає даних"},{name:"Хвороби системи кровообігу", val: "немає даних"},{name:"Хвороби сечостатевої системи", val: "немає даних"},{name:"Хвороби шкіри та підшкірної клітковини", val: "немає даних"},{name:"Інші хвороби", val: "немає даних"},{name:"F2010", val: 107},{name:"F2016", val: 0}]},
{lat: 49.883796897377181, lng: 29.99075350133413,  state: "Київська", props: [ {name:"Хвороби органів дихання", val:658832}, {name:"Хвороби системи кровообігу", val: 76707}, {name:"Хвороби сечостатевої системи", val: 57898}, {name:"Хвороби шкіри та підшкірної клітковини", val: 73826}, {name:"Інші хвороби", val: 424521},{name:"F2010", val: 391},{name:"F2016", val: 382}]},
{lat: 50.909317367389313, lng: 31.961135527986638, state: "Чернігівська", props: [ {name:"Хвороби органів дихання", val:382303}, {name:"Хвороби системи кровообігу", val: 40844}, {name:"Хвороби сечостатевої системи", val: 36033}, {name:"Хвороби шкіри та підшкірної клітковини", val: 40194}, {name:"Інші хвороби", val: 249171}, {name:"F2010", val: 80}, {name:"F2016", val: 74}]},
{lat: 48.017119187916897, lng: 25.496899756337154, state: "Чернівецька",  props: [ {name:"Хвороби органів дихання", val:268416}, {name:"Хвороби системи кровообігу", val: 36480}, {name:"Хвороби сечостатевої системи", val: 36949}, {name:"Хвороби шкіри та підшкірної клітковини", val: 41513}, {name:"Інші хвороби", val: 199988}, {name:"F2010", val: 64}, {name:"F2016", val: 58}]},
{lat: 48.835231023544559, lng: 30.58993400066705,  state: "Черкаська",  props: [ {name:"Хвороби органів дихання", val:376775}, {name:"Хвороби системи кровообігу", val: 48990}, {name:"Хвороби сечостатевої системи", val: 55672}, {name:"Хвороби шкіри та підшкірної клітковини", val: 48560}, {name:"Інші хвороби", val: 311851},{name:"F2010", val: 103},{name:"F2016", val: 84}]},
{lat: 49.630297455351716, lng: 27.063987216130968, state: "Хмельницька",  props: [ {name:"Хвороби органів дихання", val:348085}, {name:"Хвороби системи кровообігу", val: 67085}, {name:"Хвороби сечостатевої системи", val: 44214}, {name:"Хвороби шкіри та підшкірної клітковини", val: 45395}, {name:"Інші хвороби", val: 337961},{name:"F2010", val: 88}, {name:"F2016", val: 84}]},
{lat: 46.57, lng: 33.00, state: "Херсонська",  props: [ {name:"Хвороби органів дихання", val:240623}, {name:"Хвороби системи кровообігу", val: 30261}, {name:"Хвороби сечостатевої системи", val: 46604}, {name:"Хвороби шкіри та підшкірної клітковини", val: 39820}, {name:"Інші хвороби", val: 219708},{name:"F2010", val: 69}, {name:"F2016", val: 57}]},
{lat: 49.22700288849299, lng: 37.12330598377801,  state: "Харківська",  props: [  {name:"Хвороби органів дихання", val:785688}, {name:"Хвороби системи кровообігу", val: 142448},{name:"Хвороби сечостатевої системи", val: 129733},{name:"Хвороби шкіри та підшкірної клітковини", val: 106785},{name:"Інші хвороби", val: 696380},{name:"F2010", val: 215},{name:"F2016", val: 186}]},
{lat: 51.439361655260726, lng: 33.666495410703419, state: "Сумська",  props: [ {name:"Хвороби органів дихання", val:262000}, {name:"Хвороби системи кровообігу", val: 48828}, {name:"Хвороби сечостатевої системи", val: 37349}, {name:"Хвороби шкіри та підшкірної клітковини", val: 32949}, {name:"Інші хвороби", val: 222957},{name:"F2010", val: 60}, {name:"F2016", val: 60}]},
{lat: 49.342229907595481, lng: 33.896949448908394, state: "Полтавська",  props: [{name:"Хвороби органів дихання", val:391180}, {name:"Хвороби системи кровообігу", val: 60156}, {name:"Хвороби сечостатевої системи", val: 53815}, {name:"Хвороби шкіри та підшкірної клітковини", val: 57654}, {name:"Інші хвороби", val: 270880},{name:"F2010", val: 91}, {name:"F2016", val: 83}]},
{lat: 46.933985208353512, lng: 30.278821049090329, state: "Одеська",   props: [ {name:"Хвороби органів дихання", val:721014}, {name:"Хвороби системи кровообігу", val: 126305},{name:"Хвороби сечостатевої системи", val: 99413}, {name:"Хвороби шкіри та підшкірної клітковини", val: 99559}, {name:"Інші хвороби", val: 586201},{name:"F2010", val: 173},{name:"F2016", val: 163}]},
{lat: 48.56, lng: 38.96, state: "Луганська",  props: [  {name:"Хвороби органів дихання", val:168947}, {name:"Хвороби системи кровообігу", val: 23181}, {name:"Хвороби сечостатевої системи", val: 18581}, {name:"Хвороби шкіри та підшкірної клітковини", val: 21045}, {name:"Інші хвороби", val: 111628},{name:"F2010", val: 133},{name:"F2016", val: 34}]},
{lat: 48.2821413318526, lng: 32.848383575075765, state: "Кіровоградська",  props: [ {name:"Хвороби органів дихання", val:298407}, {name:"Хвороби системи кровообігу", val: 39627}, {name:"Хвороби сечостатевої системи", val: 35004}, {name:"Хвороби шкіри та підшкірної клітковини", val: 31440}, {name:"Інші хвороби", val: 225491},{name:"F2010", val: 63}, {name:"F2016", val: 63}]},
{lat: 46.668963064417795, lng: 35.268150976227979, state: "Запорізька",  props: [ {name:"Хвороби органів дихання", val:559493}, {name:"Хвороби системи кровообігу", val: 51237}, {name:"Хвороби сечостатевої системи", val: 70898}, {name:"Хвороби шкіри та підшкірної клітковини", val: 60428}, {name:"Інші хвороби", val: 345385},{name:"F2010", val: 107},{name:"F2016", val: 109}]},
{lat: 50.34470497378711, lng: 28.008848772771344, state: "Житомирська",  props: [ {name:"Хвороби органів дихання", val:381388}, {name:"Хвороби системи кровообігу", val: 50785}, {name:"Хвороби сечостатевої системи", val: 51127}, {name:"Хвороби шкіри та підшкірної клітковини", val: 43580}, {name:"Інші хвороби", val: 291119},{name:"F2010", val: 87}, {name:"F2016", val: 82}]},
{lat: 47.70600623634017, lng: 37.146351387598507, state: "Донецька",  props: [ {name:"Хвороби органів дихання", val:450605}, {name:"Хвороби системи кровообігу", val: 107948},{name:"Хвороби сечостатевої системи", val: 67605}, {name:"Хвороби шкіри та підшкірної клітковини", val: 55454}, {name:"Інші хвороби", val: 374702},{name:"F2010", val: 285},{name:"F2016", val: 106}]},
{lat: 47.809710553532419, lng: 34.26567591003635,  state: "Січеславська", props: [ {name:"Хвороби органів дихання", val:1200543},{name:"Хвороби системи кровообігу", val: 199252},{name:"Хвороби сечостатевої системи", val: 270413},{name:"Хвороби шкіри та підшкірної клітковини", val: 180732},{name:"Інші хвороби", val: 1048771},{name:"F2010", val: 289},{name:"F2016", val: 290}]},
{lat: 48.89, lng: 28.10, state: "Вінницька",  props: [ {name:"Хвороби органів дихання", val:552633}, {name:"Хвороби системи кровообігу", val: 68613}, {name:"Хвороби сечостатевої системи", val: 55446}, {name:"Хвороби шкіри та підшкірної клітковини", val: 41893}, {name:"Інші хвороби", val: 379136},{name:"F2010", val: 141},{name:"F2016", val: 110}]},
{lat: 49.82, lng: 25.70, state: "Тернопільська",  props: [{name:"Хвороби органів дихання", val:354097}, {name:"Хвороби системи кровообігу", val: 48336}, {name:"Хвороби сечостатевої системи", val: 37258}, {name:"Хвороби шкіри та підшкірної клітковини", val: 50114}, {name:"Інші хвороби", val: 235073},{name:"F2010", val: 76}, {name:"F2016", val: 72}]},
{lat: 51.116726001773777, lng: 26.291966188144293, state: "Рівненська", props: [ {name:"Хвороби органів дихання", val:368905}, {name:"Хвороби системи кровообігу", val: 51073}, {name:"Хвороби сечостатевої системи", val: 49168}, {name:"Хвороби шкіри та підшкірної клітковини", val: 57374}, {name:"Інші хвороби", val: 354148},{name:"F2010", val: 91}, {name:"F2016", val: 88}]},
{lat: 51.139771405594274, lng: 25.347104631503907, state: "Волинська",  props: [ {name:"Хвороби органів дихання", val:366305}, {name:"Хвороби системи кровообігу", val: 36258}, {name:"Хвороби сечостатевої системи", val: 40701}, {name:"Хвороби шкіри та підшкірної клітковини", val: 42301}, {name:"Інші хвороби", val: 248657},{name:"F2010", val: 79}, {name:"F2016", val: 73}]},
{lat: 48.86, lng: 24.19, state: "Івано-Франківська", props: [ {name:"Хвороби органів дихання", val:533796}, {name:"Хвороби системи кровообігу", val: 85168}, {name:"Хвороби сечостатевої системи", val: 68176}, {name:"Хвороби шкіри та підшкірної клітковини", val: 74352}, {name:"Інші хвороби", val: 430441},{name:"F2010", val: 122},{name:"F2016", val: 119}]},
{lat: 47.187484650379005, lng: 31.477182047756177, state: "Миколаївська",  props: [ {name:"Хвороби органів дихання", val:320515}, {name:"Хвороби системи кровообігу", val: 79864}, {name:"Хвороби сечостатевої системи", val: 63256}, {name:"Хвороби шкіри та підшкірної клітковини", val: 42286}, {name:"Інші хвороби", val: 268171},{name:"F2010", val: 73}, {name:"F2016", val: 77}]},
{lat: 48.316709437583363, lng: 22.708405894056977, state: "Закарпатська",  props: [{name:"Хвороби органів дихання", val:346649}, {name:"Хвороби системи кровообігу", val: 60998}, {name:"Хвороби сечостатевої системи", val: 29900}, {name:"Хвороби шкіри та підшкірної клітковини", val: 36921}, {name:"Інші хвороби", val: 292953},{name:"F2010", val: 82}, {name:"F2016", val: 76}]},
{lat: 49.203957484672507, lng: 23.342154499120653, state: "Львівська",  props: [{name:"Хвороби органів дихання", val:1029572},{name:"Хвороби системи кровообігу", val: 108967},{name:"Хвороби сечостатевої системи", val: 101134},{name:"Хвороби шкіри та підшкірної клітковини", val: 116807},{name:"Інші хвороби", val: 648363},{name:"F2010", val: 213},{name:"F2016", val: 200}]}
]


	var addMarkers = function (layerGroupName, markerFunction) {
		

		var layerGroup = createLayerGroup(layerGroupName);


		for (var i = 0; i < bardata.length; ++i) {
			var thsObj = bardata[i];
			
			var lng = thsObj.lng;
			var lat = thsObj.lat;
			var props = thsObj.props;
			layerGroup.addLayer(markerFunction(new L.LatLng(lat, lng), props));
		}
	};

	addMarkers('Динаміка захворюваності', function (latlng, props) {
		var colorValue = Math.random() * 360;
		var options = {
			color: '#000',
			weight: 1,
			fillColor: 'hsl(' + colorValue + ',100%,50%)',
			radius: 30,
			fillOpacity: 0.7,
			rotation: 0.0,
			position: {
				x: 0,
				y: 0
			},
			offset: 0,
			width: 8
		};

		options.data = {
			'2010 р.': props[5].val,
			'2016 р.': props[6].val,
					
		};

		options.chartOptions = {
			'2010 р.': {
				fillColor: '#F2F0F7',
				minValue: 0,
				maxValue: 400,
				maxHeight: 70,
				displayText: function (value) {
					return value.toFixed(2);
				}
			},

			'2016 р.': {
				fillColor: 'rgb(255, 0, 0)',
				minValue: 0,
				maxValue: 400,
				maxHeight: 70,
				displayText: function (value) {
					return value.toFixed(2);
				}
			}
		}

var barChart = new L.BarChartMarker(latlng, options);

		return barChart;
	});





L.control.scale().addTo(map);

// coordinates
L.control.coordinates().addTo(map);
		//add configured controls
		L.control.coordinates({
			position:"topleft",
			decimals:6,
			useDMS:true,
			labelTemplateLat:"N {y}",
			labelTemplateLng:"E {x}",
			useLatLngOrder:true
		}).addTo(map);


var iconLayersControl = new L.Control.IconLayers(
    [
        {
            title: 'OpenStreetMap', // use any string
            layer: openstreetmap, // any ILayer
            icon: 'img/open.png' // 80x80 icon
        },
        {
            title: 'ESRI Супутник',
            layer: Esri_WorldImagery,
            icon: 'img/satel.jpg'
        },
        {
            title: 'ESRI',
            layer: Esri_WorldStreetMap,
            icon: 'img/Esri.jpg'
        },
        {
            title: 'ESRI Топографічна',
            layer: Esri_WorldTopoMap,
            icon: 'img/topo.jpg'
        }
    ], {
        position: 'bottomright',
        maxLayersInRow: 5
    }
);

// new L.Control.IconLayers(layers)
// new L.Control.IconLayers(options)
// are also ok
/*
iconLayersControl.addTo(map);



// define toolbar options
var options = {
    position: 'topleft', // toolbar position, options are 'topleft', 'topright', 'bottomleft', 'bottomright'
    drawMarker: true, // adds button to draw markers
    drawPolyline: true, // adds button to draw a polyline
    drawRectangle: true, // adds button to draw a rectangle
    drawPolygon: true, // adds button to draw a polygon
    drawCircle: true, // adds button to draw a cricle
    cutPolygon: true, // adds button to cut a hole in a polygon
    editMode: true, // adds button to toggle edit mode for all layers
    removalMode: true, // adds a button to remove layers
};

// add leaflet.pm controls to the map
map.pm.addControls(options);
*/
var zoom_bar = new L.Control.ZoomBar({position: 'topleft'}).addTo(map);

// линейка
var cost_above_ground = 17.89,
    html = [
        '<table>',
        ' <tr><td class="cost_label">Cost Above Ground:</td><td class="cost_value">${total_above_ground}</td></tr>',
        ' <tr><td class="cost_label">Cost Underground:</td><td class="cost_value">${total_underground}</td></tr>',
        '</table>'
    ].join(''),
    numberWithCommas = function(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

var Ruler = L.Control.LinearMeasurement.extend({
    layerSelected: function(e){

        /* cost should be in feet */

        var distance = e.total.scalar;

        if(e.total.unit === 'mi'){
            distance *= e.sub_unit;

        } else if(e.total.unit === 'km'){
            distance *= 3280.84;

        } else if(e.total.unit === 'm'){
            distance *= 3.28084;
        }

        var data = {
            total_above_ground: numberWithCommas(L.Util.formatNum(cost_above_ground * distance, 2)),
            total_underground: numberWithCommas(L.Util.formatNum(cost_underground * distance, 2))
        };

        var content = L.Util.template(html, data),
            popup = L.popup().setContent(content);

        e.total_label.bindPopup(popup, { offset: [45, 0] });
        e.total_label.openPopup();
    }
});

map.addControl(new Ruler({
  unitSystem: 'metric',
  color: '#FF0080'
}));

/*var stateChangingButton = L.easyButton({
    states: [{
            stateName: 'zoom-to-forest',        // name the state
            icon:      '<span class="fas fa-atlas fa-3x"></span>',               // and define its properties
            title:     'Легенда',      // like its title
            onClick:  function prepareFrame() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "legend.html");
        ifrm.style.width = "640px";
        ifrm.style.height = "480px";
        document.body.appendChild(ifrm);
    
}
        }], position: 'topright'
});
*/
//buttons
var stateChangingButton2 = L.easyButton({
    states: [{
            stateName: '',        // name the state
            icon: '<span class="fas fa-map-marker-alt " style="font-size:42px; color: dodgerblue"></span>',  // and define its properties
            title:     'Легенда',      // like its title
            onClick:  function (mylink, windowname, specs) {
window.open('legend.html',"","width="+600+",height="+600+",screenX=1400,screenY=1000,scrollbars=yes,menubar=no,toolbar=no");
return false
}
        }], position: 'topright'
});

stateChangingButton2.addTo(map);

stateChangingButton2.button.style.height = '44px'
stateChangingButton2.button.style.width = '44px'

var stateChangingButton = L.easyButton({
    states: [{
            stateName: 'zoom-to-forest',        // name the state
            icon: '<span class="fas fa-info " style="font-size:42px; color: dodgerblue"></span>',  // and define its properties
            title:     'Про карту',      // like its title
            onClick:  function (mylink, windowname, specs) {
window.open('info.html',"","width="+600+",height="+450+",screenX=1400,screenY=1000,scrollbars=yes,menubar=no,toolbar=no");
return false
}
        }], position: 'topright'
});

stateChangingButton.addTo(map);

stateChangingButton.button.style.height = '44px'
stateChangingButton.button.style.width = '44px'








