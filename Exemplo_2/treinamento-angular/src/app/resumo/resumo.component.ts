import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {

  resumo = {
      'consultas' : {
      'consultas_30dias_anteiores' : 87,
      'consultas_30dias_posteriores' : 79
    },
      'faturamento' : {
      'anterior' : {
      'valor' : 100000,
      'comparativo' : 19
      },
      'previsao' : {
      'valor' : 90000,
      'comparativo' : -10
      }
    }
  };

  constructor(private http: HttpClient) {
    this.http.get('http://projeto.devmedia.com.br/php/api-dashboard/api/resumo');
  }

  ngOnInit() {
  }

}
