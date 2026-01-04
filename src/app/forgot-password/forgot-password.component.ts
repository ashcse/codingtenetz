import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
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
    return this.vehicleService.getVehicles().pipe(
      tap({
        next: () => {
          this.spinnerService.setSpinnerValue(false);
        },
        error: (error) => {
          console.error('Error fetching vehicles:', error);
        },
        complete: () => {
          console.log('Vehicles loaded successfully');
        }
      })
    );
  }
}
