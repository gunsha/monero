angular.module('app').controller('indexCtrl', ['$rootScope', 'indexService', '$state','$interval', indexCtrl]);

function indexCtrl(r, indexService, state, t) {
    var vm = this;
    vm.colors = [
    'btn-info',
    'btn-danger',
    'btn-primary',
    'btn-success',
    'btn-default',
    'btn-warning',
    'btn-default'
    ];
    vm.fetchData = function(){
        indexService.getEstado().then(function(data) {
            vm.estadosSubte = data;
            for (var i in r.subtes) {
                r.subtes[i].estado = data[r.subtes[i].id];
            }
        });
    };

    vm.fetchData();

    t(function(){
        vm.fetchData();
    },15000);
}

/*

linea b

ramales
a alem 1239
a rosas 1233


{parada_id: 20086, ramal_ids: [1239]}
{parada_id: 20085, ramal_ids: [1239]}
malabia {parada_id: 20083, ramal_ids: [1233]}
{parada_id: 20082, ramal_ids: [1239]}
{parada_id: 20081, ramal_ids: [1239]}
{parada_id: 20072, ramal_ids: [1239]}
{parada_id: 20071, ramal_ids: [1239]}
pasteur {parada_id: 20070, ramal_ids: [1233]}
{parada_id: 20069, ramal_ids: [1239]}
{parada_id: 20068, ramal_ids: [1239]}


linea d
9 de julio {parada_id: 20104, ramal_ids: [1235]}
linea a
9 de julio {parada_id: 20053, ramal_ids: [1232]}
*/