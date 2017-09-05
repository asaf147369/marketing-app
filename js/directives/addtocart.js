app.directive('installApp', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/addtocart.html',

    link: function(scope, element, attrs) {
      scope.buttonText = "Add to cart",
      scope.addtocart = false,

      scope.cart = function() {
        element.toggleClass('btn-active')
        if(scope.addtocart) {
          scope.buttonText = "Add to cart";
          scope.addtocart = false;
        } else {
          scope.buttonText = "Remove from cart";
          scope.addtocart = true;
        }
      }
    },
  };
});
