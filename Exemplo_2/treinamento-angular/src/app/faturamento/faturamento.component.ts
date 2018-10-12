import { FaturamentoService } from './faturamento.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit, OnDestroy {

  faturamento;
  faturamentoIscricao;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private FaturamentoService: FaturamentoService) { }

  ngOnInit() {
    this.faturamentoIscricao = this.FaturamentoService.getFaturamento()
    .subscribe(dados => this.faturamento = dados);
  }

  ngOnDestroy() {
    this.faturamentoIscricao.unsubscribe();

  }

}
