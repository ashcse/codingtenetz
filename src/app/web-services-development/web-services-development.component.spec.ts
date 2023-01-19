import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebServicesDevelopmentComponent } from './web-services-development.component';

describe('WebServicesDevelopmentComponent', () => {
  let component: WebServicesDevelopmentComponent;
  let fixture: ComponentFixture<WebServicesDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebServicesDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebServicesDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
