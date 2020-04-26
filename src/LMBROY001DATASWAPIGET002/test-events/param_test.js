module.exports = {

    // resource: "films",
    // resource: "people",
    // resource: "planets"
    // resource: "species",
    // resource: "starships",
    resource: "vehicles",


    // resource: "films",id: 1
    // resource: "people", id: 1
    // resource: "planets", id:1
    // resource: "species", id : 1
    // resource: "starships", id: 9,
    // resource: "vehicles",id: 4,

}



/*
ejecucion lambda local:
//add "aws-sdk": "2.412.0",
"lambda-local": "^1.7.2"
lambda-local -l src/LMBROY001DATASWAPIGET001/handlerGet.js -h get -e src/LMBROY001DATASWAPIGET001/test-events/param_test.js -t 10000 --envfile src/LMBROY001DATASWAPIGET001/config/env/test.env

*/