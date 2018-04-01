import { Component, OnInit } from '@angular/core';
import { Marcas } from '../models/marcas';
import { MarcasService } from '../service/marcas.service';
import { Productos } from '../models/productos';
import { ProductosService } from '../service/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent implements OnInit {

    nombre: string;
    marca: string;
    observacion: string;
    cantidad: string;
    errors= [];

  	marcas: Array<Marcas>= [] ;
    errorMessage: string;
    	
  constructor(private marcasService:MarcasService, private router:Router, private productosService:ProductosService) { }

  getMarcas() {
      this.marcasService.getMarcas().subscribe(
      marcas => this.marcas = marcas, error => this.errorMessage = <any> error
    );
  }

  ngOnInit() {
  	this.getMarcas();
  }

  createProductos(datos){
    this.productosService.addProductos(datos).subscribe( productos => {
      console.log(datos);
      this.router.navigate(['/productosview']);
    },
    error => console.log(<any>error)
    );
  }

}
