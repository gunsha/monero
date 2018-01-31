angular.module('app').factory('indexService', ['$rootScope', '$http', indexService]);

function indexService(r, h) {
    var service = {
        getEstado: getEstado,
        getValue: getValue,
        getEstadoCH:getEstadoCH
    };
    return service;

    function getEstado() {
        return h.get('https://p5.minexmr.com/stats_address?address=47MxJgPuXtQTDURD1rUw4j9uo5z8Cak2FgfmUWxKtzeWjc2uWhQn2RSU4xenqVLWzDUZpasSK59c3ewV27EopeQRMGVhXyL&longpoll=false').then(function(resp) {
            return resp.data;
        });
    }
    function getValue(){
    	return h.get('https://api.coinmarketcap.com/v1/ticker/monero/',function(resp){
    		return resp;
    	});
    }
    function getEstadoCH(){
        return h.get('http://apivimedo.us-east-1.elasticbeanstalk.com/coinhive/stats',function(resp){
            return resp;
        });   
    }
}