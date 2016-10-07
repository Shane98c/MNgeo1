angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope) {

  // var crs = new L.Proj.CRS('EPSG:54009', '+proj=moll +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs', {
  //     origin: [-19844104.7157449, 29766157.3486128],
  //     resolutions: [
  //       66145.9656252646,
  //       33072.9828126323,
  //       16933.3672000677,
  //       8466.68360003387
  //     ]
  //   });

    var map = L.map('mapid').setView([ 44.9, -93.26], 7);

    L.esri.tiledMapLayer({
        url: "http://arcgis.dnr.state.mn.us/arcgis/rest/services/elevation/mn_hillshade_web_mercator/MapServer"
      }).addTo(map);

    // L.tileLayer('http://arcgis.dnr.state.mn.us/arcgis/rest/services/elevation/mn_hillshade_web_mercator/MapServer/tile/{z}/{y}/{x}', {
    // }).addTo(map);

  // var mymap = L.map('mapid',{crs: L.CRS.EPSG4326}).setView([44.98, -93.23], 10);
  //   L.tileLayer('http://arcgis.dnr.state.mn.us/arcgis/rest/services/elevation/mn_hillshade_web_mercator/MapServer/tile/{z}/{y}/{x}', {
  //   }).addTo(mymap);
})
