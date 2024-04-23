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

  public isLoad: boolean = false;
  public route: Route = {
    route: './alejandro-toro'
  }

  /* Escuchamos el evento del loading para renderizar toda la pagina */
  onIsLoading(isLoading: boolean): void {
    this.isLoad = isLoading;
  }


}
