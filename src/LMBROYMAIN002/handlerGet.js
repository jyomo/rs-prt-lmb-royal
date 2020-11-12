
const utilDB = require('./app.js');
const constant = require('./Util/Constant.js');
const FilterRequest = require('./Bean/FilterRequest.js');

module.exports.get = async (event, context, callback) => {
  // context.callbackWaitsForEmptyEventLoop = false; // Add this line
  FilterRequest.request = event;

  const getReturn = function (err, response) {
    let retorna = {};
    if (err) {
      retorna = { tipo: constant.ESTADO_SERVICE_ERROR.TIPO, mensaje: constant.MENSAJE_SERVICE.ERROR_GENERAL, data: null };
    } else {
      retorna = { tipo: response.tipo, mensaje: response.mensaje, response: response.data };
    }
    context.succeed(callback(null, retorna));
  };

  await utilDB.main(FilterRequest.request, getReturn);
};
