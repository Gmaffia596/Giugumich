import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentcamperPage } from './rentcamper.page';

describe('RentcamperPage', () => {
  let component: RentcamperPage;
  let fixture: ComponentFixture<RentcamperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentcamperPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentcamperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
