import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = true;

  modal = document.getElementById('login');

  // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //     if (event.target == modal) {
  //         modal.style.display = "none";
  //     }
  // }

  login = {
    user: '',
    password: '',
  }

  register = {
    name: '',
    email: '',
    password: '',
  }

  onRegister(){
    console.log(this.register);

  }
  onLogin(){
    console.log(this.login);
  }

  closeModal(){
    if(this.modal)
     this.modal.style.display='none';
     this.loginForm = false;
  }

}
