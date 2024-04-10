import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { WithMePageComponent } from './pages/with-me-page/with-me-page.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'inicio',
        component: HomePageComponent,
      },
      {
        path: 'contacto',
        component: ContactsPageComponent
      },
      {
        path: 'proyectos',
        component: ProjectsPageComponent
      },
      {
        path: 'acerca-de-mi',
        component: WithMePageComponent
      },
      {
        path: '**',
        redirectTo: 'inicio'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
