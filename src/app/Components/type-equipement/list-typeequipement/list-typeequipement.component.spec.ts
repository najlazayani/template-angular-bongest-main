import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeequipementComponent } from './list-typeequipement.component';

describe('ListTypeequipementComponent', () => {
  let component: ListTypeequipementComponent;
  let fixture: ComponentFixture<ListTypeequipementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeequipementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeequipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
