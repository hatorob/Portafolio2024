import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SniperLoadingComponent } from './sniper-loading/sniper-loading.component';

import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    SniperLoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SniperLoadingComponent,
  ],
})
export class SharedModule { }
