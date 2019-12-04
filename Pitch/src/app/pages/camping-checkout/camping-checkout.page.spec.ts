import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingCheckoutPage } from './camping-checkout.page';

describe('campingCheckoutPage', () => {
  let component: CampingCheckoutPage;
  let fixture: ComponentFixture<CampingCheckoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampingCheckoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampingCheckoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
