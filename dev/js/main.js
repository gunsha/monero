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