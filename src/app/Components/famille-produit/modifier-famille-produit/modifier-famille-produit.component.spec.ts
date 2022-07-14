import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFamilleProduitComponent } from './modifier-famille-produit.component';

describe('ModifierFamilleProduitComponent', () => {
  let component: ModifierFamilleProduitComponent;
  let fixture: ComponentFixture<ModifierFamilleProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierFamilleProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierFamilleProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
