import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTypeCompteurComponent } from './modifier-type-compteur.component';

describe('ModifierTypeCompteurComponent', () => {
  let component: ModifierTypeCompteurComponent;
  let fixture: ComponentFixture<ModifierTypeCompteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierTypeCompteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTypeCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
