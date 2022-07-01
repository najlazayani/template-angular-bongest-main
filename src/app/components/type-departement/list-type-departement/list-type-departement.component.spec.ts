import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeDepartementComponent } from './list-type-departement.component';

describe('ListTypeDepartementComponent', () => {
  let component: ListTypeDepartementComponent;
  let fixture: ComponentFixture<ListTypeDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
