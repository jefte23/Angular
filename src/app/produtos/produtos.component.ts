import { Produto } from './../produto';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produdos: Produto[] = [];
  constructor() { }

  ngOnInit() {
    const produto = new Produto();
    produto.id = 1;
    produto.nome = 'Macarrão';
    this.produdos.push(produto);

    const produto2 = new Produto();
    produto2.id = 2;
    produto2.nome = 'Feijão';
    this.produdos.push(produto2);
  }

}
