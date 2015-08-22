(function() {
    'use strict';

    angular
        .module('app.pictures')
        .factory('Instagram', factory);

    factory.$inject = ['$http', 'IG_URL', 'IG_CLIENT_ID'];

    function factory($http, IG_URL, IG_CLIENT_ID) {
        var params = { client_id: IG_CLIENT_ID, callback: 'JSON_CALLBACK' };

        return {
            getRecentMediaForTag: getRecentMediaForTag,
            getMedia: getMedia
        };

        function getRecentMediaForTag(tag) {
            var url = IG_URL + '/tags/$/media/recent'.replace('$', tag);

            return $http
                .jsonp(url, {params: params})
                .then(successHandler)
                .catch(errorHandler);
        }

        function getMedia(id) {
            var url = IG_URL + '/media/$'.replace('$', id);

            return $http
                .jsonp(url, {params: params})
                .then(successHandler)
                .catch(errorHandler);
        }

        function successHandler(response) {
            return response.data.data;
        }

        function errorHandler(response) {
            throw new Error(response.data.meta.error_message);
        }
    }
})();
