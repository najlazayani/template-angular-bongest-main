import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFamilleComponent } from './ajout-famille.component';

describe('AjoutFamilleComponent', () => {
  let component: AjoutFamilleComponent;
  let fixture: ComponentFixture<AjoutFamilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutFamilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
