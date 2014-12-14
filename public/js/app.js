(function () {
    "use strict";

    var module = angular.module("pizzaApp", ["ngRoute"]);
    module.config(function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'templates/order.tmpl.html',
            controller: 'orderController',
            controllerAs: 'order'
        });

        $routeProvider.when('/status', {
            templateUrl: 'templates/status.tmpl.html',
            controller: 'statusController',
            controllerAs: 'status'
        });

        $routeProvider.otherwise({redirectTo: '/'});

    });

    module.controller("orderController", function () {
        var order = this;
        order.orderCount = 0;

        order.submitOrder = function () {
            order.orderCount++;
        };

    });

    module.controller("statusController", function () {
        var status = this;

        status.steps = [{
            num: 1,
            name: "Make Pie"
        }, {
            num: 2,
            name: "Bake Pie"
        }, {
            num: 3,
            name: "Box Pie"
        }, {
            num: 4,
            name: "Prepare Pie"
        }, {
            num: 5,
            name: "Send Pie"
        }];

        status.currentStep = 2;

    });

    module.directive('wmPizzaBar', function () {

        return {
            link: function (scope, element, attrs) {
                element.text("this is the status bar");
            },
            restrict: "E"
        };
    });


})();