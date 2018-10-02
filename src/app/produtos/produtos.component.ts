import { ProdutoService } from './../produtos.service';
import { Produto } from './../produto';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produdos: Produto[] = [];

  constructor(private service: ProdutoService) {
  }

  ngOnInit() {
    this.produdos = this.service.getProdutos();
  }
}
