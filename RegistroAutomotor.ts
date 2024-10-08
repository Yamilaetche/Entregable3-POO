import {Auto} from "./Autos";
import {Camion} from "./Camiones";
import {Moto} from "./Motos";


export class RegistroAut {

    
    private listaAutos: Auto[];
    private listaCamiones: Camion[];
    private listaMotos: Moto[];
    

    constructor (listaAutos: Auto[], listaCamiones: Camion[], listaMotos: Moto[]){
        
        this.listaAutos = [];
        this.listaCamiones = [];
        this.listaMotos = [];  
}
  
//Getters
   public getListaAutos(): Auto[]{
      return this.listaAutos;
}
   public getListaCamiones(): Camion[]{
      return this.listaCamiones;
}
   
   public getListaMotos(): Moto[]{
      return this.listaMotos;
   }

//Setters
   public SetListaAutos(auto: Auto[]): void {
      this.listaAutos= auto;
   }
   public SetListaCamiones(camion: Camion[]): void {
      this.listaCamiones = camion;
   }
   public SetListaMotos(moto: Moto[]): void {
      this.listaMotos = moto;
   }

//Agregar vehiculos a la listas
agregarAutos(auto: Auto): void {
   this.listaAutos.push(auto);
}

agregarCamiones(camion: Camion): void {
   this.listaCamiones.push(camion);
}

agregarMotos(moto: Moto): void {
   this.listaMotos.push(moto);
}

//Eliminar Vehiculos de la lista

public eliminarAuto(patente: string): void {
   this.listaAutos = this.listaAutos.filter(auto => auto.getPatente() !== patente);
}
public eliminarCamion(patente: string): void {
   this.listaCamiones = this.listaCamiones.filter(camion => camion.getPatente() !== patente);
}
public eliminarMotos(patente: string): void {
   this.listaMotos = this.listaMotos.filter(moto => moto.getPatente() !== patente);
}

//Modificar vehiculos 

public modificarAuto(patente: string, nuevoAuto: Auto): void{
const index = this.listaAutos.findIndex(auto => auto.getPatente() === patente);
   
    if (index !== -1) {
       this.listaAutos[index] = nuevoAuto; 
   }  
}
public modificarCamion(patente: string, nuevoCamion: Camion): void{
   const index = this.listaCamiones.findIndex(camion => camion.getPatente() === patente);
      
       if (index !== -1) {
          this.listaCamiones[index] = nuevoCamion; 
   }  
}
   public modificarMoto(patente: string, nuevaMoto: Moto): void{
      const index = this.listaMotos.findIndex(moto => moto.getPatente() === patente);
         
          if (index !== -1) {
             this.listaMotos[index] = nuevaMoto; 
   }  
}
}

