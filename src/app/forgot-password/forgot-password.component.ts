import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleService } from '../services/vehicle.service';
import { SpinnerService } from '../services/spinner/spinner.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private vehicleService: VehicleService, private spinnerService: SpinnerService) { }

  ngOnInit(): void {
  }

  public getVehicles(): Observable<any> {    
    this.vehicleService.getVehicles().subscribe(() => {
            
       this.spinnerService.setSpinnerValue(false);
     },
       (error) => {
         })
    return null;
  }
}
