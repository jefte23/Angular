import { ConsultaService } from './consulta.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit, OnDestroy {

  consultas;
  consultasInscricao;
  erro;

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
    this.consultasInscricao = this.consultaService.getConsultas()
    .subscribe(dados => this.consultas = dados, erro => this.erro = true);
  }

  ngOnDestroy() {
    this.consultasInscricao.unsubscribe();
  }
}
