// Clase Persona
export class Persona {
  //Atributos
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private fechaN: Date;
    private colorF: string;
    private sexo: string;

  // Constructor
    constructor (nombre: string, apellidos: string, edad: number, dni: string, fechaN: Date, colorF: string, sexo: string){
        this.nombre= nombre;
        this.apellidos= apellidos;
        this.edad= edad;
        this.dni= dni;
        this.fechaN= fechaN;
        this.colorF= colorF;
        this.sexo= sexo;
    }

  //Getters & Setters
    get _nombre(){ return this.nombre};
    set _nombre(nombre:string){
        this.nombre= nombre;
    }

    get _apellidos(){ return this.apellidos};
    set _apellidos(apellidos:string){
        this.apellidos= apellidos;
    }

    get _edad(){ return this.edad};
    set _edad(edad:number){
        this.edad= edad;
    }

    get _dni(){ return this.dni};
    set _dni(dni:string){
        this.dni= dni;
    }

    get _fechaN(){ return this.fechaN};
    set _fechaN(fechaN:Date){
        this.fechaN= fechaN;
    }

    get _colorF(){ return this.colorF};
    set _colorF(colorF:string){
        this.colorF= colorF;
    }

    get _sexo(){ return this.sexo};
    set _sexo(sexo:string){
        this.sexo= sexo;
    }
}


