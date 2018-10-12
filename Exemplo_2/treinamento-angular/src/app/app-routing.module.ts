import { FaturamentoComponent } from './faturamento/faturamento.component';
import { ResumoComponent } from './resumo/resumo.component';
import { ConsultaComponent } from './consulta/consulta.component';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// tslint:disable-next-line:prefer-const
let routes = [
  { path: 'resumo', component: ResumoComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'faturamento', component: FaturamentoComponent },
  { path: '**', redirectTo: '/resumo'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
