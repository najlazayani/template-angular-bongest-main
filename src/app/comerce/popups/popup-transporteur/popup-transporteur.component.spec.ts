import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTransporteurComponent } from './popup-transporteur.component';

describe('PopupTransporteurComponent', () => {
  let component: PopupTransporteurComponent;
  let fixture: ComponentFixture<PopupTransporteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupTransporteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTransporteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
