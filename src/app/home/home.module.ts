import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WithMePageComponent } from './pages/with-me-page/with-me-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { SharedModule } from '../shared/shared.module';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';


@NgModule({
  declarations: [
    HomePageComponent,
    WithMePageComponent,
    ProjectsPageComponent,
    ContactsPageComponent,
    HomeLayoutComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
