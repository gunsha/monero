angular.module('app').factory('indexService', ['$rootScope', '$http', indexService]);

function indexService(r, h) {
    var service = {
        getEstado: getEstado
    };
    return service;

    function getEstado() {
        return h.get(apiRoute + 'estado/1').then(function(resp) {
            return resp.data;
        });
    }



}