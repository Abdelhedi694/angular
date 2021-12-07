import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniaturePersonneComponent } from './miniature-personne/miniature-personne.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildPage1Component } from './page1/child-page1/child-page1.component';
import { ChildPage2Component } from './page1/child-page2/child-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniaturePersonneComponent,
    Page1Component,
    Page2Component,
    NavbarComponent,
    ChildPage1Component,
    ChildPage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
