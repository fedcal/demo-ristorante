import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Trattoria del Mare — Pesce fresco a Bari dal 1995'
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.component').then((m) => m.MenuComponent),
    title: 'Menu — Trattoria del Mare'
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('./pages/chi-siamo/chi-siamo.component').then((m) => m.ChiSiamoComponent),
    title: 'Chi siamo — Trattoria del Mare'
  },
  {
    path: 'galleria',
    loadComponent: () => import('./pages/galleria/galleria.component').then((m) => m.GalleriaComponent),
    title: 'Galleria — Trattoria del Mare'
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti.component').then((m) => m.ContattiComponent),
    title: 'Prenotazioni e Contatti — Trattoria del Mare'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
