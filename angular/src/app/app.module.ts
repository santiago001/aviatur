import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MarcasComponent } from './marcas/marcas.component';
import { ProductosComponent } from './productos/productos.component';
import { MarcasviewComponent } from './marcasview/marcasview.component';
import { ProductosviewComponent } from './productosview/productosview.component';
import { MarcasService } from './service/marcas.service';
import { ProductosService } from './service/productos.service';
import { MarcaseditComponent } from './marcasedit/marcasedit.component';
import { ProductoseditComponent } from './productosedit/productosedit.component';

const appRoutes: Routes = [
	{ path: '', redirectTo:'/marcas', pathMatch: 'full'},
	{ path: 'marcas', component: MarcasComponent },
	{ path: 'productos', component: ProductosComponent },
	{ path: 'marcasview', component: MarcasviewComponent },
	{ path: 'productosview', component: ProductosviewComponent },
  { path: 'marcasedit/:id', component: MarcaseditComponent },
  { path: 'productosedit/:id', component: ProductoseditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MarcasComponent,
    ProductosComponent,
    MarcasviewComponent,
    ProductosviewComponent,
    MarcaseditComponent,
    ProductoseditComponent,
  ],
  imports: [
  	RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MarcasService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
