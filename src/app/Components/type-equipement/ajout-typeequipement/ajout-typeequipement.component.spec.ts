import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTypeequipementComponent } from './ajout-typeequipement.component';

describe('AjoutTypeequipementComponent', () => {
  let component: AjoutTypeequipementComponent;
  let fixture: ComponentFixture<AjoutTypeequipementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutTypeequipementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTypeequipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
