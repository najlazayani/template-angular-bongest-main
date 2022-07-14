import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypePlatComponent } from './list-type-plat.component';

describe('ListTypePlatComponent', () => {
  let component: ListTypePlatComponent;
  let fixture: ComponentFixture<ListTypePlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypePlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
