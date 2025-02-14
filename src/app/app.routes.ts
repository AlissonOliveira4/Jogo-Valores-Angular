import { Routes } from '@angular/router';
import { InicialComponent } from './components/inicial/inicial.component';
import { LoginComponent } from './components/login/login.component';
import { ValoresComponent } from './components/valores/valores.component';
import { FinalComponent } from './components/final/final.component';

export const routes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'determinacao', component: ValoresComponent, data: { img: 'assets/determinacao.png', valor: 'Determinação', proximo: 'disponibilidade' } },
  { path: 'disponibilidade', component: ValoresComponent, data: { img: 'assets/disponibilidade.png', valor: 'Disponibilidade', proximo: 'franqueza' } },
  { path: 'franqueza', component: ValoresComponent, data: { img: 'assets/franqueza.webp', valor: 'Franqueza', proximo: 'humildade' } },
  { path: 'humildade', component: ValoresComponent, data: { img: 'assets/humildade.png', valor: 'Humildade', proximo: 'simplicidade' } },
  { path: 'simplicidade', component: ValoresComponent, data: { img: 'assets/simplicidade.png', valor: 'Simplicidade', proximo: 'disciplina' } },
  { path: 'disciplina', component: ValoresComponent, data: { img: 'assets/disciplina.png', valor: 'Disciplina', proximo: 'atitudeDeDono' } },
  { path: 'atitudeDeDono', component: ValoresComponent, data: { img: 'assets/atitudededono.webp', valor: 'Atitude de Dono', proximo: 'final' } },
  { path: 'final', component: FinalComponent },
  { path: '**', redirectTo: '/' }
];
