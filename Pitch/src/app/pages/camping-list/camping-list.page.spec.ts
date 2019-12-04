import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingListPage } from './camping-list.page';

describe('CampingListPage', () => {
  let component: CampingListPage;
  let fixture: ComponentFixture<CampingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampingListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
