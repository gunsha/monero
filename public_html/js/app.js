var monthsShortDot$1 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
var monthsShort$2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

moment.defineLocale('es', {
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: function(m, format) {
        if (!m) {
            return monthsShortDot$1;
        } else if (/-MMM-/.test(format)) {
            return monthsShort$2[m.month()];
        } else {
            return monthsShortDot$1[m.month()];
        }
    },
    monthsParseExact: true,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
        sameDay: function() {
            return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextDay: function() {
            return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: function() {
            return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastDay: function() {
            return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: function() {
            return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
});

var subtesJson = [{
    "id": "145",
    "nombre_corto": "A",
    "cabeceras": "San Pedrito - Plaza de Mayo",
    "tiempo_entre_cabeceras": 36,
    "estaciones": [{
        "estacion": "SAN PEDRITO"
    }, {
        "estacion": "SAN JOSE DE FLORES"
    }, {
        "estacion": "CARABOBO"
    }, {
        "estacion": "PUAN"
    }, {
        "estacion": "PRIMERA JUNTA"
    }, {
        "estacion": "ACOYTE"
    }, {
        "parada_id": 20061,
        "estacion": "RIO DE JANEIRO"
    }, {
        "estacion": "CASTRO BARROS"
    }, {
        "estacion": "LORIA"
    }, {
        "estacion": "PLAZA DE MISERERE"
    }, {
        "estacion": "ALBERTI"
    }, {
        "estacion": "PASCO"
    }, {
        "estacion": "CONGRESO"
    }, {
        "estacion": "SAENZ PEÑA"
    }, {
        "estacion": "LIMA"
    }, {
        "estacion": "PIEDRAS"
    }, {
        "parada_id": 20051,
        "estacion": "PERU"
    }, {
        "estacion": "PLAZA DE MAYO"
    }],
    "ramales": [{
        "id": 1232,
        "nombre": "San Pedrito"
    }, {
        "id": 1238,
        "nombre": "Plaza de Mayo"
    }]

}, {
    "id": "146",
    "nombre_corto": "B",
    "cabeceras": "J. M. de Rosas - L. N. Alem",
    "ramales": [{
        "nombre": "J. M. de Rosas",
        "id": 1239
    }, {
        "nombre": "L. N. Alem",
        "id": 1233
    }],
    "tiempo_entre_cabeceras": 34,
    "estaciones": [{
        "parada_id": 20313,
        "estacion": "ROSAS"
    }, {
        "parada_id": 20312,
        "estacion": "ECHEVERRIA"
    }, {
        "parada_id": 20087,
        "estacion": "INCAS"
    }, {
        "parada_id": 20086,
        "estacion": "TRONADOR"
    }, {
        "parada_id": 20085,
        "estacion": "FEDERICO LACROZE"
    }, {
        "parada_id": 20084,
        "estacion": "DORREGO"
    }, {
        "parada_id": 20083,
        "estacion": "MALABIA"
    }, {
        "parada_id": 20082,
        "estacion": "ANGEL GALLARDO"
    }, {
        "parada_id": 20081,
        "estacion": "MEDRANO"
    }, {
        "parada_id": 20072,
        "estacion": "CARLOS GARDEL"
    }, {
        "parada_id": 20071,
        "estacion": "PUEYRREDON"
    }, {
        "parada_id": 20070,
        "estacion": "PASTEUR"
    }, {
        "parada_id": 20069,
        "estacion": "CALLAO"
    }, {
        "parada_id": 20068,
        "estacion": "URUGUAY"
    }, {
        "parada_id": 20067,
        "estacion": "C. PELLEGRINI"
    }, {
        "parada_id": 20066,
        "estacion": "FLORIDA"
    }, {
        "parada_id": 20080,
        "estacion": "LEANDRO N. ALEM"
    }]
}, {
    "id": "147",
    "nombre_corto": "C",
    "cabeceras": "Constitución - Retiro",
    "tiempo_entre_cabeceras": 18
}, {
    "id": "148",
    "nombre_corto": "D",
    "cabeceras": "C. de Tucumán - Catedral",
    "tiempo_entre_cabeceras": 32,
    "estaciones": [{
        "parada_id": 20118,
        "estacion": "CONGRESO DE TUCUMAN"
    }, {
        "parada_id": 20117,
        "estacion": "JURAMENTO"
    }, {
        "parada_id": 20116,
        "estacion": "JOSE HERNANDEZ"
    }, {
        "parada_id": 20115,
        "estacion": "OLLEROS"
    }, {
        "parada_id": 20114,
        "estacion": "MINISTRO CARRANZA"
    }, {
        "parada_id": 20113,
        "estacion": "PALERMO"
    }, {
        "parada_id": 20112,
        "estacion": "PLAZA ITALIA"
    }, {
        "parada_id": 20111,
        "estacion": "R.SCALABRINI ORTIZ"
    }, {
        "parada_id": 20110,
        "estacion": "BULNES"
    }, {
        "parada_id": 20109,
        "estacion": "AGÜERO"
    }, {
        "parada_id": 20108,
        "estacion": "PUEYRREDON"
    }, {
        "parada_id": 20107,
        "estacion": "FACULTAD DE MEDICINA"
    }, {
        "parada_id": 20106,
        "estacion": "CALLAO"
    }, {
        "parada_id": 20105,
        "estacion": "TRIBUNALES"
    }, {
        "parada_id": 20104,
        "estacion": "9 DE JULIO"
    }, {
        "parada_id": 20103,
        "estacion": "CATEDRAL"
    }],
    "ramales": [{
        "id": 1235,
        "nombre": "Congreso de Tucumán"
    }, {
        "id": 1241,
        "nombre": "Catedral"
    }]
}, {
    "id": "149",
    "nombre_corto": "E",
    "cabeceras": "Pza. de los Virreyes - Bolívar",
    "tiempo_entre_cabeceras": 30
}, {
    "id": "150",
    "nombre_corto": "H",
    "cabeceras": "Hospitales - Las heras",
    "tiempo_entre_cabeceras": 22
}, {
    "id": "168",
    "nombre_corto": "P",
    "cabeceras": "Int. Saguier - Ctro. Cívico Lugano / Int. Saguier - Gral. Savio",
    "tiempo_entre_cabeceras": 32
}];
var apiRoute = 'http://transporte.usig.buenosaires.gob.ar/api/v3/';

angular.module('app', ['ui.router', 'angular-growl', 'blockUI', 'ui.bootstrap', ])
    .run(['$rootScope', '$state', '$anchorScroll', 'growl', function(r, s, $anchorScroll, growl) {
        r.hideNav = false;
        r.navTitle = '';
        r.active = s.current.name;

        r.setStorage = function(name, obj) {
            localStorage.setItem(name, JSON.stringify(obj));
        };

        r.getStorage = function(name) {
            return JSON.parse(localStorage.getItem(name));
        };

        r.findByAttr = function(a, q, attr) {
            return a.filter(function(i) {
                if (i[attr] === q) {
                    return i;
                }
                return false;
            })[0];
        };

        r.subtes = subtesJson;

        r.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            r.profile = r.getStorage('profile');
            r.hideNav = false;
            r.hideGrowl = toState.data && toState.data.hideGrowl;
            if (toState.data && toState.data.requiresLogin && !r.user || (toState.data && toState.data.requiresRole && !r.hasAnyRole(toState.data.requiresRole))) {
                growl.error('acceso no autorizado');
                event.preventDefault();
                if (s.current !== 'app') {
                    s.go('app');
                    swal.close();
                    $('.modal').modal('hide');
                }
            }
            $anchorScroll(0);
        });

        r.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            if (toState.data && toState.data.pageTitle)
                r.navTitle = toState.data.pageTitle;
            r.active = s.current.name;
        });

        r.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
            console.log(unfoundState.to);
            console.log(unfoundState.toParams);
            console.log(unfoundState.options);
            s.go('app');
        });

        r.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            console.log(error);
            s.go('app');
        });

        r.showWait = function() {
            r.loading = true;
        };
        r.dismissWait = function() {
            r.loading = false;
        };
    }])
    .factory('httpInerceptor', ['$q', 'growl', '$rootScope', function($q, growl, r) {
        return {
            response: function(response) {
                if (response.data.status !== 406 && response.data.message)
                    growl.success(response.data.message);
                r.block = false;
                return response || $q.when(response);
            },
            responseError: function(response) {
                var msg;
                if (response.status == 406) {
                    msg = response.data;
                } else if (response.status == 403) {
                    msg = "Acceso denegado.";
                    r.logout();
                } else {
                    msg = "Ocurrio un error inesperado.";
                }
                growl.error(msg);
                return $q.reject(response);
            }
        };
    }])
    .config(['$httpProvider', 'growlProvider', 'blockUIConfig',
        function($httpProvider, growlProvider, blockUIConfig) {
            $httpProvider.interceptors.push('httpInerceptor');
            growlProvider.globalTimeToLive(3000);
            growlProvider.globalDisableCountDown(true);
            growlProvider.globalDisableIcons(true);
            blockUIConfig.template = '<div class="cssload-container"><div class="cssload-speeding-wheel"></div></div>';

        }
    ])
    .filter('unsafe', ['$sce', function($sce) {
        return $sce.trustAsHtml;
    }])
    .filter('splitComma', function() {
        return function(input) {
            var text = typeof input === 'string' ? input.split(',') : input;
            var count = 0;
            var rText = '';
            text.map(function(i) {
                rText += i.charAt(0).toUpperCase() + i.slice(1).toLowerCase() + ',';
                if (count % 2 == 1 && count !== text.length - 1) {
                    rText += '<br>';
                }
                count++;
            });
            return rText.substring(0, rText.length - 1);
        };
    })
    .filter('replaceCommaSpace', function() {
        return function(input) {
            if (input)
                return input.replace(/,/g, ' ');
        };
    })
    .filter('monthNameUC', function() {
        return function(input) {
            var date = new Date(input);
            return months.short[date.getMonth()].toUpperCase();
        };
    })
    .filter('year', function() {
        return function(input) {
            var date = new Date(input);
            return date.getFullYear();
        };
    })
    .filter('fullDateShort', function() {
        return function(input) {
            var date = new Date(input);
            return date.getDate() + ' ' + months.short[date.getMonth()] + ' ' + date.getFullYear();
        };
    })
    .filter('upperCaseFL', function() {
        return function(input) {
            if (input) {
                var words = input.split(' ');
                for (var i in words) {
                    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
                }
                return words.join(' ');
            }
        };
    })
    .directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if (event.which === 13) {
                    event.preventDefault();
                    scope.$apply(function() {
                        scope.$eval(attrs.ngEnter, {
                            'event': event
                        });
                    });
                }
            });
        };
    })
    .directive('isotopeRefresh', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                if (attrs.ngRepeat && scope.$last) {
                    $timeout(function() {

                    }, 300);
                }
            }
        };
    }])
    .directive('convertToNumber', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function(val) {
                    return val != null ? parseInt(val, 10) : null;
                });
                ngModel.$formatters.push(function(val) {
                    return val != null ? '' + val : null;
                });
            }
        };
    });
//FIX PARA MODALES EN TEMPLATES
function appendModal() {
    var checkeventcount = 1,
        prevTarget;
    $('.modal').on('show.bs.modal', function(e) {
        if (typeof prevTarget == 'undefined' || (checkeventcount == 1 && e.target != prevTarget)) {
            prevTarget = e.target;
            checkeventcount++;
            e.preventDefault();
            $(e.target).appendTo('body').modal('show');
        } else if (e.target == prevTarget && checkeventcount == 2) {
            checkeventcount--;
        }
    });
}
angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    '@': {
                        templateUrl: 'templates/layout.html'
                    },
                    'contentView@app': {
                        templateUrl: 'templates/index.html',
                        controller: 'indexCtrl as ctrl'
                    }
                },
                data:{
                    // requiresLogin: true,
                    // requiresRole: ['ADMIN'],
                    pageTitle:'Inicio'
                }
            })
            .state('app.linea', {
                url: 'linea/:indexLinea',
                views: {
                    'contentView@app': {
                        templateUrl: 'templates/estaciones.html',
                        controller: 'estacionesCtrl as ctrl'
                    }
                },
                data:{
                    // requiresLogin: true,
                    // requiresRole: ['ADMIN'],
                    pageTitle:'Inicio'
                }
            });
        $locationProvider.html5Mode(true);
    }]);
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
angular.module('app').factory('estacionesService', ['$rootScope', '$http', estacionesService]);

function estacionesService(r, h) {
    var service = {
        getEstacion: getEstacion
    };
    return service;

        function getEstacion(parada,ramal) {
        return h.get(apiRoute + 'predictivo/?parada='+parada+'&ramal='+ramal).then(function(resp) {
            return resp.data;
        });
    }

}
angular.module('app').controller('estacionesCtrl', ['$rootScope', 'estacionesService', '$state', '$interval', estacionesCtrl]);

function estacionesCtrl(r, estacionesService, state, t) {
	var vm = this;
	vm.linea = r.subtes[state.params.indexLinea];
	vm.proximosServicios = [];
	vm.estacion;
    vm.ramales;
	if(!vm.linea){
		state.go('app');
	}

	t(function(){
		if(vm.estacion && vm.ramales){
			vm.searchEstacion(vm.estacion,vm.ramales);
		}
	},15000);

    vm.searchEstacion = function(index,ramales,col){
    	vm.estacion = index;
    	vm.ramales = ramales;
    	if(col){
    		if(!$($('.collapse')[index]).hasClass('in'))
    		$($('.collapse')[index]).collapse('show');
    		$('.collapse').collapse('hide');
    		
    	}
    	vm.linea.estaciones[index].proximosServicios = [];
    	estacionesService.getEstacion(vm.linea.estaciones[vm.estacion].parada_id,ramales[0].id).then(function(data){
    		vm.linea.estaciones[index].proximosServicios[0] = data.proximosServicios.predicciones;
    	});
    	estacionesService.getEstacion(vm.linea.estaciones[vm.estacion].parada_id,ramales[1].id).then(function(data){
    		vm.linea.estaciones[index].proximosServicios[1] = data.proximosServicios.predicciones;
    	});
    };


}