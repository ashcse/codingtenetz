import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDesignProjectsComponent } from './system-design-projects.component';

describe('SystemDesignProjectsComponent', () => {
  let component: SystemDesignProjectsComponent;
  let fixture: ComponentFixture<SystemDesignProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemDesignProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemDesignProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
