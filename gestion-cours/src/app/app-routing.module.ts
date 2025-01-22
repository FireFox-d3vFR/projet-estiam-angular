import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' }, // Redirection  vers la liste des cours
  { path: 'courses', component: CoursesComponent }, // Route pour la liste des cours
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
