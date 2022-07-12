import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierParametresComponent } from './modifier-parametres.component';

describe('ModifierParametresComponent', () => {
  let component: ModifierParametresComponent;
  let fixture: ComponentFixture<ModifierParametresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierParametresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierParametresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
