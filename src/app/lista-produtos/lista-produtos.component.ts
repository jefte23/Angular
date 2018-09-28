import { Produto } from './../produto';
import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

 @Input() produtos: Produto[] = [];

  constructor() { }

  ngOnInit() {
  }

}
