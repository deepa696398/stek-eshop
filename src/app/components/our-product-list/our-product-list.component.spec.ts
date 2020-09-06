import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductListComponent } from './our-product-list.component';

describe('OurProductListComponent', () => {
  let component: OurProductListComponent;
  let fixture: ComponentFixture<OurProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
