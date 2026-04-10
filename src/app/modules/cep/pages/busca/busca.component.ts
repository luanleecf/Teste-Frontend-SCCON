import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Listagem } from '../../components/listagem/listagem.component';
import { CepService, EnderecoResponse } from '../../services/cep.service';
import { BuscaHistoricoService } from '../../services/busca-historico.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'sccon-busca-cep',
  standalone: true,
  imports: [Listagem, CommonModule, ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss'
})
export class Busca implements OnInit {
  private fb = inject(FormBuilder);
  private cepService = inject(CepService);
  private historicoService = inject(BuscaHistoricoService);

  formularioBusca!: FormGroup;
  carregando = false;
  mensagem = '';
  tipoMensagem: 'sucesso' | 'erro' | '' = '';

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario(): void {
    this.formularioBusca = this.fb.group({
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]]
    });
  }

  buscar(): void {
    if (this.formularioBusca.invalid) {
      this.exibirMensagem('Preencha todos os campos corretamente', 'erro');
      return;
    }

    const { cep } = this.formularioBusca.value;
    this.carregando = true;
    this.tipoMensagem = '';

    this.cepService.buscarEndereco(cep).subscribe({
      next: (endereco: EnderecoResponse) => {
        if (endereco.erro) {
          this.exibirMensagem('CEP não encontrado', 'erro');
        } else {
          const enderecoCompleto = `${endereco.logradouro}, ${endereco.bairro} - ${endereco.localidade}, ${endereco.uf}`;
          this.historicoService.adicionarBusca({
            cep: endereco.cep,
            endereco: enderecoCompleto
          });
          this.exibirMensagem('Busca realizada com sucesso', 'sucesso');
          this.formularioBusca.reset();
        }
      },
      error: (erro: Error) => {
        this.exibirMensagem(erro.message || 'Erro ao buscar CEP', 'erro');
      },
      complete: () => {
        this.carregando = false;
      }
    });
  }

  private exibirMensagem(msg: string, tipo: 'sucesso' | 'erro'): void {
    this.mensagem = msg;
    this.tipoMensagem = tipo;
    setTimeout(() => {
      this.tipoMensagem = '';
      this.mensagem = '';
    }, 4000);
  }
}
