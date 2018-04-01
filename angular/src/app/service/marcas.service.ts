import { Injectable } from '@angular/core';
import { Marcas } from '../models/marcas';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MarcasService {

	private uri= 'http://localhost:8000/marcas/';

  constructor(private http:Http) { }
  	
  	getMarcas(): Observable<any[]> {
  		
  		return  this.http.get(this.uri).map(res => <Marcas[]> res.json() ).catch(this.handelError);
  	}

    getMarcasTodas(): Observable<any[]> {
      
      return  this.http.get(this.uri + 'todas').map(res => <Marcas[]> res.json() ).catch(this.handelError);
    }

  	addMarcas(marcas: Object): Observable<any[]> {
	    return this.http.post(this.uri +'create', JSON.stringify(marcas) ).map(res => res.json()).catch(this.handelError);
	  }

    updateMarcas(marcas: Object): Observable<any[]> {
      return this.http.post(this.uri +'update', JSON.stringify(marcas) ).map(res => res.json()).catch(this.handelError);
    }

    deleteMarcas(id): Observable<any[]> {
      return this.http.get(this.uri +'delete/' + id).map(res => res.json()).catch(this.handelError);
    }

    getMarcasInfo(id: String): Observable<any[]> {
      return this.http.get(this.uri +'show/' + id).map(res => res.json()).catch(this.handelError);
    }

    private handelError(error: Response) {
      return Observable.throw(error.json().errors || 'server error');
    }

}
