import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTypeDepartementComponent } from './modifier-type-departement.component';

describe('ModifierTypeDepartementComponent', () => {
  let component: ModifierTypeDepartementComponent;
  let fixture: ComponentFixture<ModifierTypeDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierTypeDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTypeDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
