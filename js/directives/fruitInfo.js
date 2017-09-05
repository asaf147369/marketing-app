app.directive('appInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/fruitInfo.html'
  };
});
