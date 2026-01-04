import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public callbackFunction: Function | undefined;
  constructor() { }

  private completedFlag = new BehaviorSubject<boolean | null>(null);
  completedFlagSource = this.completedFlag.asObservable();

  private completedFlagText = new BehaviorSubject<string | null>(null);
  completedFlagTextSource = this.completedFlagText.asObservable();

  private showCancelButton = new BehaviorSubject<boolean | null>(null);
  showCancelButtonSource = this.showCancelButton.asObservable();


  public setSpinnerValue(flag: boolean): void {
    this.completedFlag.next(flag);
  }

  public getSpinnerValue(): Observable<boolean | null> {
    return this.completedFlag;
  }

  public setSpinnerText(text: string): void {
    this.completedFlagText.next(text);
  }

  public setCancelCallbackMethod(method: Function): void {
    this.callbackFunction = method;
  }


}
