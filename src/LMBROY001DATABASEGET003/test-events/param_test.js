module.exports = {

     resource: "producto",

}



/*
ejecucion lambda local:
//add "aws-sdk": "2.412.0",
"lambda-local": "^1.7.2"
lambda-local -l src/LMBROY001DATABASEGET003/handlerGet.js -h get -e src/LMBROY001DATABASEGET003/test-events/param_test.js -t 10000 --envfile src/LMBROY001DATABASEGET003/config/env/test.env
*/