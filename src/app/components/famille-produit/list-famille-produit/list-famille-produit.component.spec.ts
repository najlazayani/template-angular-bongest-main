import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFamilleProduitComponent } from './list-famille-produit.component';

describe('ListFamilleProduitComponent', () => {
  let component: ListFamilleProduitComponent;
  let fixture: ComponentFixture<ListFamilleProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFamilleProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFamilleProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
