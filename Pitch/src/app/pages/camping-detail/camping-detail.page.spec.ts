import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingDetailPage } from './camping-detail.page';

describe('campingDetailPage', () => {
  let component: CampingDetailPage;
  let fixture: ComponentFixture<CampingDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampingDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampingDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
