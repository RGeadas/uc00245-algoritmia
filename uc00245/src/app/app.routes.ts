import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'aula01', pathMatch: 'full' },
  { path: 'aula01', component: Home },
  { path: 'exercicio01', loadComponent: () => import('./pages/exercicios/exercicios').then(c => c.Exercicios)},
  
  { path: '**', component: Home },
];
