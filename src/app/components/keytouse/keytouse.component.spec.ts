/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KeytouseComponent } from './keytouse.component';

describe('KeytouseComponent', () => {
  let component: KeytouseComponent;
  let fixture: ComponentFixture<KeytouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeytouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeytouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
