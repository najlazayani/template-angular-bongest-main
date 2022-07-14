import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTypeDepartementComponent } from './ajout-type-departement.component';

describe('AjoutTypeDepartementComponent', () => {
  let component: AjoutTypeDepartementComponent;
  let fixture: ComponentFixture<AjoutTypeDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutTypeDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTypeDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
