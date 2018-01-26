angular.module('app').controller('indexCtrl', ['$rootScope', 'indexService', '$state','$interval', indexCtrl]);

function indexCtrl(r, indexService, state, t) {
    var vm = this;
    vm.data = r.getStorage('data') ? r.getStorage('data') : [];
    vm.fetchData = function(){
        indexService.getEstado().then(function(data) {
            data.date = (new Date()).getTime();
            data.xmr = data.stats.balance / 1000000000000;
            indexService.getValue().then(function(resp){
                data.value = resp.data.ticker.price;
                vm.data.push(data);
                vm.last = data;
                r.setStorage('data',vm.data);
            })
            
        });
    };

    vm.fetchData();

    t(function(){
        vm.fetchData();
    },300000);
}