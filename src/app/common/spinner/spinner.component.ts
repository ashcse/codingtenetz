import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  public subscription: Subscription;
  public actionText: string;
  public callbackMethod: any;
  public isCancelButtonvisibile: boolean;

  constructor(private spinner: NgxSpinnerService, private spinnerService: SpinnerService) {

    this.subscription = this.spinnerService.completedFlagSource.subscribe((flag: boolean) => {
      this.SpinnerOnOff(flag);
    });
  }

  ngOnInit(): void {
  }

  public SpinnerOnOff(flag: boolean) {
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

