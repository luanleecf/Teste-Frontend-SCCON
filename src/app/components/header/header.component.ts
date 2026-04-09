import { Component } from '@angular/core';
import { HeaderMenu } from './header-menu.component';

@Component({
  selector: 'sccon-header',
  standalone: true,
  imports: [HeaderMenu],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class Header {}

