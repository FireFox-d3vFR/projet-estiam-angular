import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  // { path: '**', redirectTo: '' },

  // { path: 'courses', loadChildren: () => import('./components/courses/courses.module').then((m) => m.CoursesModule), },
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'add-courses', component: AddCoursesComponent, canActivate: [AuthGuard] },

  { path: 'auth', component: AuthComponent},
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
