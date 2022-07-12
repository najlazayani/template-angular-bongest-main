import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTypeequipementComponent } from './modifier-typeequipement.component';

describe('ModifierTypeequipementComponent', () => {
  let component: ModifierTypeequipementComponent;
  let fixture: ComponentFixture<ModifierTypeequipementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierTypeequipementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTypeequipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
