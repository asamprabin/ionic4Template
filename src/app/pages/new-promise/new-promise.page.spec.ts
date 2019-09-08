import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPromisePage } from './new-promise.page';

describe('NewPromisePage', () => {
  let component: NewPromisePage;
  let fixture: ComponentFixture<NewPromisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPromisePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPromisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
