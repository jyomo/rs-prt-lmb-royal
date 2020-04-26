'use strict';
const constant = require('../Util/Constant.js');

module.exports = {

    getMappingAttributes: function (resource) {

        switch (resource) {
            case constant.SWAPI_RESOURCE.FILMS:
                return new Map()
                    .set("title", "titulo")
                    .set("episode_id", "id_episodio")
                    .set("opening_crawl", "parrafos_iniciales")
                    .set("director", "director")
                    .set("producer", "productor")
                    .set("release_date", "fecha_lanzamiento")
                    .set("characters", "personajes")
                    .set("planets", "planetas")
                    .set("starships", "naves_espaciales")
                    .set("vehicles", "vehiculos")
                    .set("species", "especies")
                    .set("created", "creado")
                    .set("edited", "editado")
                    .set("url", "url")
                break;

            case constant.SWAPI_RESOURCE.PEOPLE:
                return new Map()
                    .set("name", "nombre")
                    .set("height", "altura")
                    .set("mass", "mas")
                    .set("hair_color", "color_cabello")
                    .set("skin_color", "color_piel")
                    .set("eye_color", "color_ojos")
                    .set("birth_year", "anio_nacimiento")
                    .set("gender", "genero")
                    .set("homeworld", "planeta_habita")
                    .set("films", "peliculas")
                    .set("species", "especies")
                    .set("vehicles", "vehiculos")
                    .set("starships", "naves_espaciales")
                    .set("created", "creado")
                    .set("edited", "editado")
                    .set("url", "url")
                break;

            case constant.SWAPI_RESOURCE.PLANETS:
                return new Map()
                    .set("name", "nombre")
                    .set("rotation_period", "periodo_rotacion")
                    .set("orbital_period", "periodo_orbital")
                    .set("diameter", "diametro")
                    .set("climate", "clima")
                    .set("gravity", "gravedad")
                    .set("terrain", "terreno")
                    .set("surface_water", "superfice_agua")
                    .set("population", "poblacion")
                    .set("residents", "residentes")
                    .set("films", "peliculas")
                    .set("created", "creado")
                    .set("edited", "editado")
                    .set("url", "url")
                break;

            case constant.SWAPI_RESOURCE.SPECIES:
                return new Map()
                    .set("name", "nombre")
                    .set("classification:", "clasificacion")
                    .set("designation:", "designacion")
                    .set("average_height:", "altura_promedio")
                    .set("skin_colors:", "color_piel")
                    .set("hair_colors:", "color_pelo")
                    .set("eye_colors:", "color_ojos")
                    .set("average_lifespan:", "promedio_vida")
                    .set("homeworld:", "planeta_origen")
                    .set("language:", "lenguaje")
                    .set("people::", "personas")
                    .set("films", "peliculas")
                    .set("created", "creado")
                    .set("edited", "editado")
                    .set("url", "url")

            case constant.SWAPI_RESOURCE.STARSHIPS:
                return new Map()
                    .set("name", "nombre")
                    .set("model", "modelo")
                    .set("manufacturer", "fabricante")
                    .set("cost_in_credits", "costo_en_creditos")
                    .set("length", "longitud")
                    .set("max_atmosphering_speed", "velocidad_max_atmosfera")
                    .set("crew", "personal")
                    .set("passengers", "pasajeros")
                    .set("cargo_capacity", "capacidad_cargo")
                    .set("consumables", "consumibles")
                    .set("hyperdrive_rating:", "clasificacion_hiperimpulsor")
                    .set("MGLT:", "Megalight")
                    .set("starship_class:", "clase_nave_espacial")
                    .set("pilots", "pilotos")
                    .set("films", "peliculas")
                    .set("created", "creado")
                    .set("edited", "editado")
                    .set("url", "url");
                break;
                
            case constant.SWAPI_RESOURCE.VEHICLES:
                return new Map()
                    .set("name", "nombre")
                    .set("model", "modelo")
                    .set("manufacturer", "fabricante")
                    .set("cost_in_credits", "costo_en_creditos")
                    .set("length", "longitud")
                    .set("max_atmosphering_speed", "velocidad_max_atmosfera")
                    .set("crew", "personal")
                    .set("passengers", "pasajeros")
                    .set("cargo_capacity", "capacidad_cargo")
                    .set("consumables", "consumibles")
                    .set("vehicle_class", "clase_vehiculo")
                    .set("pilots", "pilotos")
                    .set("films", "peliculas")
                    .set("created", "creado")
                    .set("edited", "editado")
                    .set("url", "url");
                break;

            default:
                break;

        }

    },


}