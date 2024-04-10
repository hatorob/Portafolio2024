import { Component } from '@angular/core';

interface Route {
  route: string;
}

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {

  public route: Route = {
    route: './alejandro-toro'
  }

}
