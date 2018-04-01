import { Injectable } from '@angular/core';
import { Productos } from '../models/productos';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductosService {
	private uri= 'http://localhost:8000/productos/';

  constructor(private http:Http) { }
  	
  	getProductos(): Observable<any[]> {
  		
  		return  this.http.get(this.uri).map(res => <Productos[]> res.json() ).catch(this.handelError);
  	}

  	addProductos(productos: Object): Observable<any[]> {
	    return this.http.post(this.uri +'create', JSON.stringify(productos) ).map(res => res.json()).catch(this.handelError);
	}

    updateProductos(productos: Object): Observable<any[]> {
      return this.http.post(this.uri +'update', JSON.stringify(productos) ).map(res => res.json()).catch(this.handelError);
    }

    deleteProductos(id): Observable<any[]> {
      return this.http.get(this.uri +'delete/' + id).map(res => res.json()).catch(this.handelError);
    }

    getProductosInfo(id: String): Observable<any[]> {
      return this.http.get(this.uri +'show/' + id).map(res => res.json()).catch(this.handelError);
    }

  	private handelError(error: Response) {
    	return Observable.throw(error.json().errors || 'server error');
  	}	

}
