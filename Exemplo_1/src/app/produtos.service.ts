import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable()
export class ProdutoService {

  getProdutos() {
    const produtos: Produto[] = [];
    const produto = new Produto();
      produto.id = 1;
      produto.nome = 'Macarrão';
      produtos.push(produto);
      return produtos;
    }
  }
