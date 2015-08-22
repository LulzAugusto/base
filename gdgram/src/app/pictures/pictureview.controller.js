(function() {
    'use strict';

    angular
        .module('app.pictures')
        .controller('View', controller);

    controller.$inject = ['$http', '$routeParams', 'Instagram'];

    function controller($http, $routeParams, Instagram) {
        /* jshint validthis:true */
        var vm = this;

        vm.formatDate = formatDate;

        activate();

        function activate() {
            getPicture();
        }

        function formatDate(time) {
            var date = new Date(Number(time));
            return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        }

        function getPicture() {
            Instagram
                .getMedia($routeParams.id)
                .then(function(picture) {
                    vm.picture = picture;
                    return picture;
                });
        }
    }
})();
