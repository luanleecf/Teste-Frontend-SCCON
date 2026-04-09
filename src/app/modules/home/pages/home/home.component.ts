import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sccon-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class Home implements OnInit {
  nomeDesenvolvedor = 'Luan Lee da Costa Faria';
  dataAtual: string = '';

  ngOnInit() {
    this.formatarDataAtual();
  }

  private formatarDataAtual() {
    const agora = new Date();
    this.dataAtual = agora.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
}
