import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('navDropdown') navDropdown?: ElementRef;

  /**
   * NOTA ARQUITETURAL:
   * ≠ Por que NÃO usamos uma diretiva reutilizável para dropdown?
   * 
   * Aplicamos o princípio YAGNI (You Aren't Gonna Need It):
   * - Temos apenas 1 dropdown confirmado (Endereços)
   * - Criar uma diretiva agora seria over-engineering
   * - Refatoraremos para diretiva quando tivermos 2+ dropdowns
   * - Por enquanto, mantemos lógica simples + HostListener para close externo
   * 
   * Benefício: Código limpo, sem abstração prematura, fácil manutenção.
   */
  @HostListener('document:click', ['$event'])
  clickFora(evento: MouseEvent): void {
    const target = evento.target as HTMLElement;
    if (this.navDropdown && !this.navDropdown.nativeElement.contains(target)) {
      this.subMenuEnderecosAberto = false;
    }
  }

  toggle() {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu() {
    this.menuAberto = false;
    this.subMenuEnderecosAberto = false;
  }

  toggleSubMenuEnderecos(evento: Event) {
    evento.preventDefault();
    this.subMenuEnderecosAberto = !this.subMenuEnderecosAberto;
  }
}

