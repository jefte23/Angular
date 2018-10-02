import { Component } from '@angular/core';
import { Produto } from './produto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  produtos: Produto[] = [];
  title = 'app works!';

  constructor() {
  }
}
