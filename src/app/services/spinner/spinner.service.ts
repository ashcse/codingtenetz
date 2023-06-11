import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public callbackFunction: Function;
  constructor() { }

  private completedFlag = new BehaviorSubject<boolean>(null);
  completedFlagSource = this.completedFlag.asObservable();

  private completedFlagText = new BehaviorSubject<string>(null);
  completedFlagTextSource = this.completedFlagText.asObservable();

  private showCancelButton = new BehaviorSubject<boolean>(null);
  showCancelButtonSource = this.showCancelButton.asObservable();


  public setSpinnerValue(flag: boolean) {
    this.completedFlag.next(flag)
  }

  public getSpinnerValue(): Observable<boolean> {
    return this.completedFlag;
  }

  public setSpinnerText(text: string) {
    this.completedFlagText.next(text);
  }

  public setCancelCallbackMethod(method:Function) {
    this.callbackFunction = method;
  }


}
