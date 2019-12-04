import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamperCheckoutPage } from './camper-checkout.page';

describe('CamperCheckoutPage', () => {
  let component: CamperCheckoutPage;
  let fixture: ComponentFixture<CamperCheckoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamperCheckoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamperCheckoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
