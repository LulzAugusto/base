(function() {
    'use strict';

    angular
        .module('app.pictures')
        .config(config);

        config.$inject = ['$routeProvider'];

        function config($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/pictures/list.html',
                    controller: 'List',
                    controllerAs: 'vm'
                })
                .when('/view/:id', {
                    templateUrl: 'app/pictures/pictureview.html',
                    controller: 'View',
                    controllerAs: 'vm'
                });
        }
})();
