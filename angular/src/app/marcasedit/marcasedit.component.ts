import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Marcas } from '../models/marcas';
import { MarcasService } from '../service/marcas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-marcasedit',
  templateUrl: './marcasedit.component.html',
  styles: []
})
export class MarcaseditComponent implements OnInit {
	id: any;
	params: any;
	marcas = new Marcas('','','','','');

  constructor(private router: ActivatedRoute, private marcasService : MarcasService, private routerr:Router) { }

  ngOnInit() {
  	this.params = this.router.params.subscribe(params => this.id = params['id']);
    this.marcasService.getMarcasInfo(this.id).subscribe(
      data => {
        console.log(data);
        this.marcas.idMarca = data['result']['id_marca'];
        this.marcas.nombreMarca = data['result']['nombre_marca'];
        this.marcas.referenciaMarca = data['result']['referencia_marca'];
        this.marcas.estadoMarca = data['result']['estado_marca'];
        this.marcas.fechaMarca = data['result']['fecha_marca'];
      },
      error => console.log(<any>error));
  }

  ngOnDestroy(){
  	this.params.unsubscribe();
  }

  updateMarca(datos){
    this.marcasService.updateMarcas(datos).subscribe( marcas => {
      console.log(datos);
      this.routerr.navigate(['/marcasview']);
    },
    error => console.log(<any>error)
    );
  }

}
