angular.module('app').controller('indexCtrl', ['$rootScope', 'indexService', '$state', '$interval', indexCtrl]);

function indexCtrl(r, indexService, state, t) {
    var vm = this;
    vm.data = r.getStorage('data') ? r.getStorage('data') : [];
    vm.last = vm.data[vm.data.length - 1];
    vm.hashesPerSecond = 0;
    vm.xmrPending = 0;

    vm.fetchData = function() {
        indexService.getEstado().then(function(data) {
            data.date = (new Date()).getTime();
            data.xmr = data.stats.balance / 1000000000000;
            data.xmrDiff = data.xmr - (vm.last ? vm.last.xmr : 0);
            indexService.getValue().then(function(resp) {
                data.value = resp.data[0].price_usd;
                vm.data.push(data);
                vm.last = data;
                r.setStorage('data', vm.data);
            })

        });
    };

    vm.fetchDataCoinhive = function() {
        indexService.getEstadoCH().then(function(resp) {
            vm.hashesPerSecond = resp.data.hashesPerSecond;
            vm.xmrPending = resp.data.xmrPending;
        });
    };


    vm.fetchDataCoinhive();
    t(function() {
        vm.fetchDataCoinhive();
    }, 15000);


    vm.fetchData();
    t(function() {
        vm.fetchData();
    }, 300000);
}