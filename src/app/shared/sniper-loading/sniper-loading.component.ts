import { Component, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'shared-sniper-loading',
  templateUrl: './sniper-loading.component.html',
  styleUrl: './sniper-loading.component.css'
})
export class SniperLoadingComponent {

  @Output()
  public onIsLoading: EventEmitter<boolean>  = new EventEmitter();

  public isLoading: boolean = false;

  constructor( private spinner: NgxSpinnerService ) {}

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.isLoading = true;
      this.onIsLoading.emit(this.isLoading);
    }, 1000);
  }

}
