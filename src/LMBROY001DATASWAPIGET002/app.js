'use strict';
const constant = require('./Util/Constant.js');
const mapping = require('./Transform/Mapping');
var Request = require("request");

module.exports = {

  // Método principal
  getDataStarWars: async function (request, callback) {
    console.log("[getDataStarWars]. 1 request:", request);
    var mapping = "";
    var fetchedData = null;

    if (!request.resource && !request.id) {
      fetchedData = await this.getDataSwapiBase()
      mapping = constant.SWAPI_URL.API_BASE;

    } else if (request.resource) {
      fetchedData = await this.getDataSwapiByResource(request);
      mapping = request.resource;

    } else {
      return callback(null, { tipo: constant.ESTADO_SERVICE_ERROR.TIPO, mensaje: constant.MENSAJE_SERVICE.PARAM_INCORRECTOS, data: null });
    }


    if (fetchedData == null) {
      return callback(null, { tipo: constant.ESTADO_SERVICE_SUCCESS.TIPO, mensaje: constant.MENSAJE_SERVICE.NOT_FOUND, data: null });
    }
    

    var dataTransformed = await this.translateListObjectModel(fetchedData, mapping);
    return callback(null, { tipo: constant.ESTADO_SERVICE_SUCCESS.TIPO, mensaje: constant.MENSAJE_SERVICE.SUCCESS_LISTA, data: dataTransformed });

  },


  // Obtiene cualquier modelo swapi de acuerdo al request que enviemos
  getDataSwapiByResource: async function (request) {
    var obj = [];
    var urlModel = constant.SWAPI_URL.API_BASE;
    switch (request.resource) {
      case constant.SWAPI_RESOURCE.FILMS: urlModel += constant.SWAPI_RESOURCE.FILMS;
        break;
      case constant.SWAPI_RESOURCE.PEOPLE: urlModel += constant.SWAPI_RESOURCE.PEOPLE;
        break;
      case constant.SWAPI_RESOURCE.PLANETS: urlModel += constant.SWAPI_RESOURCE.PLANETS;
        break;
      case constant.SWAPI_RESOURCE.SPECIES: urlModel += constant.SWAPI_RESOURCE.SPECIES;
        break;
      case constant.SWAPI_RESOURCE.STARSHIPS: urlModel += constant.SWAPI_RESOURCE.STARSHIPS;
        break;
      case constant.SWAPI_RESOURCE.VEHICLES: urlModel += constant.SWAPI_RESOURCE.VEHICLES;
        break;
      default:
        break;
    }

    if (request.id) {
      urlModel += constant.CHARACTERS.SLASH + request.id;
    }
    var fetchData = await this.fetchDataSwapi(urlModel);

    obj = JSON.parse(fetchData);

    if (obj && obj["detail"] && (obj["detail"] == "Not found")) {
      return null;
    }
    return obj;
  },

  // Obtiene data de url base swapi
  getDataSwapiBase: async function () {
    var obj = [];
    var fetchData = await this.fetchDataSwapi(constant.SWAPI_URL.API_BASE);
    obj = JSON.parse(fetchData);
    return obj;
  },


  // translateListObjectModel : Transforma todo el modelo , así sea un objeto o lista de objetos
  translateListObjectModel: async function (fetchData, resource) {
    var data = fetchData;
    var newModel = {};

    // Obtenemos el Mapping de Transformación
    var mappingModel = mapping.getMappingAttributes(resource);

    if (data[constant.SWAPI_VARIABLE.RESULTS]) {
      newModel.contador = data.count;
      newModel.siguiente = data.next;
      newModel.anterior = data.previous;
      var listObjects = [];
      data[constant.SWAPI_VARIABLE.RESULTS].forEach(obj => {
        listObjects.push(this.translateObjectModel(obj, mappingModel));
      });
      newModel.resultados = listObjects;

    } else {
      newModel = this.translateObjectModel(data, mappingModel);
    }
    return newModel;
  },


  // translateObjectModel : Transformar atributos del objeto de acuerdo al mapping
  translateObjectModel: function (objModelOrigin, mappingModel) {
    var objModelSpanish = {}
    for (const [key, value] of mappingModel) {
      objModelSpanish[mappingModel.get(key)] = objModelOrigin[key];
    }
    return objModelSpanish;
  },


  // Método fetchDataSwapi : invocación a api Swapi
  fetchDataSwapi: async function (url) {
    return new Promise(async function (resolve, reject) {
      await Request.get({
        url: url,
        headers: { 'Content-Type': 'application/json' }
      }, async (error, response, body) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(body);
        }
      });
    });
  },



}