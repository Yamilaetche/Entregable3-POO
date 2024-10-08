export class Vehiculo {
  
    protected marca: string;
    protected modelo: number;
    protected patente: string;

    constructor(marca: string, modelo: number, patente: string){
        
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
}