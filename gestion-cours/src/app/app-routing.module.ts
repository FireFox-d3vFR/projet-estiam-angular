import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' }, // Redirection  vers la liste des cours
  { path: 'courses', component: CoursesComponent }, // Route pour la liste des cours
  { path: 'admin', component: AdminDashboardComponent }, // Route pour le tableau de bord de l'administrateur
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
