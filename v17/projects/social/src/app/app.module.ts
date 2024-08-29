import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // _angular_core-17_3_12-dev.js:3806 ERROR
    // RuntimeError: NG05100: Providers from the `BrowserModule` have already been loaded.
    // If you need access to common directives such as NgIf and NgFor, import the `CommonModule` instead.
    // BrowserModule,
    RouterModule// .forRoot(routes)
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
