import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Listagem } from '../../components/listagem/listagem.component';

@Component({
  selector: 'sccon-busca-cep',
  standalone: true,
  imports: [Listagem, CommonModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss'
})
export class Busca {

}
