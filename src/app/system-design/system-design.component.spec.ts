import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDesignComponent } from './system-design.component';

describe('SystemDesignComponent', () => {
  let component: SystemDesignComponent;
  let fixture: ComponentFixture<SystemDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
