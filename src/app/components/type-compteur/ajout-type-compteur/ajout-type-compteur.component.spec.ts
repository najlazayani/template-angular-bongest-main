import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTypeCompteurComponent } from './ajout-type-compteur.component';

describe('AjoutTypeCompteurComponent', () => {
  let component: AjoutTypeCompteurComponent;
  let fixture: ComponentFixture<AjoutTypeCompteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutTypeCompteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTypeCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
