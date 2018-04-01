import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Marcas } from '../models/marcas';
import { MarcasService } from '../service/marcas.service';
import { Productos } from '../models/productos';
import { ProductosService } from '../service/productos.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-productosedit',
  templateUrl: './productosedit.component.html',
  styleUrls: []
})
export class ProductoseditComponent implements OnInit {
  id: any;
  params: any;
  productos = new Productos();

  constructor(private router: ActivatedRoute, private marcasService : MarcasService, private routerr:Router, private productosService:ProductosService) { }

  getMarcas() {
      this.marcasService.getMarcas().subscribe(
      marcas => this.marcas = marcas, error => this.errorMessage = <any> error
    );
  }

  ngOnInit() {
  	this.getMarcas();
  	this.params = this.router.params.subscribe(params => this.id = params['id']);
    this.productosService.getProductosInfo(this.id).subscribe(
      data => {
        console.log(data);
        this.productos.id = data['result']['id'];
        this.productos.nombreProducto = data['result']['nombre_producto'];
        this.productos.observacionProducto = data['result']['observacion_producto'];
        this.productos.marcaProducto = data['result']['marca_producto'];
        this.productos.cantidadProducto = data['result']['cantidad_producto'];
        this.productos.estadoProducto = data['result']['estado_producto'];
        this.productos.fechaProducto = data['result']['fecha_producto'];
      },
      error => console.log(<any>error));
  }

  ngOnDestroy(){
  	this.params.unsubscribe();
  	this.getMarcas();
  }

  updateProducto(datos){
    this.productosService.updateProductos(datos).subscribe( productos => {
      console.log(datos);
      this.routerr.navigate(['/productosview']);
    },
    error => console.log(<any>error)
    );
  }

}
