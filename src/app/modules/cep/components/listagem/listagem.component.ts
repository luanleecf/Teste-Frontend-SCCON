import { Component, DestroyRef, ViewChild, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BuscaHistoricoService, BuscaRealizada } from '../../services/busca-historico.service';

@Component({
  selector: 'sccon-listagem-buscas',
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatPaginatorModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class Listagem {
  private readonly historicoService = inject(BuscaHistoricoService);
  private readonly destroyRef = inject(DestroyRef);

  private readonly FORMATO_HORA: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };

  readonly colunas: string[] = ['cep', 'endereco', 'dataBusca', 'acao'];
  readonly dataSource = new MatTableDataSource<BuscaRealizada>();
  readonly pageSize = 5;

  private readonly totalBuscas = signal(0);
  readonly temBuscas = computed(() => this.totalBuscas() > 0);

  @ViewChild(MatPaginator) set paginator(p: MatPaginator) {
    if (p) this.dataSource.paginator = p;
  }

  constructor() {
    this.configurarHistorico();
  }

  private configurarHistorico(): void {
    this.historicoService.obterHistorico()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(buscas => {
        this.dataSource.data = buscas;
        this.totalBuscas.set(buscas.length);
      });
  }

  deletarBusca(id: string): void {
    this.historicoService.removerBusca(id);
  }

  formatarData(data: Date): string {
    const d = new Date(data);
    const dia = d.toLocaleDateString('pt-BR');
    const hora = d.toLocaleTimeString('pt-BR', this.FORMATO_HORA);
    return `${dia} - ${hora}`;
  }
}

