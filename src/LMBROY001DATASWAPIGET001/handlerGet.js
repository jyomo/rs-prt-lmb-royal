'use strict';

var utilDB = require('./app.js');
const constant = require('./Util/Constant.js');
const FilterRequest = require('./Bean/FilterRequest.js');
var isNullOrEmpty = require('is-null-or-empty');

module.exports.get = async (event, context, callback) => {

  context.callbackWaitsForEmptyEventLoop = false // Add this line
  FilterRequest.request = event;

  var getReturn = function (err, response) {
    var retorna = {};
    if (err) {
      retorna = { tipo: constant.ESTADO_SERVICE_ERROR.TIPO, mensaje: constant.MENSAJE_SERVICE.ERROR_GENERAL, data: null };
    } else {
      // console.log("response", response);
      if (!isNullOrEmpty(response)) {
        retorna = { tipo: constant.ESTADO_SERVICE_SUCCESS.TIPO, mensaje: constant.MENSAJE_SERVICE.SUCCESS_LISTA, data: response };
      } else {
        retorna = { tipo: constant.ESTADO_SERVICE_SUCCESS.TIPO, mensaje: constant.MENSAJE_SERVICE.SUCCESS_LISTA_SIN_REGISTRO, data: null };
      }
    }

    context.succeed(callback(null, retorna));

  };

  await utilDB.getDataStarWars(FilterRequest.request, getReturn);

};

