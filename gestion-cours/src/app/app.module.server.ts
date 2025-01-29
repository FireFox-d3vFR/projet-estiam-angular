import { NgModule } from '@angular/core';
import { provideServerRoutesConfig } from '@angular/ssr';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [provideServerRoutesConfig(serverRoutes)],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
