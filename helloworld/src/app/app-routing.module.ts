import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ChildPage1Component } from './page1/child-page1/child-page1.component';
import { ChildPage2Component } from './page1/child-page2/child-page2.component';
const routes: Routes = [
  { path: 'page1', component: Page1Component,children:[{path: 'childPage1', component: ChildPage1Component},{path: 'childPage2', component: ChildPage2Component}] },
  { path: 'page2', component: Page2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
