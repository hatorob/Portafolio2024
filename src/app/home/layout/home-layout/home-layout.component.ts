import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {

  public isLoad: boolean = false;
  /* Escuchamos el evento del loading para renderizar toda la pagina */

  onIsLoading(isLoading: boolean): void {
    this.isLoad = isLoading;
  }
}
