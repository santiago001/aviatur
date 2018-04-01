import { Component, OnInit, Input } from '@angular/core';
import { Marcas } from '../models/marcas';
import { MarcasService } from '../service/marcas.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-marcasview',
  templateUrl: './marcasview.component.html',
  styles: []
})
export class MarcasviewComponent implements OnInit {
    id: any;
    nombre: any;
  	marcas: Array<Marcas>= [] ;
    errorMessage: string;
    	
  constructor(private marcasService:MarcasService, private location: Location) { }

  getMarcas() {
      this.marcasService.getMarcas().subscribe(
      marcas => this.marcas = marcas, error => this.errorMessage = <any> error
    );
  }

  deleteMarcas = function(id,nombre){
    if(confirm("Esta seguro de borrar la marca " + nombre + "?")){
      this.marcasService.deleteMarcas(id).subscribe(
      error => console.log(<any>error));
      location.reload();
    }
  }

  ngOnInit() {
  	this.getMarcas();
  }




}
