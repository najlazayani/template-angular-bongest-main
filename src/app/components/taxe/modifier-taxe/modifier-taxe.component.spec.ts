import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTaxeComponent } from './modifier-taxe.component';

describe('ModifierTaxeComponent', () => {
  let component: ModifierTaxeComponent;
  let fixture: ComponentFixture<ModifierTaxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierTaxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
