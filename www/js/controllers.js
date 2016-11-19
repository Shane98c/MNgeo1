angular.module('starter.controllers', [ 'ion-BottomSheet'])

.controller('MapCtrl', function($scope, $http, $state) {

    var map = L.map('mapid').setView([ 44.9, -93.26], 8);
    map.locate({setView: true, maxZoom: 16});
    L.esri.tiledMapLayer({
        url: "https://arcgis.dnr.state.mn.us/arcgis/rest/services/elevation/mn_hillshade_web_mercator/MapServer"
      }).addTo(map);

      L.esri.tiledMapLayer({
          url: "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer"
        }).addTo(map);

      L.esri.tiledMapLayer({
          url: "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer"
        }).addTo(map);

      function onLocationFound(e) {
        var radius = e.accuracy / 2;
        L.circle(e.latlng, radius).addTo(map);
      }
      map.on('locationfound', onLocationFound);

      function onMapClick(e) {
        console.log("You clicked the map at " + e.latlng.lat);
        getUnder(e);
      }
      map.on('click', onMapClick);

      function getUnder(e) {
        $scope.under = {};
        var url =  ['http://maps2.dnr.state.mn.us/cgi-bin/mapserv64?map=WUYH_MAPFILE&mode=nquery&qformat=json&mapxy=',e.latlng.lng, '+', e.latlng.lat].join('');
        console.log(url);

        $http({
          url: url,
          method: 'GET',
        }).success (function(data){
          $scope.under = data.result;
          printUnder();
        })
      }

    function printUnder() {
      var geology = $scope.under.geology;
      console.log(geology);
      // $state.go("tab-under");
      // $bottomSheet.show({
      //   buttons: ['ROCKS', 'test']
      // });
    }
})
