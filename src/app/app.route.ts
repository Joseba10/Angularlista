import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes

import { TodosComponent } from './todos/todos.component';


//Rutas de nuestra App
const appRoutes: Routes = [
 
   { path: '', component: TodosComponent },

];

export const AppRouter = RouterModule.forRoot(appRoutes);
