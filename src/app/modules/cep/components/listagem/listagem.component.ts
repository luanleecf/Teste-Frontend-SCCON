import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BuscaHistoricoService, BuscaRealizada } from '../../services/busca-historico.service';

@Component({
  selector: 'sccon-listagem-buscas',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class Listagem implements OnInit {
  private historicoService = inject(BuscaHistoricoService);

  buscas: BuscaRealizada[] = [];
  colunas: string[] = ['cep', 'endereco', 'dataBusca', 'acao'];

  ngOnInit(): void {
    this.historicoService.obterHistorico().subscribe(buscas => {
      this.buscas = buscas;
    });
  }

  deletarBusca(id: string): void {
    this.historicoService.removerBusca(id);
  }

  formatarData(data: Date): string {
    const d = new Date(data);
    const dia = d.toLocaleDateString('pt-BR');
    const hora = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    return `${dia} - ${hora}`;
  }
}
