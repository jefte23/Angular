import { ProdutoService } from './produtos.service';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { UppercaseDirective } from './produtos/uppercase.directive';

const appRoutes: Routes = [
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos/:id', component: EditarProdutoComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    ProdutosComponent,
    EditarProdutoComponent,
    UppercaseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
