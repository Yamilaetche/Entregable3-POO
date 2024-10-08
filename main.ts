import {Auto} from "./Autos";
import {Camion} from "./Camiones";
import {Moto} from "./Motos";
import { RegistroAut} from "./RegistroAutomotor";


//crear vehiculos
const auto1: Auto = new Auto ("Ford Fiesta", 2013, "MFM447", 5);
const auto2: Auto = new Auto ("Renault Clio", 2011, "KEY413", 4);

const camion1: Camion = new Camion ("Scania", 2022, "ABF230");
const camion2: Camion = new Camion ("Mercedes-Benz", 2018, "ZMX342");


const moto1: Moto = new Moto ("Motomel", 2023, "ABV335");
const moto2: Moto = new Moto ("Gilera", 2020, "XXS566");

//Nuevos vehiculos p/modificar
const nuevoAuto = new Auto ("Fiat Palio", 2019, "RSR332", 5);

const nuevoCamion = new Camion ("Volvo", 2012, "FRE223");

const nuevaMoto = new Moto ("Smash", 2009, "GTR445")

//Modificar Vehiculos

RegistroAut.modificarAuto("RSR332", nuevoAuto);

RegistroAut.modificarCamion("FRE223", nuevoCamion);

RegistroAut.modificarMoto("GTR445", nuevaMoto);



