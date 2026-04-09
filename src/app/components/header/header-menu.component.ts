import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sccon-header-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenu {
  menuAberto = false;
  subMenuEnderecosAberto = false;

  toggle() {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu() {
    this.menuAberto = false;
  }

  toggleSubMenuEnderecos(evento: Event) {
    evento.preventDefault();
    this.subMenuEnderecosAberto = !this.subMenuEnderecosAberto;
  }
}

