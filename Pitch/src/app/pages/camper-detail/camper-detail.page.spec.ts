import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamperDetailPage } from './camper-detail.page';

describe('CamperDetailPage', () => {
  let component: CamperDetailPage;
  let fixture: ComponentFixture<CamperDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamperDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamperDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
