import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutParametresComponent } from './ajout-parametres.component';

describe('AjoutParametresComponent', () => {
  let component: AjoutParametresComponent;
  let fixture: ComponentFixture<AjoutParametresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutParametresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutParametresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
