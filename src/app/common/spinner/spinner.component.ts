import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  public subscription!: Subscription;

  constructor(private spinner: NgxSpinnerService, private spinnerService: SpinnerService) {
    this.subscription = this.spinnerService.completedFlagSource.subscribe({
      next: (flag: boolean | null) => {
        this.SpinnerOnOff(flag);
      },
      error: (error) => {
        console.error('Spinner error:', error);
      },
      complete: () => {
        console.log('Spinner completed');
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public SpinnerOnOff(flag: boolean | null) {
    switch (flag) {
      case true:
        this.spinner.show();
        return;
      case false:
        this.spinner.hide();
        return;
      default:
        return;
    }
  }
}

