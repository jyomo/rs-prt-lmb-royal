'use strict';
const constant = require('./Util/Constant.js');
var mysql = require('mysql');
const Query = require('./Util/Query.js');
var Request = require("request");

module.exports = {

  // Método principal
  getDataTable: async function (request, callback) {

    console.log("[getDataTable] -  request: " + request);
    console.log("[getDataTable] -  request: " + request.resource);

    var connection = mysql.createConnection({
      host: "database-2.ctslntac7luo.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "adminadmin",
      port: 3306,
      database: "modelbase"
    });

    try {
      var respuesta = await this.obtenerConsulta(request.resource, connection);
      respuesta
    } catch (error) {
      console.log(">>> ERROR: ", error.code);
      switch (error.code) {
        case "ER_NO_SUCH_TABLE": return callback(null, { tipo: constant.ESTADO_SERVICE_ERROR.TIPO, mensaje: constant.MENSAJE_SERVICE.NOT_FOUND_RESOURCE, data: null });
        case "ETIMEDOUT": return callback(null, { tipo: constant.ESTADO_SERVICE_ERROR.TIPO, mensaje: constant.MENSAJE_SERVICE.ERROR_CNN + " - " + error.code, data: null });
        default: return callback(null, { tipo: constant.ESTADO_SERVICE_ERROR.TIPO, mensaje: constant.MENSAJE_SERVICE.ERROR_CNN + " - " + error.code, data: null });
      }
    }


    await connection.end(function (err) {
      // console.log("tipoerror", err.errorType);
      console.log(err)
    });

   

    console.log("[getDataTable] -  response: " + respuesta);
    return callback(null, { tipo: constant.ESTADO_SERVICE_SUCCESS.TIPO, mensaje: constant.MENSAJE_SERVICE.SUCCESS_LISTA, data: respuesta });

  },


  obtenerConsulta: async function (param, connection) {

    var query = Query.QUERY_OBTENER.GET_DATA.replace(constant.REPLACE_VARIABLE.TABLE, param)
    // console.log("query", query);
    // console.log("param", param);
    return new Promise(async function (resolve, reject) {
      await connection.query(query, [param], async function (err, results, fields) {
        if (err) {
          // console.log(err);
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
}