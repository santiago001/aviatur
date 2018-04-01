import { Component, OnInit } from '@angular/core';
import { Marcas } from '../models/marcas';
import { MarcasService } from '../service/marcas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styles: []
})
export class MarcasComponent implements OnInit {

	nombre: string ;
  	referencia: string;
  	errors= [];

    constructor(private marcasService: MarcasService, private router:Router) { }


	ngOnInit() {
	}

	createMarca(datos){
		this.marcasService.addMarcas(datos).subscribe( marcas => {
			console.log(datos);
			this.router.navigate(['/marcasview']);
		},
		error => console.log(<any>error)
		);
	}

}
