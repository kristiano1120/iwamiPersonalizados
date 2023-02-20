import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  contactar = {
    name: '',
    email: '',
    telefono: '',
    celular: '',
    whatsApp: '',
  }

  onContactar(){
    console.log(this.contactar);

  }

}
