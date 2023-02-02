import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  products: Product[] = [
    {
      name: 'lonetas',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/lonetas.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'pijama',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/pijama.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'pijama2',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/pijama2.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'pijama3',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/pijama3.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido2',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido2.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido3',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido3.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido4',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido4.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido5',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido5.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido6',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido6.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido7',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido7.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido8',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido8.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido9',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido9.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido10',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido10.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido11',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido11.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido12',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido12.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido13',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido13.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido14',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido14.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido15',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido15.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido16',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido16.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido17',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido17.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido3',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido3.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido3',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido3.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido3',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido3.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido3',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido3.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido3',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido3.jpeg',
      category: 'Nueva Colección'
    },
    {
      name: 'vestido4',
      price: 80000,
      discount: 20,
      describe: 'Diseño exclusivo, tela satín, sublimado.',
      image: '../assets/imagenes/productos/vestido4.jpeg',
      category: 'Nueva Colección'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
