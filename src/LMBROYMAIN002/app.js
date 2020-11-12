
const constant = require('./Util/Constant.js');

module.exports = {

  // Método principal
  async main(payload, callback) {
    let data;
    data = await validarObject();

    // if (serieYMotorInvalido(datoParticular)) {
    //   throw new Error('xxxx');
    // } else return { nombre: datoParticular.etiqueta, valor: datoParticular.valor };
    // await this.promiseES6(payload);
    // await this.timerLoops(payload);
    // await calculateTimePromisePush();
    // await calculateTimePromiseMap();
    // await splitArray();

    // console.log('[main]. 2 response:', data);

    return callback(null, {
      // tipo: constant.ESTADO_SERVICE_SUCCESS.TIPO,
      // mensaje: constant.MENSAJE_SERVICE.SUCCESS_LISTA,
      data,
    });
  },

  async timerLoops(payload) {
    const data = [];
    const MAX = 500;
    const array = Array(MAX);
    let messageLog = 'for common';
    messageLog = 'for common';
    console.time(messageLog);
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
    }
    console.timeEnd(messageLog);
    messageLog = 'for cached lenght';
    console.time(messageLog);
    for (let index = 0; index < MAX; index++) {
      const element = array[index];
    }
    console.timeEnd(messageLog);

    messageLog = 'foreach';
    console.time(messageLog);
    array.forEach((element) => {
      const element2 = array[element];
      console.log('element2', element2);
    });
    console.timeEnd(messageLog);

    messageLog = 'map';
    console.time(messageLog);
    array.map((v) => v > 0);
    console.log('array', array);
    console.timeEnd(messageLog);
  },

  async promiseES6(payload) {
    // console.logs('[promise] ini');

    const x = 109;
    const promise = new Promise((resolve, reject) => {
      if (x === 10) resolve('la variable es igual a 10');
      else {
        reject('la variable no es igual a 10');
      }
    });
    promise.then((res) => console.log(`sucess:${res}`))
      .catch((res) => console.log(`error:${res}`));

    // console.log('[promise] fin');
    return payload;
  },

};
async function calculateTimePromiseMap() {
  let cotizaciones = [];
  const planesEvaluadosCotizacion = [
    { cod: 1, des: '1dos', tipo: '1entero' },
    { cod: 1, des: '1dos', tipo: '1entero' },
    { cod: 1, des: '1dos', tipo: '1entero' },
    { cod: 1, des: '1dos', tipo: '1entero' },
  ];
  const datosCotizacionPlan = {
    x: 1, b: 2, c: 3, d: 4,
  };
  console.time('map');
  const promesasCotizaciones = planesEvaluadosCotizacion.map((planEvaluado) => {
    const cotizacion = { ...planEvaluado, ...datosCotizacionPlan };
    return cotizacion; // this.elaboraYGuardaCotizacion(cotizacion);
  });
  cotizaciones = await Promise.all(promesasCotizaciones);
  console.timeEnd('map');
  return cotizaciones;
}

async function calculateTimePromisePush() {
  let cotizaciones = [];
  const promesasCotizaciones = [];
  const planesEvaluadosCotizacion = [
    { cod: 1, des: '1dos', tipo: '1entero' },
    { cod: 1, des: '1dos', tipo: '1entero' },
    { cod: 1, des: '1dos', tipo: '1entero' },
    { cod: 1, des: '1dos', tipo: '1entero' },
  ];
  const datosCotizacionPlan = {
    x: 1, b: 2, c: 3, d: 4,
  };
  console.time('map');
  planesEvaluadosCotizacion.forEach((planEvaluado) => {
    const cotizacion = { ...planEvaluado, ...datosCotizacionPlan };
    promesasCotizaciones.push(
      cotizacion,
      // this.saveCotizacion(event, plan)
    );
  });
  cotizaciones = await Promise.all(promesasCotizaciones);
  console.timeEnd('map');
  return cotizaciones;
}

async function splitArray() {
  const messages = 'sss';
  // const messages = ['sss'];
  // const messages = ['Banana', 'Orange', 'Apple', 'Mango'];
  // return detail.join(',');
  return {
    message: Array.isArray(messages) ? messages.join(',') : messages,
    details: Array.isArray(messages) ? messages : [messages],
    httpCode: Array.isArray(messages),
  };
}


// function getDateNumberFormat(timeStampString) {
//   let result = null;
//   try {
//     if (timeStampString) {
//       const fechaDate = moment.unix(timeStampString).utc().subtract(1, 'days');
//       result = moment(fechaDate).format('YYYY-MM-DD');
//     }
//   } catch (error) {
//     console.log(`error formato: ${error}`);
//   }
//   return result;
// }

async function validarObject() {
  const DOCUMENT_TYPES = {
    RUC: 1,
    DNI: 2,
    CE: 4,
    PASAPORTE: 6,
  };
  const data = Object.values(DOCUMENT_TYPES);
  console.log(data);
  return data;
}
