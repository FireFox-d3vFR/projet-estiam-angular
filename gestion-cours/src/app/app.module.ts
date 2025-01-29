import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesCardComponent } from './components/courses-card/courses-card.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CoursesModule } from './components/courses/courses.module';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AuthInterceptor } from './interceptors/auth.interceptors';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesCardComponent,
    NavbarComponent,
    FooterComponent,
    AdminDashboardComponent,
    CourseDetailComponent,
    AddCoursesComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CoursesModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
