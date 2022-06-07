// <---------Imports------------->
import { Component, OnInit } from '@angular/core';

// Forms
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

// Classes
import { Persona } from 'src/app/classes/persona';

// Material
import {MatSnackBar} from "@angular/material/snack-bar";
import { MatTable } from '@angular/material/table';

// ViewChild concept
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  persona: FormGroup;

  arrayPersonas: Persona[]= [];

  displayedColumns: string[] = ['posicion' ,'nombre', 'apellidos', 'edad', 'dni', 'fechaN', 'colorF', 'sexo', 'borrar', 'modificar'];

  @ViewChild(MatTable) tabla!: MatTable<any>;

  modificar:boolean= false;

  indiceModificar :number= 0;

  constructor(private snackBar: MatSnackBar) {

    this.persona = new FormGroup({
      nombre: new FormControl('',[Validators.required,Validators.minLength(3)]),
      apellidos: new FormControl('',[Validators.required,Validators.minLength(3)]),
      edad: new FormControl('',[Validators.required,Validators.min(0),Validators.max(125)]),
      dni: new FormControl('',[Validators.required,Validators.maxLength(9),Validators.minLength(9)]),
      fechaN: new FormControl('',Validators.required),
      colorF: new FormControl('',[Validators.required,Validators.minLength(3)]),
      sexo: new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit(formDirective: FormGroupDirective){

    let nuevaPersona= new Persona(
    this.persona.controls["nombre"].value,
    this.persona.controls["apellidos"].value,
    this.persona.controls["edad"].value,
    this.persona.controls["dni"].value,
    this.persona.controls["fechaN"].value,
    this.persona.controls["colorF"].value,
    this.persona.controls["sexo"].value
    );

    this.arrayPersonas.push(nuevaPersona);

    this.tabla.renderRows();

    formDirective.resetForm();
    this.persona.reset();
  }

  public funcionBorrar(indice: number): void{
    this.arrayPersonas.splice(indice,1);
    this.tabla.renderRows();

        this.snackBar.open("Datos eliminados satisfactoriamente", "Cerrar");


    }

  public funcionModificar(indice: number): void{
    this.modificar= true;
    this.indiceModificar= indice;
    this.persona.controls["nombre"].setValue(this.arrayPersonas[indice]._nombre);
    this.persona.controls["apellidos"].setValue(this.arrayPersonas[indice]._apellidos);
    this.persona.controls["edad"].setValue(this.arrayPersonas[indice]._edad);
    this.persona.controls["dni"].setValue(this.arrayPersonas[indice]._dni);
    this.persona.controls["fechaN"].setValue(this.arrayPersonas[indice]._fechaN);
    this.persona.controls["colorF"].setValue(this.arrayPersonas[indice]._colorF);
    this.persona.controls["sexo"].setValue(this.arrayPersonas[indice]._sexo);

  }

  public funcionCancelar(formDirective: FormGroupDirective): void{
    this.modificar= false;
    formDirective.resetForm();
    this.persona.reset();
  }

  public funcionGuardar(formDirective: FormGroupDirective):void{
    this.arrayPersonas[this.indiceModificar]._nombre= (this.persona.controls["nombre"].value);
    this.arrayPersonas[this.indiceModificar]._apellidos= (this.persona.controls["apellidos"].value);
    this.arrayPersonas[this.indiceModificar]._edad= (this.persona.controls["edad"].value);
    this.arrayPersonas[this.indiceModificar]._dni= (this.persona.controls["dni"].value);
    this.arrayPersonas[this.indiceModificar]._fechaN= (this.persona.controls["fechaN"].value);
    this.arrayPersonas[this.indiceModificar]._colorF= (this.persona.controls["colorF"].value);
    this.arrayPersonas[this.indiceModificar]._sexo= (this.persona.controls["sexo"].value);
    this.tabla.renderRows();
    formDirective.resetForm();
    this.persona.reset();
    this.modificar= false;
  }
}
