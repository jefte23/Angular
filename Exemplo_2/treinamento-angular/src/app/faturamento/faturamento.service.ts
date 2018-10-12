import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaturamentoService {

  constructor(private http: HttpClient) { }

  getFaturamento() {
    return this.http.get(environment.apiUrl + 'faturamento');

  }
}
