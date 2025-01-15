import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/courses', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
