import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParametresComponent } from './list-parametres.component';

describe('ListParametresComponent', () => {
  let component: ListParametresComponent;
  let fixture: ComponentFixture<ListParametresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParametresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParametresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
