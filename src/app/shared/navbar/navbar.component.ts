import { Component } from '@angular/core';

interface Routes {
  name: string;
  route: string;
}

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public isClick: boolean = false;
  public menuHome: Routes[] = [
    { name: 'Inicio' , route: './inicio' },
    { name: 'Blogs' , route: './blogs' },
    { name: 'Contacto' , route: './contacto' },
  ];
  public displayMenu(): void {
    (this.isClick) ? this.isClick = false : this.isClick = true;
  }
}
