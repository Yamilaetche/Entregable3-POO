import { Vehiculo } from "./vehiculos";

export class Auto extends Vehiculo {

    private cantPuertas: number;

    constructor (marca: string, modelo: number, patente: string, cantPuertas: number){
        super(marca, modelo, patente);
        this.cantPuertas = cantPuertas;
      
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
public setMarca(marca: string): void {
    this.marca = marca;
}

public setModelo(modelo: number): void {
    this.modelo = modelo;
}
public setPatente(patente: string): void {
    this.patente = patente;
}


}