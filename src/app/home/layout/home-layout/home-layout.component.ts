import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css',
  animations: [
    trigger('navbar',[
      state('void', style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter', [
        animate(1000, style({
          transform: 'translateX(0%)',
          opacity: 1
        }))
      ])
    ]),
    trigger('sidebar',[
      state('void', style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter', [
        animate(900, style({
          transform: 'translateX(0%)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class HomeLayoutComponent {

  public isLoad: boolean = false;
  /* Escuchamos el evento del loading para renderizar toda la pagina */

  onIsLoading(isLoading: boolean): void {
    this.isLoad = isLoading;
  }
}
