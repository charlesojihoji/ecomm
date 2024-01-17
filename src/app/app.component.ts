import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';

@Component( {
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, HeaderComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
} )
export class AppComponent {
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
