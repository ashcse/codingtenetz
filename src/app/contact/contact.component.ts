import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
import { enquiryInfo } from '../models/enquiry';
import { SpinnerService } from '../services/spinner/spinner.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService, private formBuilder: FormBuilder,
    private spinnerService: SpinnerService) {
    this.contactForm = this.formBuilder.group({
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  public errorMessage: string;

  ngOnInit(): void {
  }

  public contactForm: FormGroup;

  public onSubmitClick(): void {
    this.spinnerService.setSpinnerValue(true);
    
    const emailAddr = this.contactForm.value.emailAddress;
    const descr = this.contactForm.value.description;

    const enquiry: enquiryInfo = {
      email_addr: emailAddr,
      description: descr
    }

    this.contactService.addEnquiry(enquiry).subscribe(() => {
     this.contactForm.reset();
     
     document.getElementById("modal-btn").click();
           
      this.spinnerService.setSpinnerValue(false);
    },
      (error) => {
        this.errorMessage = 'Error while adding the enquiry, please try later!';
      })
  }


  get emailAddress() { return this.contactForm.get('emailAddress');}
  
  get description() { return this.contactForm.get('description');}

}
