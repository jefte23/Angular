import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
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
    // tslint:disable-next-line:prefer-const
    let p = new Produto();
    p.id = 1;
    p.nome = 'Macarrão';
    this.produtos.push(p);

  }
}
