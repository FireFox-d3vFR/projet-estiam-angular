import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'courses',
    loadChildren: () =>
      import('./components/courses/courses.module').then(
        (m) => m.CoursesModule
      ),
  },
  { path: 'courses/:id', component: CoursesComponent },
  {
    path: 'add-courses',
    component: AddCoursesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'admin', component: AdminDashboardComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
