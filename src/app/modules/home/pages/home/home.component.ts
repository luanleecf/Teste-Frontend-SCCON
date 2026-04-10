import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sccon-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class Home {
  readonly nomeDesenvolvedor = 'Luan Lee da Costa Faria';
  readonly dataTeste = '10/04/2026';
}
