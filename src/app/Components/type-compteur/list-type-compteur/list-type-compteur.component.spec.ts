import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeCompteurComponent } from './list-type-compteur.component';

describe('ListTypeCompteurComponent', () => {
  let component: ListTypeCompteurComponent;
  let fixture: ComponentFixture<ListTypeCompteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeCompteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
