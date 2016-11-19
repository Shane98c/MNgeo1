app.factory('DataService', function() {
  var service={};
  service.getUnder = function(e) {
    $scope.under = {};
    var url =  ['http://maps2.dnr.state.mn.us/cgi-bin/mapserv64?map=WUYH_MAPFILE&mode=nquery&qformat=json&mapxy=',e.latlng.lng, '+', e.latlng.lat].join('');
    console.log(url);

    $http({
      url: url,
      method: 'GET',
    }).success (function(data){
      $scope.under = data.result;
    })
  }
  return service;
});
