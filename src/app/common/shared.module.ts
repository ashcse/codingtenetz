import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
  SpinnerComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule    
  ],
  exports: [
    NgxSpinnerModule,
    SpinnerComponent
  ]
})
export class SharedModule { }
