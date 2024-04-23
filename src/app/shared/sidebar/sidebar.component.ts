import { Component, HostListener } from '@angular/core';

@HostListener('window:scroll', ['$event'])
@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


}
