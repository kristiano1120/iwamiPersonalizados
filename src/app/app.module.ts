import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { WhatsappComponent } from './componentes/whatsapp/whatsapp.component';
import { HomeComponent } from './componentes/home/home.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProductoComponent } from './componentes/producto/producto.component';



@NgModule({
  declarations: [
    AppComponent,    
    NavBarComponent, FooterComponent, ContactoComponent, WhatsappComponent, HomeComponent, NosotrosComponent, ProductosComponent, ProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
