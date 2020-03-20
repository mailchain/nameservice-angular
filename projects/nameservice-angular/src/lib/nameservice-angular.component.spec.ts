import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameserviceAngularComponent } from './nameservice-angular.component';

describe('NameserviceAngularComponent', () => {
  let component: NameserviceAngularComponent;
  let fixture: ComponentFixture<NameserviceAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameserviceAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameserviceAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
