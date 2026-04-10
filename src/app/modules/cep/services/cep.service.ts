import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface EnderecoResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private apiUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) {}

  buscarEndereco(cep: string): Observable<EnderecoResponse> {
    // Remove máscara do CEP (00000-000 → 00000000)
    const cepLimpo = cep.replace(/\D/g, '');

    if (!cepLimpo || cepLimpo.length !== 8) {
      return throwError(() => new Error('CEP inválido'));
    }

    return this.http
      .get<EnderecoResponse>(`${this.apiUrl}/${cepLimpo}/json/`)
      .pipe(
        catchError(erro => {
          console.error('Erro ao buscar CEP:', erro);
          return throwError(() => new Error('Erro ao consultar ViaCEP'));
        })
      );
  }
}
