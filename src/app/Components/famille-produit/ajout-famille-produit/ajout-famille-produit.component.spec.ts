import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFamilleProduitComponent } from './ajout-famille-produit.component';

describe('AjoutFamilleProduitComponent', () => {
  let component: AjoutFamilleProduitComponent;
  let fixture: ComponentFixture<AjoutFamilleProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutFamilleProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFamilleProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
