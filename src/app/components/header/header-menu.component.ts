import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'sccon-header-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenu {
  menuAberto = false;
  subMenuEnderecosAberto = false;

  constructor(private elementRef: ElementRef) { }

  /**
   * NOTA ARQUITETURAL:
   * Por que NÃO usamos uma diretiva reutilizável para dropdown?
   *
   * Aplicamos o princípio YAGNI (You Aren't Gonna Need It):
   * - Temos apenas 1 dropdown confirmado (Endereços)
   * - Criar uma diretiva agora seria over-engineering
   * - Refatoraremos para diretiva quando tivermos 2+ dropdowns
   * - Por enquanto, mantemos lógica simples + HostListener para fechar ao clicar fora
   *
   * Benefício: Código limpo, sem abstração prematura, fácil manutenção.
   */
  @HostListener('document:click', ['$event'])
  clickFora(evento: MouseEvent): void {
    const target = evento.target as HTMLElement;
    if (!this.elementRef.nativeElement.contains(target)) {
      this.subMenuEnderecosAberto = false;
      this.menuAberto = false; // Mobile: fecha o menu inteiro ao clicar fora
    }
  }

  toggle(): void {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu(): void {
    this.menuAberto = false;
    this.subMenuEnderecosAberto = false;
  }

  toggleSubMenuEnderecos(evento: Event): void {
    evento.preventDefault();
    evento.stopPropagation();
    this.subMenuEnderecosAberto = !this.subMenuEnderecosAberto;
  }
}

