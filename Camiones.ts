import { Vehiculo } from "./vehiculos";

export class Camion extends Vehiculo{
    private soporte: void;
  
    constructor (marca: string, modelo: number, patente: string, soporte: void){
        super(marca, modelo, patente);
        this.soporte = soporte;
       
    }

//Getters 
public getMarca(): string {
    return this.marca;
}
public getModelo(): number {
    return this.modelo;
}
public getPatente(): string {
    return this.patente;
}
//Setters
public setMarca(nuevaMarca: string): void {
    this.marca = nuevaMarca;
}

public setModelo(modelo: number): void {
    this.modelo = modelo;
}
public setPatente(patente: string): void {
    this.patente = patente;
}

}

