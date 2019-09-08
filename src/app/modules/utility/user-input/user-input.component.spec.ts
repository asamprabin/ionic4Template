import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputComponent } from './user-input.component';

describe('UserInputComponent', () => {
  let component: UserInputComponent;
  let fixture: ComponentFixture<UserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInputComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
