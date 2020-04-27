# rs-prt-lmb-royal



#Obtener Data General
sls invoke --function getDataModelSwapi

#Obtener Data Por Modelo Swapi
sls invoke --function getDataModelSwapi --data '{"resource":"planets"}'

#Obtener Data Por Modelo Swapi
sls invoke --function getDataModelSwapi --data '{"resource":"films"}'
sls invoke --function getDataModelSwapi --data '{"resource":"planets"}'
sls invoke --function getDataModelSwapi --data '{"resource":"species"}'
sls invoke --function getDataModelSwapi --data '{"resource":"films"}'
sls invoke --function getDataModelSwapi --data '{"resource":"vehicles"}'
sls invoke --function getDataModelSwapi --data '{"resource":"starships"}'


#Obtener Data Por Modelo Swapi y POR BY ID
sls invoke --function getDataModelSwapi --data '{"resource":"films", "id" : 1}'
sls invoke --function getDataModelSwapi --data '{"resource":"planets", "id" : 1}'
sls invoke --function getDataModelSwapi --data '{"resource":"species","id" : 1}'
sls invoke --function getDataModelSwapi --data '{"resource":"films", "id" : 1}'
sls invoke --function getDataModelSwapi --data '{"resource":"vehicles", "id" : 4}'
sls invoke --function getDataModelSwapi --data '{"resource":"starships", "id" : 9}'



#Obtener Data Por Modelo Swapi y POR BY ID
sls invoke --function getDataCustom --data '{"resource":"producto"}'

