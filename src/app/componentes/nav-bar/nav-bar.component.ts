import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  classApplied = false;
  
  

  toggleSideBar(){
    console.log('Valor'); 
    this.classApplied =  !this.classApplied;
  }
  

 
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
