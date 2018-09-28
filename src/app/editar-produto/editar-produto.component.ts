import { Produto } from './../produto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto;

  constructor(
    private route: ActivatedRoute
    ) {  }

  ngOnInit() {
    this.produto = new Produto();
    this.produto.id = 1;
    this.produto.nome = 'macarrão';
  }

  change() {
    alert('change');
  }

  salvar() {
    alert(this.produto.nome);
  }

  get debug() {
    return JSON.stringify(this.produto);
  }
}
