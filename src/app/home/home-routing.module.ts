import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { BlogsComponent } from './pages/blogs/blogs.component';

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
        path: 'blogs',
        component: BlogsComponent
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
