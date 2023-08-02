/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HisotryComponent } from './hisotry.component';

describe('HisotryComponent', () => {
  let component: HisotryComponent;
  let fixture: ComponentFixture<HisotryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisotryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HisotryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
