import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  headerAbajo = false;

  scrollHeader() {
    this.headerAbajo = !this.headerAbajo;
    console.log('ESTAMOS BAJANDO');
  }
}
