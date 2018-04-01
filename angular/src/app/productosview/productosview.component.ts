import { Component, OnInit, Input } from '@angular/core';
import { Marcas } from '../models/marcas';
import { MarcasService } from '../service/marcas.service';
import { Productos } from '../models/productos';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-productosview',
  templateUrl: './productosview.component.html',
  styles: []
})
export class ProductosviewComponent implements OnInit {
    nombre: string;
    marca: string;
    observacion: string;
    cantidad: string;
    errors= [];

    marcas: Array<Marcas>= [] ;
    errorMessage: string;

  	productos: Array<Productos>= [] ;
    errorMessage2: string;

	constructor(private marcasService:MarcasService, private productosService:ProductosService) { }

	getMarcas() {
	      this.marcasService.getMarcasTodas().subscribe(
	      marcas => this.marcas = marcas, error => this.errorMessage = <any> error
	    );
	}

		getProductos() {
	      this.productosService.getProductos().subscribe(
	      productos => this.productos = productos, error => this.errorMessage2 = <any> error
	    );
	  }

	  deleteProductos = function(id,nombre){
	    if(confirm("Esta seguro de borrar el productos " + nombre + "?")){
	      this.productosService.deleteProductos(id).subscribe(
	      error => console.log(<any>error));
	    }
	  }


	ngOnInit() {
		this.getMarcas();
		this.getProductos();
	}

}
