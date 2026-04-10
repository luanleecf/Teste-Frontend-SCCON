import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface BuscaRealizada {
  id: string;
  cep: string;
  endereco: string;
  dataBusca: Date;
}

@Injectable({
  providedIn: 'root'
})
export class BuscaHistoricoService {
  private historicoSubject = new BehaviorSubject<BuscaRealizada[]>([]);
  historico$ = this.historicoSubject.asObservable();

  constructor() {
    this.carregarHistorico();
  }

  adicionarBusca(busca: Omit<BuscaRealizada, 'id' | 'dataBusca'>): void {
    const novasBuscas = [
      {
        ...busca,
        id: this.gerarId(),
        dataBusca: new Date()
      },
      ...this.historicoSubject.value
    ];

    this.historicoSubject.next(novasBuscas);
    this.salvarHistorico(novasBuscas);
  }

  removerBusca(id: string): void {
    const novasBuscas = this.historicoSubject.value.filter(busca => busca.id !== id);
    this.historicoSubject.next(novasBuscas);
    this.salvarHistorico(novasBuscas);
  }

  obterHistorico(): Observable<BuscaRealizada[]> {
    return this.historico$;
  }

  limparHistorico(): void {
    this.historicoSubject.next([]);
    localStorage.removeItem('buscas_historico');
  }

  private gerarId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private salvarHistorico(buscas: BuscaRealizada[]): void {
    // Serializar com datas no formato ISO
    const buscasSerializadas = buscas.map(busca => ({
      ...busca,
      dataBusca: busca.dataBusca.toISOString()
    }));
    localStorage.setItem('buscas_historico', JSON.stringify(buscasSerializadas));
  }

  private carregarHistorico(): void {
    const dados = localStorage.getItem('buscas_historico');
    if (dados) {
      try {
        const buscas = JSON.parse(dados) as Array<Omit<BuscaRealizada, 'dataBusca'> & { dataBusca: string }>;
        const buscasComData = buscas.map(busca => ({
          ...busca,
          dataBusca: new Date(busca.dataBusca)
        }));
        this.historicoSubject.next(buscasComData);
      } catch (erro) {
        console.error('Erro ao carregar histórico:', erro);
      }
    }
  }
}
