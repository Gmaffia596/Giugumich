import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampersListPage } from './campers-list.page';

describe('CampersListPage', () => {
  let component: CampersListPage;
  let fixture: ComponentFixture<CampersListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampersListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
