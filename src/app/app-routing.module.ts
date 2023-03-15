import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { BreakfastComponent } from './breakfast/breakfast.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutUs',component:AboutComponent},
  {path:'contactUs',component:ContactComponent},
  {path:'what_we_do',component:WhatWeDoComponent},
  {path:'menu',component:MenuComponent},
  {path:'breakfast',component:BreakfastComponent},
  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
