//http://plnkr.co/edit/W1KxuL?p=preview

(function(){
    angular.module('mutart')
	 .directive('myInput', ['$timeout', function ($timeout) {
	     return {
	         restrict: 'E',
	         templateUrl: '/Scripts/app/components/input/my-input.html',
	         replace: false,
	         scope: {
	             title: "@"
	         },
	         require: ['^form', 'ngModel'],
	         link: function (scope, elem, attrs, ctrls) {
	             scope.form = ctrls[0];
	             var ngModel = ctrls[1];

	             if (attrs.required !== undefined) {
	                 // If attribute required exists
	                 // ng-required takes a boolean
	                 scope.required = true;
	             }

	             if (attrs.maxlen !== undefined) {
	                 scope.maxlen = attrs.maxlen;
	             }

	             scope.$watch('name', function () {
	                 ngModel.$setViewValue(scope.name);
	             });

	         }
	     }
	 }]);
}())