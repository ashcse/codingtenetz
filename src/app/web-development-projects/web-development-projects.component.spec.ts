import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentProjectsComponent } from './web-development-projects.component';

describe('WebDevelopmentProjectsComponent', () => {
  let component: WebDevelopmentProjectsComponent;
  let fixture: ComponentFixture<WebDevelopmentProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDevelopmentProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevelopmentProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
