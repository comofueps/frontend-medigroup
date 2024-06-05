import { Routes } from '@angular/router';
import { ListUsuariosComponent } from './components/usuarios/list-usuarios/list-usuarios.component';
import { ListProgresoComponent } from './components/progreso/list-progreso/list-progreso.component';
import { ContentComponent } from './components/layout/content/content.component';
import { ListRutinasComponent } from './components/rutinas/list-rutinas/list-rutinas.component';
import { AddCitasComponent } from './components/citas/add-citas/add-citas.component';
import { ListCitasComponent } from './components/citas/list-citas/list-citas.component';
import { AddRutinasComponent } from './components/rutinas/add-rutinas/add-rutinas.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'usuarios',
    component: ListUsuariosComponent,
  },
  {
    path: 'progreso/:id/:fecha',
    component: ListProgresoComponent,
  },
  {
    path: 'rutinas',
    component: ListRutinasComponent,
  },
  {
    path: 'citas',
    component: ListCitasComponent,
  },
  {
    path: 'citas/:id',
    component: AddCitasComponent,
  },

  {
    path: 'rutinas/:id',
    component: AddRutinasComponent
  },
];
