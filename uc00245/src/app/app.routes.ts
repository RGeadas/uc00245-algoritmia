import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Exercicios }  from './pages/exercicios/exercicios';

export const routes: Routes = [
  { path: '', redirectTo: 'aula01', pathMatch: 'full' },
  { path: 'aula01', component: Home },
  { path: 'exercicio01', component: Exercicios },
  // { path: 'Wellcome', loadComponent: () => import('./pages/wellcome/wellcome').then(c => c.Wellcome)},
  /* { path: 'Welcome', component: Welcome}, */
 
  { path: '**', component: Home },
];
