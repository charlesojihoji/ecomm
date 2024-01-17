import { Component } from '@angular/core';

@Component( {
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
} )
export class HomeComponent {

  title = 'Smith';
  counter = 0;

  changeTitle () {

    this.title = ( this.title == 'Smith' ) ? 'Susan' : 'Smith';

  }

  increment () {
    this.counter++;
  }

  decrement () {
    this.counter--;
  }

  reset () {
    this.counter = 0;
  }

}
