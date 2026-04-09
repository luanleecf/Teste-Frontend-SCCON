import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/home/pages/home/home.component').then(m => m.Home)
  },
  {
    path: 'cep',
    loadComponent: () => import('./modules/cep/pages/busca/busca.component').then(m => m.Busca)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
