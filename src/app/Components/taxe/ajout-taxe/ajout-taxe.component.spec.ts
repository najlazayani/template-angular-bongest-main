import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTaxeComponent } from './ajout-taxe.component';

describe('AjoutTaxeComponent', () => {
  let component: AjoutTaxeComponent;
  let fixture: ComponentFixture<AjoutTaxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutTaxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
